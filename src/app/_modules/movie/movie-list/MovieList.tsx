'use client';

import MovieItem from '../movie-item/MovieItem';
import * as S from './styled';

const MovieList = () => {
  return (
    <S.MovieListContainer>
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </S.MovieListContainer>
  );
};

export default MovieList;
