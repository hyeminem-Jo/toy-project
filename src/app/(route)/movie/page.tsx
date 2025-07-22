import { Metadata } from 'next';
import AppLayout from '@/app/_modules/common/components/layout/AppLayout';
import MovieContainer from '@/app/_modules/movie/movie-container/MovieConainer';
import MovieHeader from '@/app/_modules/movie/movie-header/MovieHeader';
import MovieFooter from '@/app/_modules/movie/movie-footer/MovieFooter';

export const metadata: Metadata = {
  title: "Hyejin's Project | 영화 🎥",
  description: '영화 목록을 확인해보세요 🎥',
};

const MoviePage = () => {
  return (
    <AppLayout bgColor='#222' header={<MovieHeader />} footer={<MovieFooter />}>
      <MovieContainer />
    </AppLayout>
  );
};

export default MoviePage;
