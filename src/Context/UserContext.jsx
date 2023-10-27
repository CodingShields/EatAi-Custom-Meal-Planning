import React, { createContext, useContext, useEffect} from "react";
import { useNewUserStore } from "../state-store/NewUserStore";
import { doc, setDoc,Timestamp,addDoc } from "firebase/firestore";
import {db} from "../Firebase/firebaseConfig"

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const disclaimerState = useNewUserStore((state) => state.disclaimer)
    const firstNameState = useNewUserStore((state) => state.firstName)
    const lastNameState = useNewUserStore((state) => state.lastName)
    const emailState = useNewUserStore((state) => state.email)
    const phoneState = useNewUserStore((state) => state.phone)
    const userIdState = useNewUserStore((state) => state.userId)    
    const userData = useNewUserStore((state) => state)
    
console.log("working?");
    const createUserDb = async (e) => {
        e.preventdefault()
        console.log("testy")
        try {
            const docRef = await addDoc(doc(db, "users"), {
            first: firstNameState,
            last: lastNameState,
            phone: phoneState,
            email: emailState,
            membership: false,
            uid: userIdState,
            disclaimer: disclaimerState,
            signUpDate: Timestamp.now(),
            
            });
            console.log("testy2", user, docRef.id)
        } catch (error) {
            console.error("Error creating user document:", e);
            throw error; // Re-throw the error to be caught in the caller (handleSubmit)
        }
    };
 

    return (
        <UserContext.Provider value={{createUserDb}}> 
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    return useContext(UserContext);
};