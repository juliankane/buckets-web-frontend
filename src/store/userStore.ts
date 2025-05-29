import {create} from 'zustand';
import { type User } from '../types/user'


type UserStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  setUser: (user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    else{
      localStorage.removeItem('user')
    }
   set({ user })},

  clearUser: () => set({ user: null }),
}));