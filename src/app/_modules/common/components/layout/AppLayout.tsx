'use client';

import React from 'react';
import * as S from './styled';
import Header from '@/app/_modules/common/components/header/Header';

const AppLayout = ({
  children,
  bgColor = '#fff',
  isGallery = false,
}: {
  children: React.ReactNode;
  bgColor?: string;
  isGallery?: boolean;
}) => {
  return (
    <S.AppLayout $bgColor={bgColor} $isGallery={isGallery}>
      {/* <Header /> */}
      <S.AppLayoutContent>{children}</S.AppLayoutContent>
    </S.AppLayout>
  );
};

export default AppLayout;
