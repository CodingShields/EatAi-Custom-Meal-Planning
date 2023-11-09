import { create } from "zustand";

const initializeState = {
	macroCalorieSelection: "",
	plannedDays: 1,
	plannedMeals: 1,
	macros:[],
	calories: "",
	mealPlanner: [],
};

export const useAdvancedOrderStore = create((set, get) => ({
	...initializeState,
	actions: {
		getAdvancedOrderStore: () => {
			const state = get();
			return {
				macroCalorieSelection: state.macroCalorieSelection,
				protein: state.protein,
				carbs: state.carbs,
				fats: state.fats,
				calories: state.calories,
				mealPlanner: state.mealPlanner,
				days: state.days,
				dietary: state.dietary,
				flavor: state.flavor,
				flavorDetails: state.flavorDetails,
				selectedProteins: state.selectedProteins,
				selectedCarbs: state.selectedCarbs,
				selectedFats: state.selectedFats,
			};
		},
		resetForm: () => set(initializeState),
		setMacroCalorieSelection: (str) => set({ macroCalorieSelection: str }),
		setProtein: (str) => set({ protein: str }),
		setCarbs: (str) => set({ carbs: str }),
		setFats: (str) => set({ fats: str }),
		setCalories: (str) => set({ calories: str }),
		setMealPlanner: (arr) => set({ mealPlanner: arr }),
		setPlannedMeals: (num) => set({ plannedMeals: num }),
		setPlannedDays: (num) => set({ plannedDays: num }),
		setDietary: (str) => set({ dietary: str }),
		setFlavor: (str) => set({ flavor: str }),
		setFlavorDetails: (str) => set({ flavorDetails: str }),
		setSelectedProteins: (str) => set({ selectedProteins: str }),
		setSelectedCarbs: (str) => set({ selectedCarbs: str }),
		setSelectedFats: (str) => set({ selectedFats: str }),
	},
}));
export const useAdvancedOrderStoreActions = () => useAdvancedOrderStore((state) => state.actions);
