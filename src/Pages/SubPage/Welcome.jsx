import React, { useState, useEffect } from "react";
//global state
import { useUserStoreActions } from "../../stateStore/userStore";
//auth
import { UserAuth } from "../../Context/AuthContext.jsx"
//db
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../Firebase/fireBaseConfig.js";
//images
import flippedchef from "../../assets/images/flippedchef.png"
import LiveTypingWelcome from "./Live-Typing-Pages/Live-Typing-Welcome";
import spinnerLoad from "../../assets/images/spinnerLoad.svg"
import SearchingForProfileFadeIn from "../../assets/images/SearchingForProfileFadeIn.svg"
import SearchingForProfileFadeOut from "../../assets/images/SearchingForProfileFadeOut.svg"
import searching from "../../assets/images/searching.svg"

export default function Welcome() {
  const user = UserAuth();
  const userId = user.user.uid;
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
    setState({ ...state,errorMessage: "Checking for profile..." });
    setTimeout(() => {
      setState({ ...state, loading: true });
  
    }, [2500]);
    setState({ ...state, loading: false, hasProfile: true, LiveText: true });
  
  }, []);






  return (
		<div className='flex flex-col content-center justify-center w-full h-full'>
			<div className="border-border">
				<img className='w-auto h-auto m-32 mr-4 grow' src={flippedchef} alt='Chef' />
			</div>

			<div className='pl-20 pr-20 m-0 bg-orange-100 border-4 shadow-lg w-fit h-fit rounded-xl border-amber-800 shadow-black'>
				<h1 className='mb-4 text-4xl font-bold text-center'>Welcome {displayName}! still need to set modal</h1>
				<p className='state-message'>{state.message}</p>
				{state.error ? (
					<div className='error-modal'>
						<p className='error-content'>{state.errorMessage}</p>
					</div>
				) : null}
				{state.loading ? (
					<img
						className='searchingForProfile'
						src={state.loading ? SearchingForProfileFadeIn : SearchingForProfileFadeOut}
					/>
				) : null}
				{/* {state.liveText ? <LiveTypingWelcome /> : null} */}
			</div>
		</div>
	);
}
