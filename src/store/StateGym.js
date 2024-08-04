import { create } from "zustand";

const useFindStore = create((set, get) => ({
  gymState: "",
  actions: {
    setGymState: (v) => {
      set(() => {
        return { gymState: v };
      });
    },
  },
}));

// findState를 구독하는 훅
export const useGymState = () => useFindStore((state) => state.gymState);
// actions를 구독하는 훅
export const useGymActions = () => useFindStore((state) => state.actions);
