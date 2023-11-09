import { create } from "zustand";

const initializeState = {
  first:"",
  last:"",
  email:"",
  phone:"",
  userId:"",
  disclaimer: false,
  membership:false,
};

export const useNewUserStore = create((set, get) => ({
  ...initializeState,
  actions: {
    getNewUserStore: () => {
      const state = get();
      return {
        disclaimer: state.disclaimer,
        first: state.first,
        last: state.last,
        email: state.email,
        phone: state.phone,
        membership: state.membership,
        userId: state.userId,
      };
    },
    resetForm: () => set(initializeState), 
    setDisclaimer: (bool) => set({ disclaimer: bool }),
    setFirst: (str) => set({ first: str }),
    setLast: (str) => set({ last:str }), 
    setEmail: (str) => set({ email:str }),
    setPhone: (str) => set({ phone:str }),
    setMembership: (bool) => set({ membership: bool }),
    setUserId: (str) => set({ userId:str }),
  },
}));

export const useNewUserStoreActions = () => useNewUserStore((state) => state.actions);
