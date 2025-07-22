'use client';

import React from 'react';
import * as S from './styled';
import SideBar from '../side-bar/SideBar';

const JStagramContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.JStagramContainer>
      <SideBar />
      <S.JStagramContent>{children}</S.JStagramContent>
    </S.JStagramContainer>
  );
};

export default JStagramContainer;
