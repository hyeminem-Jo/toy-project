import { Metadata } from 'next';
import AppLayout from '@/app/_modules/common/components/layout/AppLayout';
import MovieContainer from '@/app/_modules/movie/movie-container/MovieConainer';

export const metadata: Metadata = {
  title: "Hyejin's Toy Project | 영화 목록 🎥",
  description: '영화 목록을 확인해보세요 🎥',
};

const MoviePage = () => {
  return (
    <AppLayout>
      <MovieContainer />
    </AppLayout>
  );
};

export default MoviePage;
