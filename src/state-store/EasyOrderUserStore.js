import create from 'zustand';

initialState = {
    easyOrderRecipe: ""
}

export const useEasyOrderUserStore = create((set, get) => ({
    ...initialState,
    actions: {
        getEasyOrderUserStore: () => {
            const state = get()
            return{
                easyOrderRecipe: state.easyOrderRecipe,
            };
        },
        resetForm: () => set(initialState),
        setEasyOrderRecipe: (str) => set({ easyOrderRecipe: str }),
    },
}));

export const useEasyOrderUserStoreActions = () => useEasyOrderUserStore((state) => state.actions);