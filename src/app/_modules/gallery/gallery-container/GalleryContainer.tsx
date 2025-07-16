'use client';

import React, { useState } from 'react';
import AddFileZone from '@/app/_modules/gallery/add-file-zone/AddFileZone';
import AppLayout from '@/app/_modules/common/components/layout/AppLayout';
import * as S from './styled';
import Input from '@/app/_modules/common/components/form/input/Input';
import GalleryImageList from '../gallery-image-list/GalleryImageList';

const GalleryContainer = () => {
  const [searchInput, setSearchInput] = useState('');

  // TODO:
  // 이미지 상세(확대)보기,
  // 상세보기 내에서 슬라이드 기능으로 보기,
  // 이미지 다운로드 기능,
  // 이미지 선택 후 일괄 삭제 기능

  return (
    <AppLayout bgColor='linear-gradient(45deg, linen, transparent)'>
      <S.GalleryContainer>
        <S.GalleryTitle>갤러리 🖼️</S.GalleryTitle>
        <S.GalleryContent>
          <Input
            id='todo-search'
            label='이미지 검색'
            placeholder='이미지를 검색하세요.'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            isSearch
          />
          <AddFileZone />
          <GalleryImageList />
        </S.GalleryContent>
      </S.GalleryContainer>
    </AppLayout>
  );
};

export default GalleryContainer;
