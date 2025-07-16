'use client';

import React from 'react';
import * as S from './styled';
import Header from '@/app/_modules/common/components/header/Header';

const AppLayout = ({
  children,
  bgColor = '#fff',
}: {
  children: React.ReactNode;
  bgColor?: string;
}) => {
  return (
    <S.AppLayout $bgColor={bgColor}>
      {/* <Header /> */}
      <S.AppLayoutContent>{children}</S.AppLayoutContent>
    </S.AppLayout>
  );
};

export default AppLayout;
