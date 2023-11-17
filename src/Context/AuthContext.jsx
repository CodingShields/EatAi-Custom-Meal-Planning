import React, { createContext, useContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	updateProfile,
} from "firebase/auth";
import { auth, db } from "../Firebase/fireBaseConfig";
import { useUserStore } from "../stateStore/userStore";
import { useUserStoreActions } from "../stateStore/userStore";
import { setDoc, doc } from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const { resetForm } = useUserStoreActions((actions) => actions);
	const disclaimerState = useUserStore((state) => state.disclaimer);

	const createUser = async ({ firstName, lastName, email, phone, password }) => {
		try {
			const authUser = await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(authUser.user, {
				displayName: `${firstName}`,
				phoneNumber: phone,
			});
			const userDocRef = doc(db, "users", authUser.user.uid);
			await setDoc(userDocRef, {
				profile: {
					first: firstName,
					last: lastName,
					email: email,
					phone: phone,
					membership: false,
					disclaimer: disclaimerState,
					signUpDate: new Date(),
					uid: authUser.user.uid,
				},
				pantry: {
					easyOrder: {},
					advancedOrder: {},
				},
			});
			resetForm();
			console.log("User document added successfully");
		} catch (error) {
			console.error("Error creating user:", error);
		}
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		resetForm();
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			// User is authenticated
			if (currentUser) {
				setUser(currentUser);
				console.log("current", currentUser);
			} else {
				// User is not authenticated
				setUser(null);
				console.log("logged out", currentUser);
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return <UserContext.Provider value={{ createUser, user, logout, signIn }}>{children}</UserContext.Provider>;
};

export const UserAuth = () => {
	return useContext(UserContext);
};
