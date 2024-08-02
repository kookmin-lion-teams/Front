import { create } from "zustand";

const useStore = create((set, get) => ({
  loginState: "",
  actions: {
    setLoginState: (v) => {
      set(() => {
        return { loginState: v };
      });
    },
    getLoginState: () => {
      return get().loginState;
    },
  },
}));

// loginState를 구독하는 훅
export const useLoginState = () => useStore((state) => state.loginState);
// actions를 구독하는 훅
export const useActions = () => useStore((state) => state.actions);
