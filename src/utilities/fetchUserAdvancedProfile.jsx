
import React, { useState, useEffect } from "react";
import { UserAuth } from "../Context/AuthContext.jsx";
import { db, auth } from "../Firebase/fireBaseConfig.js";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";


export const FetchUserData = () => {

    const [state, setState] = useState({
        error: false,
        errorMessage: "",
        loading: false,
        hasProfile: false,
    });
    
    const user = UserAuth();
    const userId = user.user.uid;

    useEffect(() => {
        const checkForProfile = async () => {
            try {
                const userDocRef = doc(db, "users", userId);
                const userDocSnap = await getDoc(userDocRef);
                const userDocData = userDocSnap.data();
                if (userDocData.profile) {
                    userData(userDocData.advancedProfile);
                    console.log("success");
                } else {
                    console.log("no profile");
                    setState({ hasProfile: false, error: true, errorMessage: "No Personal Stats file found. If this is not right, please go to the support and submit a request." })
					
                }
            } catch (error) {
                console.log(error);
            }
        };
        checkForProfile();
    }, []);
    

}
