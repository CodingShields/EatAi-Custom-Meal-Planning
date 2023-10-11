import React from "react";
import flippedchef from "../../assets/images/flippedchef.png"
import LiveTypingKitchen from "./LiveTypingKitchen";
import kitchen from "../../assets/images/kitchen.png"
export default function Kitchen() {

  
  return (
    <div className="dashboard-container">
      {/* <img className="chef-background-img" src={kitchen} alt="Chef Background" /> */}
      <div className="chef-img-container">
        <img className="chef-img" src={flippedchef} alt="Chef" />
      </div>
      <div className="chef-bubble-div">
        <div className="live-text-div">
             <LiveTypingKitchen
            fontSize="28px"
        />
          </div>
       
      </div>
      
    </div>
  );
}
