import { createServerSupabaseClient } from 'utils/supabase/server';

export const handleError = (error: Error) => {
  console.error(error);
  throw new Error(error.message || 'An error occurred');
};

export const getCurrentUser = async () => {
  const supabase = await createServerSupabaseClient();

  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError || !session?.user) {
    throw new Error('Unauthorized');
  }

  return session.user;
};
