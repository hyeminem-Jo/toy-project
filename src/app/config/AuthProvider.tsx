'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { createBrowserSupabaseClient } from 'utils/supabase/client';

interface AuthProviderProps {
  accessToken: string;
  children: React.ReactNode;
}

export default function AuthProvider({ accessToken, children }: AuthProviderProps) {
  const supabase = createBrowserSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription: authListner },
    } = supabase.auth.onAuthStateChange((event, session) => {
      // accessToken: 서버에서 발급한 토큰
      // session?.access_token: 브라우저에서 발급한 토큰 (최신 access token 값)
      if (session?.access_token !== accessToken) {
        // 사용자 정보 변경, 로그아웃, 토큰 만료 등 accessToken 이 변경되면 페이지 새로고침
        router.refresh();
      }
    });

    return () => {
      authListner.unsubscribe();
    };
  }, [accessToken, supabase, router]);

  return children;
}
