'use client';

import * as S from './styled';
import Image from 'next/image';
import Input from '@/app/_modules/common/components/form/input/Input';
import { useState } from 'react';

const MovieHeader = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <S.MovieHeader>
      <S.MovieLogo>
        <Image src='/assets/images/netflix-logo.svg' alt='logo' width={130} height={100} />
        <S.MovieLogoText>|&nbsp;&nbsp;&nbsp;Clone Project</S.MovieLogoText>
      </S.MovieLogo>
      <Input
        id='movie-search'
        label='영화 검색'
        placeholder='영화를 검색하세요.'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        isSearch
        width={500}
        color='black'
      />
    </S.MovieHeader>
  );
};

export default MovieHeader;
