import React, { createContext, useContext} from "react";
import { useNewUserStore } from "../state-store/NewUserStore";
import { doc, setDoc,Timestamp} from "firebase/firestore";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const disclaimerState = useNewUserStore((state) => state.disclaimer)
    const firstNameState = useNewUserStore((state) => state.firstName)
    const lastNameState = useNewUserStore((state) => state.lastName)
    const emailState = useNewUserStore((state) => state.email)
    const phoneState = useNewUserStore((state) => state.phone)
    const userIdState = useNewUserStore((state) => state.userId)    
    


    const createUserDb = async (user) => {
        try {
            await setDoc(doc(db, "users", user.uid), {
            first: firstNameState,
            last: lastNameState,
            phone: phoneState,
            email: emailState,
            membership: false,
            uid: userIdState,
            disclaimer: disclaimerState,
            signUpDate: Timestamp.now(),
            });
        } catch (error) {
            console.error("Error creating user document:", error);
            throw error; // Re-throw the error to be caught in the caller (handleSubmit)
        }
    };
    return (
        <UserContext.Provider value={{createUserDb}}> 
            {children}
        </UserContext.Provider>
    );
}

export const UserDb = () => {
    return useContext(UserContext);
};