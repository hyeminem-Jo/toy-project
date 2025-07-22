import { Metadata } from 'next';
import JStagramContainer from '@/app/_modules/j-stagram/components/j-stagram-container/JStagramContainer';
import AuthContainer from '@/app/_modules/auth/auth-container/AuthContainer';
import AppLayout from '@/app/_modules/common/components/layout/AppLayout';

export const metadata: Metadata = {
  title: "Hyejin's Project | j-stagram",
  description: 'j-stagram 페이지 입니다.',
};

export default function JStagramPage() {
  const isLoggedIn = false;
  return <AppLayout>{isLoggedIn ? <JStagramContainer /> : <AuthContainer />}</AppLayout>;
}
