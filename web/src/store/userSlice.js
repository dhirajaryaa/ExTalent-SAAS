import { create } from "zustand";
import { useStore } from "./store";

// get login user value
const loginUser = useStore((s) => s.user);

export const useUserSlice = create((set) => ({
  profile: loginUser || null,
  setProfile: (profile) => set({ profile }),
}));
