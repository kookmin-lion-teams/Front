import { create } from "zustand";

const useStore = create((set, get) => ({
  findState: "",
  actions: {
    changeState: (v) => {
      set(() => {
        return { loginState: v };
      });
    },
    getState: () => {
      return get().loginState;
    },
  },
}));

// loginState를 구독하는 훅
export const useFindState = () => useStore((state) => state.findState);
// actions를 구독하는 훅
export const useActions = () => useStore((state) => state.actions);
