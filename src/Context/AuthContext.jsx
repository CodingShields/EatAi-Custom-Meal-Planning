import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  
  const [user, setUser] = useState({});
  
  const createUser = async (email, password, firstName, lastName) => {
    try {
      const authUser = await createUserWithEmailAndPassword(auth, email, password);
      // Update user's display name with first and last name
      await updateProfile(authUser.user, { displayName: `${firstName} ${lastName}` });
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
      console.log(currentUser);
      setUser(currentUser)
    })
    return () => {
      unsubscribe();
    };
  },[])

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}> 
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
