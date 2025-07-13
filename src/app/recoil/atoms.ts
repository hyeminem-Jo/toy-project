import { atom } from 'recoil';

interface User {
  name: string;
  email: string;
}

export const userState = atom<User>({
  key: 'userState',
  default: {
    name: '',
    email: '',
  },
});
