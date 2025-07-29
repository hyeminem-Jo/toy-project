import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

export const applyMiddlewareSupabaseClient = async (request: NextRequest) => {
  // Create an unmodified response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      // 1. 쿠키 관리
      // Supabase 세션 쿠키를 읽고 쓰기
      // 토큰 갱신 시 새로운 쿠키를 자동으로 설정
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          // 쿠키 업데이트 시 request와 response 모두에 반영
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          // 쿠키 삭제 시 request와 response 모두에 반영
          request.cookies.set({
            name,
            value: '',
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: '',
            ...options,
          });
        },
      },
    },
  );

  // 2. 인증 토큰 자동 갱신 (refreshing the auth token)
  // 모든 요청에서 사용자의 인증 상태를 확인
  // 만료된 토큰을 자동으로 갱신
  // 사용자가 로그인 상태를 유지할 수 있게 함
  await supabase.auth.getUser();

  return response;
};

export async function middleware(request: NextRequest) {
  return await applyMiddlewareSupabaseClient(request);
}

// 3. 요청 경로 필터링
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

// 동작 과정
// 1. 요청 들어옴 → 미들웨어 실행
// 2. Supabase 클라이언트 생성 → 쿠키 기반으로
// 3. 인증 상태 확인 → getUser() 호출
// 4. 토큰 갱신 → 필요시 자동으로 새 토큰 발급
// 5. 응답 반환 → 갱신된 쿠키와 함께
