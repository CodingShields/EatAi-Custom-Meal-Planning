import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig"
import { useNewUserStore } from "../state-store/NewUserStore";
import { useNewUserStoreActions } from "../state-store/NewUserStore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  
  const [user, setUser] = useState({});
  const { setUserId } = useNewUserStoreActions()
  const firstNameState = useNewUserStore((state) => state.firstName)
  const lastNameState = useNewUserStore((state) => state.lastName)
  const emailState = useNewUserStore((state) => state.email)
  const phoneState = useNewUserStore((state) => state.phone)
  
  const createUser = async (password) => {
    try {
      const authUser = await createUserWithEmailAndPassword(auth, emailState, password);
      // Update user's display name with first and last name
      await updateProfile(authUser.user, {
        displayName: `${firstNameState} ${lastNameState}`,
        phoneNumber: `${phoneState}`,
      });
      
    } catch (error) {
      // Handle any errors here
      console.error("Error creating user:", error);
    }
  };
  
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
    return signOut(auth);
  }



  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // User is authenticated
      setUserId(currentUser.uid);
      setUser(currentUser);
      console.log("current", currentUser);
      console.log("set user id", currentUser.uid);
      // User is not authenticated
      setUserId(null); // Optionally reset the user ID or take appropriate action
      setUser(null); // Optionally reset the user state or take appropriate action
    });

  return () => {
    unsubscribe();
  };
}, []);


  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}> 
      {children}
    </UserContext.Provider>
  );
};


export const UserAuth = () => {
  return useContext(UserContext);
};
