import React from "react";
import { Link } from "react-router-dom";
import LiveTypingHomePage from "../Pages/SubPage/Live-Typing-Pages/Live-Typing-Home-Page.jsx";
import flippedchef from "../assets/images/flippedchef.png";
export default function Home() {
	return (
		<div className='home-page-container'>
			<div className='home-page-chef-img-container'>
				<img className='home-page-chef-img' src={flippedchef}></img>
			</div>
			<h1> test </h1>
			<div className='home-live-text-container'>
				<LiveTypingHomePage />
			</div>
		</div>
	);
}
