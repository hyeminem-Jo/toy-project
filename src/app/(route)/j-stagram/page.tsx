import { Metadata } from 'next';
import JStagramContainer from '@/app/_modules/j-stagram/components/j-stagram-container/JStagramContainer';
import AuthContainer from '@/app/_modules/auth/auth-container/AuthContainer';
import AppLayout from '@/app/_modules/common/components/layout/AppLayout';
import JStagramHome from '@/app/_modules/j-stagram/components/j-stagram-home/JStagramHome';

export const metadata: Metadata = {
  title: "Hyejin's Project | j-stagram",
  description: 'j-stagram 페이지 입니다.',
};

export default function JStagramPage() {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return (
      <AppLayout>
        <AuthContainer />
      </AppLayout>
    );
  }
  return (
    <JStagramContainer>
      <JStagramHome />
    </JStagramContainer>
  );
}
