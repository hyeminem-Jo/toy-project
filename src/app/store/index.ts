import { atom } from 'jotai';
import { MyInfo, User } from '@/app/types/commonType';

export const userState = atom<User>({
  id: null,
  name: '',
  email: '',
});

export const myInfoState = atom<MyInfo>({
  id: '',
  email: '',
  phone: '',
  created_at: '',
  last_sign_in_at: '',
  user_metadata: {
    avatar_url: '',
    preferred_username: '',
    name: '',
    user_name: '',
  },
});

export const selectedChatUserIdState = atom<string>('');

export const movieSearchState = atom<string>('');

export const presenceState = atom<Record<string, unknown>>({});
