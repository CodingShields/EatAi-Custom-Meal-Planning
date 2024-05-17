import React, { useState, useEffect } from "react";
//global state
import { useUserStoreActions } from "../../stateStore/userStore";
//auth
import { UserAuth } from "../../Context/AuthContext.jsx";
//db
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/fireBaseConfig.js";
//images
import flippedchef from "../../assets/images/flippedchef.png";
import LiveTypingWelcome from "./Live-Typing-Pages/Live-Typing-Welcome";
import spinnderLoad from "../../assets/images/spinnerLoad.svg";
import SearchingForProfileFadeIn from "../../assets/images/SearchingForProfileFadeIn.svg";
import SearchingForProfileFadeOut from "../../assets/images/SearchingForProfileFadeOut.svg";
import searching from "../../assets/images/searching.svg";
import welcomePageBG from "../../assets/images/welcomePageBG.jpeg";
export default function Welcome() {
	const user = UserAuth();
	const displayName = user.user.displayName;

	const { setUserId } = useUserStoreActions((actions) => actions);

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		message: "",
		modal: false,
		searchingForProfile: false,
		loading: false,
		hasProfile: false,
	});

	const initializeState = () => {
		setState({
			error: false,
			errorMessage: "",
			message: "",
			modal: false,
			searchingForProfile: false,
			loading: false,
			hasProfile: false,
		});
	};

	useEffect(() => {
		initializeState();
		setState({ ...state, errorMessage: "Checking for profile..." });
		setTimeout(() => {
			setState({ ...state, loading: true });
		}, [2500]);
		setState({ ...state, loading: false, hasProfile: true, LiveText: true });
	}, []);

	return (
		<div className='w-full h-full'>
			<div className='absolute -z-10 w-full h-fit'>
				<img src={welcomePageBG} className='w-full h-[1300px] object-cover' />
			</div>
			<div className='w-full h-full flex flex-col justify-center items-center my-auto'>
				<div className='w-full mx-auto pt-64 h-full '>
					<div className='w-fit h-[200px] mx-auto'>
						<h1 className='tracking-widest w-fit h-fit text-center text-[150px] text-white border-2 border-white mx-auto font-thin px-12 hover:px-48 hover:bg-black/50 hover:border-8 transition-all ease-in-out duration-500'>
							EatAI
						</h1>
					</div>
					<div className='w-fit h-fit text-center text-[90px] text-white uppercase mx-auto font-thin px-12 tracking-widest bg-black/70 rounded-xl my-16 hover:px-48 transition-all ease-in-out duration-500'>
						<h1>Food Planning Made Simple</h1>
					</div>
				</div>
				<div className='w-fit mx-auto my-12 bg-black/80 rounded-xl px-12 py-6 hover:px-48 transition-all ease-in-out duration-500'>
					<h1 className='font-thin text-6xl text-white '>Welcome {displayName && displayName}!</h1>
				</div>
			</div>
		</div>
	);
}
