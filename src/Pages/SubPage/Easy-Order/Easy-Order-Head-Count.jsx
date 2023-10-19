import React, { useState, useEffect } from "react";
import EasyOrderMakeSelectionButton from "./Easy-Order-Comps/Easy-Order-Make-Selection-btn";

export default function EasyOrderHeadCount() {
    const [headCount, setHeadCount] = useState(1)
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
 
    function handleHeadCount(value) {
        setHeadCount(value)
        console.log("clicked");
        
    }

 useEffect(() => {
    setIsButtonDisabled(false);
  }, [])


    return (
    <>
        <h2 className="easy-order-menu-text">How many guests will you be serving?</h2>
        <input
            className="easy-order-headcount-slider"
            type="range"
            id="head-count-volume"
            name="volume"
            min="1"
            max="50"
            step="1"
            value={headCount}
            onChange={(e) => handleHeadCount(e.target.value)}
        />
        <div className="head-count-container">
            <p className="head-count-title-text">
                HeadCount:{" "}<span className="head-count-data-text">{headCount}</span> {headCount != 1 ? "people" : "person"}
                </p>
            </div>
        {!isButtonDisabled ? <EasyOrderMakeSelectionButton /> : ""}
    </>
    );
}
