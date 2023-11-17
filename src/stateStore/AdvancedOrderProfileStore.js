import { create } from "zustand";


const initializeState = {
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


export const useAdvancedOrderProfileStore = create((set, get) => ({
	...initializeState,
	actions: {
		getAdvancedOrderProfileStore: () => {
			const state = get();
			return {
				gender: state.gender,
				age: state.age,
				birthDate: state.birthDate,
				preferredUnit: state.preferredUnit,
				weight: state.weight,
				height: state.height,
				bmr: state.bmr,
				tdee: state.tdee,
				activityLevel: state.activityLevel,
				activityLevelValue: state.activityLevelValue,
				goal: state.goal,
			};
		},

		resetForm: () => set({ ...initializeState }),
		setGender: (str) => set({ gender: str }),
		setAge: (num) => set({ age: num }),
		setBirthDate: (str) => set({ birthDate: str }),
		setPreferredUnit: (str) => set({ preferredUnit: str }),
		setWeight: (num) => set({ weight: num }),
		setHeight: (num) => set({ height: num }),
		setBmr: (num) => set({ bmr: num }),
		setTdee: (num) => set({ tdee: num }),
		setActivityLevel: (str) => set({ activityLevel: str }),
		setActivityLevelValue: (num) => set({ activityLevelValue: num }),
		setGoal: (str) => set({ goal: str }),
	},
}));
export const useAdvancedOrderProfileStoreActions = () => useAdvancedOrderProfileStore((state) => state.actions);