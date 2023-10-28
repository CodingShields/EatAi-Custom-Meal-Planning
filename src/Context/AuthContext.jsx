import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";
import { auth, db} from "../Firebase/firebaseConfig"
import { useNewUserStore } from "../state-store/NewUserStore";
import { collection, addDoc } from "firebase/firestore/lite"; 



const UserContext= createContext();

export const AuthContextProvider = ({ children }) => {
  
  const [user, setUser] = useState({});
  const disclaimerState = useNewUserStore((state) => state.disclaimer)  
  
  const createUser = async (firstName, lastName, email, phone, password) => {
    console.log("email", email);
    try {
      const authUser = await createUserWithEmailAndPassword(auth, email, password);
      // Update user's display name with first and last name
      await updateProfile(authUser.user, {
        displayName: `${firstName} ${lastName}`,
        phoneNumber: phone
      });
         const usersCollection = collection(db, "users");
            await addDoc(usersCollection, {
              first: firstName,
              last: lastName,
              email: email,
              phone: phone,
              membership: false,
              disclaimer: disclaimerState,
              signUpDate: new Date(),
              uid: authUser.user.uid
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
      setUser(currentUser);
      console.log("current", currentUser);
      // User is not authenticated
      setUser(null);
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


