import { create } from "zustand";
import { useAuthSlice } from "./authStore";
import { useUserSlice } from "./userSlice";

// create global store
export const useStore = create((...args) => ({
  ...useAuthSlice(...args),
  ...useUserSlice(...args),
}));
