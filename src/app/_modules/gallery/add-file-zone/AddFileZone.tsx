'use client';

import React, { useRef } from 'react';
import * as S from './styled';
import Button from '@/app/_modules/common/components/button/button/Button';

const AddFileZone = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  // 파일명을 영문, 숫자, -, _ 만 남기고 나머지는 _로 치환 + 중복 방지용 타임스탬프 추가
  const toSafeFileName = (name: string) => {
    const ext = name.includes('.') ? '.' + name.split('.').pop() : '';
    const base = name.replace(/\.[^/.]+$/, '');
    const safeBase = base.replace(/[^a-zA-Z0-9-_]/g, '_');
    const timestamp = Date.now();
    return `${safeBase}_${timestamp}${ext}`;
  };

  // API Route로 파일 업로드
  const handleUpload = async (formData: FormData) => {
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Upload failed');
    return result.data;
  };

  return (
    <S.AddFileZone
      onSubmit={async (e) => {
        e.preventDefault();
        const file = fileRef.current?.files?.[0];
        if (file) {
          const formData = new FormData();
          // 파일명 변환
          const safeName = toSafeFileName(file.name);
          const safeFile = new File([file], safeName, { type: file.type });
          formData.append('file', safeFile);
          try {
            const result = await handleUpload(formData);
            console.log(result);
          } catch (err) {
            alert((err as Error).message);
          }
        }
      }}
    >
      <input type='file' ref={fileRef} />
      <Button type='submit' text='파일 업로드' iconName='plus' filled />
    </S.AddFileZone>
  );
};

export default AddFileZone;
