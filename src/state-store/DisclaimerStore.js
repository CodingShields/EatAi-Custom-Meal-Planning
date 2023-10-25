import { create } from "zustand";

const initializeState = {
  Disclaimer: false, // Set the initial state value here
};

export const useDisclaimerStore = create((set, get) => ({
  ...initializeState,
  actions: {
    getDisclaimerStore: () => {
      const state = get();
      return {
        Disclaimer: state.Disclaimer,
      };
    },
    resetForm: () => set(initializeState), // Corrected the typo here as well
    setDisclaimer: (bool) => set({ Disclaimer: bool }),
  },
}));

export const useDisclaimerStoreActions = () =>
  useDisclaimerStore((state) => state.actions);
