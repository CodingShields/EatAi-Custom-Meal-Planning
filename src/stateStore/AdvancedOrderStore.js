import { create } from "zustand";

const initializeState = {
	macroCalorieSelection: "",
	plannedDays: 1,
	plannedMeals: 1,
	caloriesPerDay: 0,
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

const personalInfo = {
	gender: "",
	age: 0,
	birthDate: "",
	preferredUnit: "",
	weight: 0,
	height: "",
	bmr: 0,
	tdee: 0,
	activityLevel: "",
	activityLevelValue: 0,
	goal: "",
};

export const useAdvancedOrderStore = create((set, get) => ({
	...initializeState,
	...personalInfo,
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
				// Personal Info
				gender: state.gender,
				age: state.age,
				birthDate: state.birthDate,
				preferredUnit: state.preferredUnit,
				weightImperial: state.weightImperial,
				weightMetric: state.weightMetric,
				heightImperial: state.heightImperial,
				heightMetric: state.heightMetric,
				bmr: state.bmr,
				tdee: state.tdee,
				activityLevel: state.activityLevel,
				activityLevelValue: state.activityLevelValue,
				goal: state.goal,
			};
		},
		resetForm: () => set({ ...initializeState }),
		resetFormPersonalInfo: () => set({ ...personalInfo }),
		setMacroCalorieSelection: (str) => set({ macroCalorieSelection: str }),
		setCaloriesPerDay: (num) => set({ caloriesPerDay: num }),
		setProtein: (num) => set({ protein: num }),
		setCarbohydrate: (num) => set({ carbohydrate: num }),
		setFat: (num) => set({ fat: num }),
		setMealPlanner: (arr) => set({ mealPlanner: arr }),
		setPlannedMeals: (num) => set({ plannedMeals: num }),
		setPlannedDays: (num) => set({ plannedDays: num }),
		setCalorieBreakdown: (arr) => set({ calorieBreakdown: arr }),
		// Personal Info
		setGender: (str) => set({ gender: str }),
		setAge: (num) => set({ age: num }),
		setBirthDate: (str) => set({ birthDate: str }),
		setPreferredUnit: (str) => set({ preferredUnit: str }),
		setWeightImperial: (num) => set({ weightImperial: num }),
		setWeightMetric: (num) => set({ weightMetric: num }),
		setHeightImperial: (num) => set({ heightImperial: num }),
		setHeightMetric: (num) => set({ heightMetric: num }),
		setBmr: (num) => set({ bmr: num }),
		setTdee: (num) => set({ tdee: num }),
		setActivityLevel: (str) => set({ activityLevel: str }),
		setActivityLevelValue: (num) => set({ activityLevelValue: num }),
		setGoal: (str) => set({ goal: str }),
	},
}));
export const useAdvancedOrderStoreActions = () => useAdvancedOrderStore((state) => state.actions);
