import AppLayout from '@/app/_modules/common/components/layout/AppLayout';
import MovieDetailConainer from '@/app/_modules/movie/movie-detail-container/MovieDetailConainer';
import MovieHeader from '@/app/_modules/movie/movie-header/MovieHeader';
import MovieFooter from '@/app/_modules/movie/movie-footer/MovieFooter';

export const metadata = {
  title: '영화 상세 페이지',
  description: '영화 상세 페이지 입니다.',
};

const MovieDetailPage = () => {
  return (
    <AppLayout bgColor='#222' header={<MovieHeader />} footer={<MovieFooter />}>
      <MovieDetailConainer />
    </AppLayout>
  );
};

export default MovieDetailPage;
