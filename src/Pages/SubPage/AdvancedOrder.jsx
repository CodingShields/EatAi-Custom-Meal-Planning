import React from "react";
import LiveTypingAdvancedOrder from "./LiveTypingAdvancedOrder";
import flippedchef from "../../assets/images/flippedchef.png";

export default function AdvancedOrder() {
    
    return (
        <div className="dashboard-container">
            <div className="chef-img-container">
				<img className="chef-img" src={flippedchef} alt="Chef" />
            </div>
            <div className="chef-bubble-div">
        <div className="live-text-div">
             <LiveTypingAdvancedOrder
            fontSize="28px"
        />
          </div>
       
      </div>
        </div>
    )
}