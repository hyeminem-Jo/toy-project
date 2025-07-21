'use client';

import * as S from './styled';
import Image from 'next/image';
import Input from '@/app/_modules/common/components/form/input/Input';
import { useEffect, useRef, useState } from 'react';
import IconButton from '@/app/_modules/common/components/button/icon-button/IconButton';
import { useIsMobile } from '@/app/_modules/common/hooks/useIsMobile';
import { useSetAtom } from 'jotai';
import { movieSearchState } from '@/app/store';

const MovieHeader = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [isSearchOn, setIsSearchOn] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const inputRef = useRef<HTMLInputElement>(null);
  const setMovieSearch = useSetAtom(movieSearchState);

  useEffect(() => {
    if (isSearchOn) {
      inputRef.current?.focus();
    }
  }, [isSearchOn]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setMovieSearch({ searchInput });
    }, 300); // 300ms 디바운스
    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  return (
    <S.MovieHeader>
      <S.MovieLogo href='/movie'>
        <Image src='/assets/images/netflix-logo.svg' alt='netflix-logo' width={130} height={100} />
        <S.MovieLogoText>|&nbsp;&nbsp;&nbsp;Clone Project</S.MovieLogoText>
      </S.MovieLogo>
      {isMobile && (
        <IconButton iconName='search' onClick={() => setIsSearchOn(!isSearchOn)} color='black' />
      )}
      {(!isMobile || isSearchOn) && (
        <S.MovieHeaderInputWrap>
          <Input
            id='movie-search'
            label='영화 검색'
            placeholder='영화를 검색하세요.'
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            isSearch={!isMobile}
            width={!isMobile ? 500 : undefined}
            color='black'
            ref={inputRef}
          />
        </S.MovieHeaderInputWrap>
      )}
    </S.MovieHeader>
  );
};

export default MovieHeader;
