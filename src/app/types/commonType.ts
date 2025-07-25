export type FileObject = {
  id: string;
  name: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  metadata: Record<string, string>;
};

export interface MyInfo {
  id: string;
  email: string;
  phone: string;
  created_at: string;
  last_sign_in_at: string;
  user_metadata: {
    avatar_url: string;
    preferred_username: string;
    name: string;
    user_name: string;
  };
}

export interface User {
  id: number | null;
  name: string;
  email?: string;
}
