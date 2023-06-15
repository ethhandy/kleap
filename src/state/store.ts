import { create } from "zustand";

interface GlobalStoreInterface {
  isCollapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const globalStore = (set: any) => ({
  isCollapsed: false,
  setCollapsed: (isCollapsed: boolean) => set({ isCollapsed }),
});

export const useGlobalStore = create<GlobalStoreInterface>(globalStore);
