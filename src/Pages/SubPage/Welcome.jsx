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
import spinnderLoad from "../../assets/images/spinnerLoad.svg"
import SearchingForProfileFadeIn from "../../assets/images/SearchingForProfileFadeIn.svg"
import SearchingForProfileFadeOut from "../../assets/images/SearchingForProfileFadeOut.svg"
import searching from "../../assets/images/searching.svg"
import "../.././css/welcomePage.css"

export default function Welcome() {
  const user = UserAuth();
  const userId = user.user.uid;
  const displayName = user.user.displayName;

  const { setUserId } = useUserStoreActions((actions) => actions);
  

  const [state, setState] = useState({
    error: false,
    errorMessage: "",
    message: "",
    searchingForProfile: false,
    loading: false,
    hasProfile: false,
    liveText: false,  
  });
  

  useEffect(() => {
    setState({ ...state, liveText: false, message: "Checking for profile..." });
    setTimeout(() => {
      setState({ ...state, loading: true });
  
    }, [2500]);
    setState({ ...state, loading: false, hasProfile: true, LiveText: true });
  
  }, []);






  return (
		<div className='welcome-page-container'>
			<img className='welcome-page-chef-img' src={flippedchef} alt='Chef' />
			<div className='welcome-page-live-text-container'>
				<h1>Welcome {displayName}!</h1>
        <p className='state-message'>{state.message}</p>
				{state.error ? (
					<div className='error-modal'>
						<p className='error-content'>{state.errorMessage}</p>
					</div>
				) : null}
				{state.loading ? <img className='searchingForProfile' src={state.loading ? SearchingForProfileFadeIn : SearchingForProfileFadeOut} /> : null}
          {state.liveText ? <LiveTypingWelcome /> : null }
        </div>
		</div>
	);
}
