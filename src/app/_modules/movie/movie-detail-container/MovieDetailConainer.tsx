'use client';

import { useParams } from 'next/navigation';
import StarIcon from '@mui/icons-material/Star';
import * as S from './styled';

const MovieDetailConainer = () => {
  const { id } = useParams();
  return (
    <S.MovieDetailContainer>
      <S.MovieDetailContent>
        <S.MovieDetailImageWrap>
          <S.MovieDetailImage
            src='https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg'
            alt='영화 이미지'
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </S.MovieDetailImageWrap>
        <S.MovieDetailInfo>
          <S.MovieDetailTitle>영화 제목</S.MovieDetailTitle>
          <S.MovieDetailDescWrap>
            <S.MovieDetailDescTitle>줄거리</S.MovieDetailDescTitle>
            <S.MovieDetailDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam, quos.
            </S.MovieDetailDesc>
          </S.MovieDetailDescWrap>
          <S.MovieDetailBottom>
            _
            <S.MovieDetailAverage>
              <StarIcon sx={{ fontSize: 16, marginRight: 0.5, color: '#FFD700' }} />
              평점: 8.0
            </S.MovieDetailAverage>
            <S.MovieDetailPopularity>관객수: 242348.234</S.MovieDetailPopularity>
            <S.MovieDetailReleaseDate>개봉일: 2025-01-01</S.MovieDetailReleaseDate>
          </S.MovieDetailBottom>
        </S.MovieDetailInfo>
      </S.MovieDetailContent>
    </S.MovieDetailContainer>
  );
};

export default MovieDetailConainer;
