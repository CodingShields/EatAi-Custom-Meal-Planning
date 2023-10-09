import React from "react";
import flippedchef from "../../assets/images/flippedchef.png";
import kitchen from "../../assets/images/kitchen.png";

export default function EasyOrder() {
    
    return (
        <div className="kitchen-container">
            <div className="chef-container">
                <img className="chef-background-img" src={kitchen} />
                <img className="chef-img" src={flippedchef}/>
            </div>
            <div className="menu-container">
                
            </div>
 
        </div>
    )
}