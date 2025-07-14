import { Metadata } from 'next';
import HomeContainer from './_modules/home/home-container/HomeContainer';

export const metadata: Metadata = {
  title: "Hyejin's Toy Project | 홈",
  description: '홈페이지 입니다.',
};

export default function Home() {
  return <HomeContainer />;
}
