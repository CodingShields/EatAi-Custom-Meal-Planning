import React from "react";
import { Link } from "react-router-dom";
import flippedchef from "../assets/images/flippedchef.png";
import LiveTypingAboutPage from "./SubPage/Live-Typing-Pages/Live-Typing-About-page.jsx";

export default function About() {
	return (
		<div className='about-page-container'>
			<div className='chef-img-container'>
				<img className='about-page-chef-img' src={flippedchef}></img>
			</div>
			<div className='about-live-text-container'>
				{/* <LiveTypingAboutPage /> */}
				<h1>
					{" "}
					This App is currently going under major construction to better the user desktop and mobile experience. Stay Tuned. Current Members will
					still have Ai access.
				</h1>
			</div>
		</div>
	);
}
