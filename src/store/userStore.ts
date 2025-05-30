import { create } from 'zustand';
import { type User } from '../types/user';

type UserStore = {
  user: User | null;
  authToken: string | null;
  setUser: (user: User | null) => void;
  setAuthToken: (token: string | null) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  authToken: localStorage.getItem('authToken'),
  setUser: (user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
    set({ user });
  },
  setAuthToken: (token) => {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
    set({ authToken: token });
  },
  clearUser: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    set({ user: null, authToken: null });
  },
}));