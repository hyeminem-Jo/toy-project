'use client';

import { useParams } from 'next/navigation';
import StarIcon from '@mui/icons-material/Star';
import * as S from './styled';
import { Database } from 'types_db';

export type MovieRow = Database['public']['Tables']['movie']['Row'];

const MovieDetailConainer = ({ movie }: { movie: MovieRow }) => {
  return (
    <S.MovieDetailContainer>
      <S.MovieDetailContent>
        <S.MovieDetailImageWrap>
          <S.MovieDetailImage
            src={movie.image_url}
            alt='영화 이미지'
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </S.MovieDetailImageWrap>
        <S.MovieDetailInfo>
          <S.MovieDetailTitle>{movie.title}</S.MovieDetailTitle>
          <S.MovieDetailDescWrap>
            <S.MovieDetailDescTitle>줄거리</S.MovieDetailDescTitle>
            <S.MovieDetailDesc>{movie.overview}</S.MovieDetailDesc>
          </S.MovieDetailDescWrap>
          <S.MovieDetailBottom>
            _
            <S.MovieDetailAverage>
              <StarIcon sx={{ fontSize: 16, marginRight: 0.5, color: '#FFD700' }} />
              평점: {movie.vote_average}
            </S.MovieDetailAverage>
            <S.MovieDetailPopularity>관객수: {movie.popularity}</S.MovieDetailPopularity>
            <S.MovieDetailReleaseDate>개봉일: {movie.release_date}</S.MovieDetailReleaseDate>
          </S.MovieDetailBottom>
        </S.MovieDetailInfo>
      </S.MovieDetailContent>
    </S.MovieDetailContainer>
  );
};

export default MovieDetailConainer;
