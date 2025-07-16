import React from 'react';
import * as S from './styled';

const AddFileZone = () => {
  return (
    <S.AddFileZone>
      <input type='file' />
      <i className='fa-solid fa-plus'></i>
    </S.AddFileZone>
  );
};

export default AddFileZone;
