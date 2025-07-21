'use server';

import { createServerSupabaseClient } from 'utils/supabase/server';
import { handleError } from './errorUtils';

export async function searchMovies(search: string = '') {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from('movie').select('*').like('title', `%${search}%`);

  if (error) handleError(error);
  return data;
}

export async function getMovie(id: number) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from('movie').select('*').eq('id', id).maybeSingle();

  if (error) handleError(error);
  return data;
}
