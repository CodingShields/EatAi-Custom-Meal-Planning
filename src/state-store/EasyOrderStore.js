import { create } from 'zustand';

const initializeState = {
    Event: "",
    Culture: "",
    HeadCount: "",
    Courses: "",
    Dietary: "",
    Balance: "",
    CookTime: "",
    HowToCook: "",
    Flavor: "",
    Dessert: "",
    Seasonal: "",
    Beverage: "",
};

export const useEasyOrderStore = create((set, get) => ({
    ...initializeState,
    actions: {
        getEasyOrderStore: () => {
            const { Event, Culture, HeadCount, Courses, Dietary, Balance, CookTime, HowToCook, Flavor, Dessert, Seasonal, Beverage } = get();
            return {
                Event: Event,
                Culture: Culture,
                HeadCount: HeadCount,
                Courses: Courses,
                Dietary: Dietary,
                Balance: Balance,
                CookTime: CookTime,
                HowToCook: HowToCook,
                Flavor: Flavor,
                Dessert: Dessert,
                Seasonal: Seasonal,
                Beverage: Beverage,
            };
        },
        resetForm: () => set(initializeState),
        setEvent: (str) => set({ Event: str }),
        setCulture: (str) => set({ Culture: str }),
        setHeadCount: (str) => set({ HeadCount: str }),
        setCourses: (str) => set({ Courses: str }),
        setDietary: (str) => set({ Dietary: str }),
        setBalance: (str) => set({ Balance: str }),
        setCookTime: (str) => set({ CookTime: str }),
        setHowToCook: (str) => set({ HowToCook: str }),
        setFlavor: (str) => set({ Flavor: str }),
        setDessert: (str) => set({ Dessert: str }),
        setSeasonal: (str) => set({ Seasonal: str }),
        setBeverage: (str) => set({ Beverage: str }),
    },
}));

export const useEasyOrderStoreActions = () => useEasyOrderStore((state) => state.actions);
