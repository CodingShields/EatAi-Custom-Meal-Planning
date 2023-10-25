import React from "react";
import flippedchef from "../../assets/images/flippedchef.png"
import LiveTypingWelcome from "./Live-Typing-Pages/Live-Typing-Welcome";

export default function Welcome() {

  return (
    <div className="kitchen-container">
      <div className="chef-img-container">
        <img className="chef-img" src={flippedchef} alt="Chef" />
      </div>
      <div className="menu-container">
        <div className="live-text-div">
             <LiveTypingWelcome
            fontSize="28px"
            />
        </div>
      </div>
    </div>
  );
}
