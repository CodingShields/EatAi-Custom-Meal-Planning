import React from "react";
import { Link } from "react-router-dom";
import LiveTypingHomePage from "../Pages/SubPage/Live-Typing-Pages/Live-Typing-Home-Page.jsx";
import flippedchef from "../assets/images/flippedchef.png";
export default function Home() {
	return (
		<div >
			<div >
				<img className='home-page-chef-img' src={flippedchef}></img>
			</div>
			<h1> test </h1>
			<div className='home-live-text-container'>
				{/* <LiveTypingHomePage /> */}
				<h1> This App is currently going under major construction to better the user desktop and mobile experience. Stay Tuned. Current Members will still have Ai access.</h1>
			</div>
		</div>
	);
}
