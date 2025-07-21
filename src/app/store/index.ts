import { atom } from 'jotai';

interface User {
  name: string;
  email: string;
}

interface MovieSearch {
  searchInput: string;
}

export const userState = atom<User>({
  name: '',
  email: '',
});

export const movieSearchState = atom<MovieSearch>({
  searchInput: '',
});
