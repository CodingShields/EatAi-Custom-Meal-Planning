import React from "react";
import flippedchef from "../../assets/images/flippedchef.png"
import LiveTypingText from "./LiveTypingDashboard";
import kitchen from "../../assets/images/kitchen.png"
export default function Kitchen() {

  
  return (
    <div className="dashboard-container">
      <img className="chef-background-img" src={kitchen} alt="Chef Background" />
      <div className="chef-img-div">
        <img className="chef-img" src={flippedchef} alt="Chef" />
      </div>
      <div className="chef-bubble-div">
        <div className="live-text-div">
             <LiveTypingText
            fontSize="28px"
        />
          </div>
       
      </div>
      
    </div>
  );
}
