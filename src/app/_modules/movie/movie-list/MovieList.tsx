'use client';

import MovieItem from '../movie-item/MovieItem';
import * as S from './styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import { searchMovies } from 'actions/movieActions';
import Loading from '@/app/_modules/common/components/loading/Loading';
import { useAtomValue } from 'jotai';
import { movieSearchState } from '@/app/store';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const MovieList = () => {
  const movieSearch = useAtomValue(movieSearchState);

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movie', movieSearch],
    queryFn: ({ pageParam }) => searchMovies(movieSearch, pageParam, 12),
    getNextPageParam: (lastPage) => {
      // movieActions 에서 error 발생 시 페이지 번호를 null로 설정하면 lastPage.page 가 null 그 이후로 더 이상 페이지 번호를 증가시키지 않음
      // (hasNextPage 가 계속 true 로 유지되어 무한 스크롤 발생 이슈 해결)
      return lastPage.page ? lastPage.page + 1 : null;
    },
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  console.log('hasNextPage', hasNextPage);
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage && !isFetching) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <S.MovieListContainer>
      {isFetching ||
        (isFetchingNextPage && (
          <S.LoadingWrap>
            <Loading />
          </S.LoadingWrap>
        ))}
      {data && (
        <>
          {data?.pages?.map((page) =>
            page.data.map((movie) => <MovieItem key={movie.id} movie={movie} />),
          )}
          <div ref={ref} />
        </>
      )}
    </S.MovieListContainer>
  );
};

export default MovieList;
