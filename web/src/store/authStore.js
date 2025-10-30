const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: true,
};

// auth store
export const createAuthSlice = (set) => ({
  ...initialState,
  setUser: (user) => set({ user, isAuthenticated: true, isLoading: false }),
  removeUser: () => set({ ...initialState }),
});
