import { create } from "zustand";

const initializeState = {
	entree: "",
	headCount: 0,
	dietary: "",
	dietaryDetails: "",
	flavor: "",
	flavorDetails: "",
};

export const useChefSurpriseStore = create((set, get) => ({
	...initializeState,
	actions: {
		getChefSurpriseStore: () => {
			const state = get();
			return {
				entree: state.entree,
				headCount: state.HeadCount,
				dietary: state.dietary,
				dietaryDetails: state.dietaryDetails,
				flavor: state.flavor,
				flavorDetails: state.flavorDetails,
			};
		},
		resetForm: () => set(initializeState),
		setEntree: (str) => set({ entree: str }),
		setHeadCount: (str) => set({ headCount: str }),
		setDietary: (str) => set({ dietary: str }),
		setDietaryDetails: (str) => set({ dietaryDetails: str }),
		setFlavor: (str) => set({ flavor: str }),
		setFlavorDetails: (str) => set({ flavorDetails: str }),
	},
}));

export const useChefSurpriseStoreActions = () => useChefSurpriseStore((state) => state.actions);
