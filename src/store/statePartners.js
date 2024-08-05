import { create } from "zustand";

const usePartnersStore = create((set, get) => ({
  partnersState: [],
  actions: {
    setPartnersState: (v) => {
      set(() => {
        return { partnersState: v };
      });
    },
  },
}));

// findState를 구독하는 훅
export const usePartnersState = () =>
  usePartnersStore((state) => state.partnersState);
// actions를 구독하는 훅
export const usePartnersActions = () =>
  usePartnersStore((state) => state.actions);
