import { Metadata } from 'next';
import JStagramHome from '@/app/_modules/j-stagram/components/j-stagram-home/JStagramHome';

export const metadata: Metadata = {
  title: "Hyejin's Project | j-stagram",
  description: 'j-stagram 페이지 입니다.',
};

export default function JStagramPage() {
  return <JStagramHome />;
}
