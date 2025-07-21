import AppLayout from '@/app/_modules/common/components/layout/AppLayout';
import MovieDetailConainer from '@/app/_modules/movie/movie-detail-container/MovieDetailConainer';
import MovieHeader from '@/app/_modules/movie/movie-header/MovieHeader';
import MovieFooter from '@/app/_modules/movie/movie-footer/MovieFooter';
import { getMovie } from 'actions/movieActions';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const movie = await getMovie(Number((await params).id));

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [movie.image_url],
    },
  };
}

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
