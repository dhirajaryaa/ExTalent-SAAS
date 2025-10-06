import { create } from "zustand";

const uiStore = create((set) => ({
  activePage: "Dashboard",
  setActivePage: (activePage) => set({ activePage }),
}));

export default uiStore;
