import React from "react";
import flippedchef from "../../assets/images/flippedchef.png";
import kitchen from "../../assets/images/kitchen.png";

export default function EasyOrder() {
    
    return (
        <div className="kitchen-container">
            <img
                className="chef-background-img"
                src={kitchen} />
            <div className="chef-img-div">
                <img className="chef-img" src={flippedchef}/>
            </div>
            <div className="easyorder-menu-container">
                {/* What kind of meal?
                    How many people? */}
            </div>
        </div>
    )
}