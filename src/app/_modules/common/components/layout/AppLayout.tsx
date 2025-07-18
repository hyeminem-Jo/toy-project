'use client';

import React from 'react';
import * as S from './styled';
import Header from '@/app/_modules/common/components/header/Header';

interface AppLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  bgColor?: string;
  isGallery?: boolean;
}

const AppLayout = ({
  children,
  header,
  footer,
  bgColor = '#fff',
  isGallery = false,
}: AppLayoutProps) => {
  return (
    <S.AppLayout $bgColor={bgColor} $isGallery={isGallery}>
      {header}
      <S.AppLayoutContent>{children}</S.AppLayoutContent>
      {footer}
    </S.AppLayout>
  );
};

export default AppLayout;
