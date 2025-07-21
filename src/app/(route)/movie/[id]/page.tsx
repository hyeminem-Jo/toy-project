import AppLayout from '@/app/_modules/common/components/layout/AppLayout';
import MovieDetailConainer from '@/app/_modules/movie/movie-detail-container/MovieDetailConainer';
import MovieHeader from '@/app/_modules/movie/movie-header/MovieHeader';
import MovieFooter from '@/app/_modules/movie/movie-footer/MovieFooter';
import { getMovie } from 'actions/movieActions';

export const metadata = {
  title: '영화 상세 페이지',
  description: '영화 상세 페이지 입니다.',
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = await getMovie(Number(id));
  console.log('movie', movie);

  return (
    <AppLayout bgColor='#222' header={<MovieHeader />} footer={<MovieFooter />}>
      {movie ? <MovieDetailConainer movie={movie} /> : <div>영화를 찾을 수 없습니다.</div>}
    </AppLayout>
  );
}
