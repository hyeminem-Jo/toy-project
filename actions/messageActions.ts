'use server';

import { createServerSupabaseAdminClient, createServerSupabaseClient } from 'utils/supabase/server';
import { handleError, getCurrentUser } from './actionUtils';

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

export async function sendMessage({
  message,
  otherUserId,
}: {
  message: string;
  otherUserId: string;
}) {
  const supabase = await createServerSupabaseClient();
  const currentUser = await getCurrentUser();

  const { data, error } = await supabase.from('message').insert({
    message,
    receiver: otherUserId,
    sender: currentUser.id,
  });

  if (error) {
    handleError(error);
  }

  return data;
}

export async function getAllMessages({ otherUserId }: { otherUserId: string }) {
  const supabase = await createServerSupabaseClient();
  const currentUser = await getCurrentUser();

  const { data, error } = await supabase
    .from('message')
    .select('*')
    .or(`sender.eq.${currentUser.id},sender.eq.${otherUserId}`)
    .or(`receiver.eq.${currentUser.id},receiver.eq.${otherUserId}`)
    .order('created_at', { ascending: true });

  if (error) {
    handleError(error);
    return [];
  }

  return data;
}
