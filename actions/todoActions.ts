'use server';

import { createServerSupabaseClient } from 'utils/supabase/server';
import { Database } from 'types_db';

export type TodoRow = Database['public']['Tables']['todo']['Row'];
export type TodoRowInsert = Database['public']['Tables']['todo']['Insert'];
export type TodoRowUpdate = Database['public']['Tables']['todo']['Update'];

const handleError = (error: Error) => {
  console.error(error);
  throw new Error(error.message || 'An error occurred');
};

export async function getTodos({ searchInput = '' }): Promise<TodoRow[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from('todo')
    .select('*') // 모든 필드 선택
    .like('title', `%${searchInput}%`) // 검색된 할 일 찾기, 빈값이면 전체 할 일 찾기
    .order('completed', { ascending: true }) // completed false 를 위로, true 를 아래로 정렬
    .order('created_at', { ascending: true }); // 각 그룹 내에서 생성일 기준 오름차순 정렬

  if (error) handleError(error);
  return data;
}

export async function createTodo(todo: TodoRowInsert) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from('todo')
    .insert({
      ...todo,
      created_at: new Date().toISOString(),
    })
    .select()
    .single();
  if (error) handleError(error);
  return data;
}

export async function updateTodo(todo: TodoRowUpdate) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from('todo')
    .update({
      ...todo,
      updated_at: new Date().toISOString(),
    })
    .eq('id', todo.id); // 할 일 아이디와 일치하는 할 일 업데이트
  if (error) handleError(error);
  return data;
}

export async function deleteTodo(todoId: number) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from('todo').delete().eq('id', todoId);
  if (error) handleError(error);
  return data;
}
