import { create } from 'zustand';

const initializeState = {
    event: "",
    culture: "",
    headCount: "",
    courses: "",
    dietary: "",
    balance: "",
    flavor: "",    
    measure:"",
};

export const useEasyOrderStore = create((set, get) => ({
    ...initializeState,
    actions: {
        getEasyOrderStore: () => {
            const state = get()
            return{
                event: state.event,
                culture: state.culture,
                headCount: state.headCount,
                courses: state.courses,
                dietary: state.dietary,
                balance: state.balance,
                flavor: state.flavor,
                measure: state.measure,
                
            };
        },
        resetForm: () => set(initializeState),
        setEvent: (str) => set({ event: str }),
        setCulture: (str) => set({ culture: str }),
        setHeadCount: (str) => set({ headCount: str }),
        setCourses: (str) => set({ courses: str }),
        setDietary: (str) => set({ dietary: str }),
        setFlavor: (str) => set({ flavor: str }),
        setBalance: (str) => set({ balance: str }),
        setMeasure: (str) => set({ measure: str }),
    },
}));

export const useEasyOrderStoreActions = () => useEasyOrderStore((state) => state.actions);
