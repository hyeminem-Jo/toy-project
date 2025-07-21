'use client';

import MovieItem from '../movie-item/MovieItem';
import * as S from './styled';
import { useQuery } from '@tanstack/react-query';
import { searchMovies } from 'actions/movieActions';
import Loading from '@/app/_modules/common/components/loading/Loading';
import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { movieSearchState } from '@/app/store';

const MovieList = () => {
  const movieSearch = useAtomValue(movieSearchState);
  const [searchInput, setSearchInput] = useState<string>('');

  console.log('movieSearch', movieSearch);

  const getAllMoviesQuery = useQuery({
    queryKey: ['movie', searchInput],
    queryFn: () => searchMovies(searchInput),
  });

  return (
    <S.MovieListContainer>
      {getAllMoviesQuery?.isLoading && (
        <S.LoadingWrap>
          <Loading />
        </S.LoadingWrap>
      )}
      {getAllMoviesQuery?.data?.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
      {/* <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem /> */}
    </S.MovieListContainer>
  );
};

export default MovieList;
