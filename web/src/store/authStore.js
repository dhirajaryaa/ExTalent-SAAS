import { create } from "zustand";

const authStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user) => set({ user, isAuthenticated: true }),
  removeUser: () => set({ user: null, isAuthenticated: false }),
}));

export default authStore;
