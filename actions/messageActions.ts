'use server';

import { createServerSupabaseAdminClient } from 'utils/supabase/server';
import { handleError } from './actionUtils';

export async function getAllUserList() {
  const supabase = await createServerSupabaseAdminClient();
  const { data, error } = await supabase.auth.admin.listUsers();

  if (error) {
    handleError(error);
    return [];
  }
  return data?.users;
}

export async function getUserById(userId: string) {
  const supabase = await createServerSupabaseAdminClient();
  const { data, error } = await supabase.auth.admin.getUserById(userId);

  if (error) {
    handleError(error);
    return null;
  }
  return data?.user;
}
