'use client';

import * as S from './styled';
import Button from '@/app/_modules/common/components/button/button/Button';
import { useRouter } from 'next/navigation';
import { Database } from 'types_db';

export type MovieRow = Database['public']['Tables']['movie']['Row'];

const MovieItem = ({ movie }: { movie: MovieRow }) => {
  const router = useRouter();
  return (
    <S.MovieItemContainer>
      <S.MovieImageWrap>
        <S.MovieImage
          src={movie.image_url}
          alt='영화 이미지'
          fill
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </S.MovieImageWrap>
      <S.MovieDim className='movie-dim'>
        <S.MovieTitle>{movie.title}</S.MovieTitle>
        <S.MovieDesc>{movie.overview}</S.MovieDesc>
        <Button
          text='자세히 보기'
          filled
          onClick={() => {
            router.push(`/movie/${movie.id}`);
          }}
        />
      </S.MovieDim>
    </S.MovieItemContainer>
  );
};

export default MovieItem;
