import { create } from "zustand";

const useFindStore = create((set, get) => ({
  findState: "파트너 찾기",
  actions: {
    changeState: (v) => {
      set(() => {
        return { findState: v };
      });
    },
    getState: () => {
      return get().findState;
    },
  },
}));

// loginState를 구독하는 훅
export const useFindState = () => useFindStore((state) => state.findState);
// actions를 구독하는 훅
export const useActions = () => useFindStore((state) => state.actions);
