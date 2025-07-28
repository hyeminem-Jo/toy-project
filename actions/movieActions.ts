'use server';

import { createServerSupabaseClient } from 'utils/supabase/server';
import { handleError } from './actionUtils';

export async function searchMovies(search: string = '', page: number = 1, pageSize: number = 12) {
  const supabase = await createServerSupabaseClient();
  const { data, count, error } = await supabase // count: 총 데이터 개수
    .from('movie')
    .select('*', { count: 'exact' })
    .like('title', `%${search}%`)
    .range((page - 1) * pageSize, page * pageSize - 1); // range(시작 인덱스, 끝 인덱스)

  const hasNextPage = count > page * pageSize;

  if (error) {
    console.error(error);
    return {
      data: [],
      page: null, // hasNextPage 계산을 위해 페이지 번호를 null로 설정
      // (hasNextPage 가 계속 true 로 유지되어 무한 스크롤 발생 이슈 해결)
      pageSize: null,
      hasNextPage: false,
    };
  }
  return {
    data,
    page, // 현재 페이지
    pageSize,
    hasNextPage,
  };
}

export async function getMovie(id: number) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from('movie').select('*').eq('id', id).maybeSingle();

  if (error) handleError(error);
  return data;
}
