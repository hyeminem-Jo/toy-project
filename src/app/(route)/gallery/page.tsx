import { Metadata } from 'next';
import GalleryContainer from '@/app/_modules/gallery/gallery-container/GalleryContainer';

export const metadata: Metadata = {
  title: "Hyejin's Project | 갤러리",
  description: '나만의 추억을 담아보세요 📸',
};

export default function GalleryPage() {
  return <GalleryContainer />;
}
