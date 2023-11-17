import { create } from "zustand";

const initializeSignUpState = {
  disclaimer: false,
  membership:false,
};

const currentUserState = {
  first: "",
  last: "",
  email: "",
  phone: "",
  membership: false,
  disclaimerCheck: false,
  advancedProfileFound: false,
  userId: "",
};

export const useUserStore = create((set, get) => ({
	...initializeSignUpState,...currentUserState,
	actions: {
		getUserStore: () => {
			const state = get();
			return {
				disclaimer: state.disclaimer,
				first: state.first,
				last: state.last,
				email: state.email,
				phone: state.phone,
				membership: state.membership,
				userId: state.userId,
				disclaimerCheck: state.disclaimerCheck,
				advancedProfileFound: state.advancedProfileFound,
			};
		},
		resetForm: () => set(initializeSignUpState, currentUserState),
		setDisclaimer: (bool) => set({ disclaimer: bool }),
		setFirst: (str) => set({ first: str }),
		setLast: (str) => set({ last: str }),
		setEmail: (str) => set({ email: str }),
		setPhone: (str) => set({ phone: str }),
		setMembership: (bool) => set({ membership: bool }),
		setAdvancedProfileFound: (bool) => set({ advancedProfileFound: bool }),
		setUserId: (str) => set({ userId: str }),
		setDisclaimerCheck: (bool) => set({ disclaimerCheck: bool }),
	},
}));

export const useUserStoreActions = () => useUserStore((state) => state.actions);
