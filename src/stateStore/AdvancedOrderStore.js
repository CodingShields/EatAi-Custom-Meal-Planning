import { create } from "zustand";

const initializeState = {
	macroCalorieSelection: "",
	plannedDays: 1,
	plannedMeals: 1,
	caloriesPerDay: 0,
	bmr: 0,
	tdee:0,
	protein: 0,
	carbohydrate: 0,
	fat: 0,
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
				protein: state.protein,
				carbohydrate: state.carbohydrate,
				fat: state.fat,
				bmr: state.bmr,
				tdee: state.tdee,
			};
		},
		resetForm: () => set({ ...initializeState }),
		setMacroCalorieSelection: (str) => set({ macroCalorieSelection: str }),
		setCaloriesPerDay: (num) => set({ caloriesPerDay: num }),
		setProtein: (num) => set({ protein: num }),
		setCarbohydrate: (num) => set({ carbohydrate: num }),
		setFat: (num) => set({ fat: num }),
		setMealPlanner: (arr) => set({ mealPlanner: arr }),
		setPlannedMeals: (num) => set({ plannedMeals: num }),
		setPlannedDays: (num) => set({ plannedDays: num }),
		setCalorieBreakdown: (arr) => set({ calorieBreakdown: arr }),
		setBmr: (num) => set({ bmr: num }),
		setTdee: (num) => set({ tdee: num}),
		setStatusBar: (num) => set({ statusBar: num }),
	},
}));
export const useAdvancedOrderStoreActions = () => useAdvancedOrderStore((state) => state.actions);
