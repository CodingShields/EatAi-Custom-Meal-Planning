import React, { useState, useEffect } from "react";
import LiveTypingDisClaimerForm from "../Pages/SubPage/Live-Typing-Pages/Live-Typing-Disclaimer-Form";
import { useUserStoreActions } from "../stateStore/userStore";
import { useUserStore } from "../stateStore/userStore";
import LiveDate from "./LiveDate";

const Disclaimer = () => {
	const [renderDisclaimer, setRenderDisclaimer] = useState(false);
	const [renderLiveTyping, setRenderLiveTyping] = useState(true);
	const [isChecked, setIsChecked] = useState(false);
	const { setDisclaimer } = useUserStoreActions();

	const disclaimerState = useUserStore((state) => state.disclaimer);

	// need to update State Names and variables

	const handleOnClick = () => {
		setDisclaimer(true);
		setRenderDisclaimer(true);
		setRenderLiveTyping(false);
	};

	const handleOnChange = (e) => {
		setIsChecked(e.target.checked);
	};

	useEffect(() => {
		setRenderLiveTyping(true);
	}, []);

	return (
		<div style={renderDisclaimer ? { display: "none" } : { display: "flex" }} className='disclaimer-container'>
			<LiveTypingDisClaimerForm />
			<LiveDate />

			<input className='disclaimer-checkbox' onChange={(e) => handleOnChange(e)} checked={isChecked} type='checkbox' />
			<p className='disclaimer-footer-text'>Check This Box If You Agree to and Understand The Disclaimer</p>
			<button className='disclaimer-btn' onClick={handleOnClick} disabled={!isChecked}>
				Submit Disclaimer
			</button>
		</div>
	);
};

export default Disclaimer;
