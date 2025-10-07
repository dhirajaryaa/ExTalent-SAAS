import { create } from "zustand";
import { devtools } from "zustand/middleware";
import authStore from "./authStore";

const userStore = create(
  devtools((set) => ({
    profile: authStore.getState().user ?? null,
    resumeEvaluation: null,
    setProfile: (profile) => set({ profile }),
    setResumeEvaluation: (resumeEvaluation) => set({ resumeEvaluation }),
  }), { name: "UserStore" }) // optional name for DevTools
);

export default userStore;