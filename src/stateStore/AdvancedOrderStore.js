import { create } from "zustand";

const initializeState = {
	macroCalorieSelection: "",
	statusBar: "5",
	plannedDays: 1,
	plannedMeals: 1,
	caloriesPerDay: 0,
	macroBreakDown: [
		{
			id: 0,
			name: "Protein Macro",
		},
		{
			id: 1,
			name: "Carbohydrate Macro",
		},
		{
			id: 2,
			name: "Fat Macro",
		},
	],
	calorieBreakdown: [
		{
			id: 0,
			name: "Protein Percentage",
			percentage: 0,
		},
		{
			id: 1,
			name: "Carbohydrate Percentage",
			percentage: 0,
		},
		{
			id: 2,
			name: "Fat Percentage",
			percentage: 0,
		},
	],
	mealPlanner: [],
};

export const useAdvancedOrderStore = create((set, get) => ({
	...initializeState,
	actions: {
		getAdvancedOrderStore: () => {
			const state = get();
			return {
				macroCalorieSelection: state.macroCalorieSelection,
				caloriesPerDay: state.calories,
				mealPlanner: state.mealPlanner,
				days: state.days,
				calorieBreakdown: state.calorieBreakdown,
				statusBar: state.statusBar,
			};
		},
		resetForm: () => set({ ...initializeState }),
		setMacroCalorieSelection: (str) => set({ macroCalorieSelection: str }),
		setCaloriesPerDay: (num) => set({ caloriesPerDay: num }),
		setMealPlanner: (arr) => set({ mealPlanner: arr }),
		setPlannedMeals: (num) => set({ plannedMeals: num }),
		setPlannedDays: (num) => set({ plannedDays: num }),
		setCalorieBreakdown: (arr) => set({ calorieBreakdown: arr }),
		setStatusBar: (num) => set({ statusBar: num }),
	},
}));
export const useAdvancedOrderStoreActions = () => useAdvancedOrderStore((state) => state.actions);
