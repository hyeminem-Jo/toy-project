import AppLayout from '@/app/_modules/common/components/layout/AppLayout';
import AuthContainer from '@/app/_modules/auth/auth-container/AuthContainer';
import { createServerSupabaseClient } from 'utils/supabase/server';
import JStagramContainer from '@/app/_modules/j-stagram/components/j-stagram-container/JStagramContainer';
import { Metadata } from 'next';
import AuthProvider from '@/app/config/AuthProvider';
import { MyInfo } from '@/app/types/commonType';

export const metadata: Metadata = {
  title: "Hyejin's Project | j-stagram",
  description: 'j-stagram 페이지 입니다.',
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isLoggedIn = !!session?.user;

  console.log(isLoggedIn);

  return (
    <AuthProvider accessToken={session?.access_token || ''}>
      {isLoggedIn ? (
        <JStagramContainer myData={session?.user as MyInfo}>{children}</JStagramContainer>
      ) : (
        <AppLayout>
          <AuthContainer />
        </AppLayout>
      )}
    </AuthProvider>
  );
}
