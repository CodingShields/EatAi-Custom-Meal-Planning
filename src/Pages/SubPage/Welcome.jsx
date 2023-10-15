import React from "react";
import flippedchef from "../../assets/images/flippedchef.png"
import LiveTypingKitchen from "./Live-Typing-Pages/Live-Typing-Kitchen";
// import kitchen from "../../assets/images/kitchen.png"


export default function Welcome() {

  
  return (
    <div className="kitchen-container">
      {/* <img className="chef-background-img" src={kitchen} alt="Chef Background" /> */}
      <div className="chef-img-container">
        <img className="chef-img" src={flippedchef} alt="Chef" />
      </div>
      <div className="menu-container">
        <div className="live-text-div">
             <LiveTypingKitchen
            fontSize="28px"
            />
        </div>
      </div>
    </div>
  );
}
