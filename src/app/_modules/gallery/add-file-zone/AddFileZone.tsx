'use client';

import React, { useRef } from 'react';
import * as S from './styled';
import Button from '@/app/_modules/common/components/button/button/Button';
import { uploadFile } from 'actions/storageActions';

const AddFileZone = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <S.AddFileZone
      onSubmit={async (e) => {
        e.preventDefault();
        const file = fileRef.current?.files?.[0];
        // lastModified 속성을 사용하여 파일 업로드 시간 나중에 삽입
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          console.log(file);
          // console.log(file.name);
          const result = await uploadFile(formData);
          console.log(result);
        }
      }}
    >
      <input type='file' ref={fileRef} />
      {/* <i className='fa-solid fa-plus'></i> */}
      <Button
        type='submit'
        text='파일 업로드'
        iconName='plus'
        filled
        // onClick={() => createTodoMutation.mutate()}
        // disabled={createTodoMutation.isPending}
        // loading={createTodoMutation.isPending}
      />
    </S.AddFileZone>
  );
};

export default AddFileZone;
