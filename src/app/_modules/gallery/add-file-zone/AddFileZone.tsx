'use client';

import React, { useCallback, useState } from 'react';
import * as S from './styled';
import Button from '@/app/_modules/common/components/button/button/Button';
import { queryClient } from '@/app/config/ReactQueryProvider';
import { useDropzone } from 'react-dropzone';

const AddFileZone = () => {
  const [isUploading, setIsUploading] = useState(false);

  // 파일명이 영문, 숫자, -, _ 로만 이루어져 있다면 원본 파일명 유지, 아닐 경우 변환 후 타임스탬프 추가
  const toSafeFileName = (name: string) => {
    const ext = name.includes('.') ? '.' + name.split('.').pop() : '';
    const base = name.replace(/\.[^/.]+$/, '');
    // 파일명이 이미 안전한 형식인지 체크
    if (/^[a-zA-Z0-9-_]+$/.test(base)) {
      return name;
    }
    const safeBase = base.replace(/[^a-zA-Z0-9-_]/g, '_');
    const timestamp = Date.now();
    return `${safeBase}_${timestamp}${ext}`;
  };

  // API Route로 파일 업로드 (서버액션으로 파일 형식 데이터 업로드 실행이 안되는 상황)
  const handleUpload = async (formData: FormData) => {
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Upload failed');
    return result.data;
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (isUploading) return;

    if (acceptedFiles.length > 0) {
      const formData = new FormData();

      acceptedFiles.forEach((file) => {
        const safeName = toSafeFileName(file.name);
        const safeFile = new File([file], safeName, { type: file.type });
        formData.append('file', safeFile);
      });

      try {
        setIsUploading(true);
        const result = await handleUpload(formData);
        queryClient.invalidateQueries({ queryKey: ['images'] });
        console.log(result);
      } catch (err) {
        alert((err as Error).message);
      } finally {
        setIsUploading(false);
      }
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <S.AddFileZone {...getRootProps()} $disabled={isUploading}>
      <input {...getInputProps()} />
      <S.AddFileZoneInner>
        <Button type='button' text='파일 업로드' iconName='plus' filled loading={isUploading} />
        <S.AddFileZoneInnerText $isDragActive={isDragActive}>
          {isDragActive ? '그래 여기다 놔!!!⭐️' : '파일을 드래그 하거나 클릭하여 업로드해주세요.'}
        </S.AddFileZoneInnerText>
      </S.AddFileZoneInner>
    </S.AddFileZone>
  );
};

export default AddFileZone;
