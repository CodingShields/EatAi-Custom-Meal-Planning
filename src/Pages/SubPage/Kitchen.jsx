import React from "react";
import flippedchef from "../../assets/images/flippedchef.png"
import LiveTypingText from "./LiveTypingDashboard";
import kitchen from "../../assets/images/kitchen.png"
export default function Kitchen() {

  
  return (
    <div className="kitchen-container">
      <div className="chef-container">
        <img className="chef-background-img" src={kitchen} alt="Chef Background" />
        <img className="chef-img" src={flippedchef} alt="Chef" />
      </div>
      <div className="menu-container">
        <div className="live-text-div">
            <LiveTypingText
            fontSize="28px"
            />
        </div>
      </div>
    </div>
  );
}
