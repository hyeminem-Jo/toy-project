'use client';

import Link from 'next/link';
import * as S from './styled';

const MovieFooter = () => {
  return (
    <S.MovieFooter>
      <S.MovieFooterText>
        Movie Database Scraped from <Link href='https://www.themoviedb.org/'>TMDB</Link>
      </S.MovieFooterText>
    </S.MovieFooter>
  );
};

export default MovieFooter;
