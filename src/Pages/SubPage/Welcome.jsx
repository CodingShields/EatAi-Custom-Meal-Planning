import React from "react";
import flippedchef from "../../assets/images/flippedchef.png"
import LiveTypingWelcome from "./Live-Typing-Pages/Live-Typing-Welcome";
import "../.././css/welcomePage.css"

export default function Welcome() {

  return (
    <div className="welcome-page-container">
        <img className="welcome-page-chef-img" src={flippedchef} alt="Chef" />
      <div className="welcome-page-live-text-container">
             <LiveTypingWelcome
            fontSize="28px"
            />
        </div>
      </div>
  );
}
