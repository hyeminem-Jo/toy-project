'use client';

import * as S from './styled';
import Button from '@/app/_modules/common/components/button/button/Button';
import { useRouter } from 'next/navigation';

const MovieItem = () => {
  const router = useRouter();
  return (
    <S.MovieItemContainer>
      <S.MovieImageWrap>
        <S.MovieImage
          src='https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg'
          alt='영화 이미지'
          fill
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </S.MovieImageWrap>
      <S.MovieDim className='movie-dim'>
        <S.MovieTitle>영화 제목</S.MovieTitle>
        <S.MovieDesc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit iste vero assumenda eos
          id veritatis temporibus alias numquam, deleniti autem debitis corrupti deserunt illo
          labore harum nemo itaque, quia in.
        </S.MovieDesc>
        <Button
          text='자세히 보기'
          filled
          onClick={() => {
            router.push('/');
          }}
        />
      </S.MovieDim>
    </S.MovieItemContainer>
  );
};

export default MovieItem;
