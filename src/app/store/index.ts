import { atom } from 'jotai';
import { MyInfo, User } from '@/app/types/commonType';

export const userState = atom<User>({
  name: '',
  email: '',
});

export const myInfoState = atom<MyInfo>({
  id: '',
  email: '',
  phone: '',
  created_at: '',
  last_sign_in_at: '',
});

export const movieSearchState = atom<string>('');
