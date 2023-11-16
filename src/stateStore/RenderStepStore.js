import {create} from "zustand";

export const useRenderStepStore = create((set) => ({
  step: 0,
  increaseStep: () => set((state) => ({ step: state.step + 1 })),
  previousStep: () => set((state) => ({ step: state.step - 1 })),
  resetStep: () => set((state) => ({ step: state.step = 0 })),
}));

export const useRenderSmallStepStore = create((set) => ({
	step: 0,
	increaseStep: () => set((state) => ({ step: state.step + 1 })),
	previousStep: () => set((state) => ({ step: state.step - 1 })),
	resetStep: () => set((state) => ({ step: (state.step = 0) })),
}));