import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createAuthSlice } from "./authStore";
import { createUserSlice } from "./userSlice";

// create global store
export const useStore = create(
  devtools((...args) => ({
    ...createAuthSlice(...args),
    ...createUserSlice(...args),
  }))
);

// export separately for access action directly
export const setUser = (user) => useStore.getState().setUser(user);

export const removeUser = () => useStore.getState().removeUser();

export const setProfile = (profile) => useStore.getState().setProfile(profile);
