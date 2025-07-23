export type FileObject = {
  id: string;
  name: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  metadata: Record<string, any>;
};

export interface MyInfo {
  id: string;
  email: string;
  phone: string;
  created_at: string;
  last_sign_in_at: string;
}

export interface User {
  name: string;
  email: string;
}
