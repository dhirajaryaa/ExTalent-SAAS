import { create } from "zustand";

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: true,
};

// auth store
export const useAuthSlice = create((set) => ({
  ...initialState,
  setUser: (user) => set({ user, isAuthenticated: true, isLoading: false }),
  removeUser: () => set({ ...initialState }),
}));
