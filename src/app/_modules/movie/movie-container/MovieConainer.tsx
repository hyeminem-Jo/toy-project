'use client';

import * as S from './styled';
import MovieList from '../movie-list/MovieList';

const MovieConainer = () => {
  return (
    <S.MovieContainer>
      <MovieList />
    </S.MovieContainer>
  );
};

export default MovieConainer;
