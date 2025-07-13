import { atom } from 'jotai';

interface User {
  name: string;
  email: string;
}

export const userState = atom<User>({
  name: '',
  email: '',
});
