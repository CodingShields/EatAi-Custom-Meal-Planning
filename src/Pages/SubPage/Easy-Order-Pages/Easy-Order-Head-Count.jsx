import React, { useState } from "react";

export default function HeadCount({
    headCountOption,
    setHeadCountOption,
    setHeadCountSelectionConfirmed}) {
    

 function handleHeadCountSelectionChild(value) {
        setHeadCountSelectionConfirmed(value)
        console.log("clicked");
        
    }

    return (
    <div className="easy-order-menu-container">
        <h2 className="easy-order-menu-text">How many guests will you be serving?</h2>
        <input
            className="easy-order-headcount-slider"
            type="range"
            id="head-count-volume"
            name="volume"
            min="1"
            max="50"
            step="1"
            value={headCountOption}
            onChange={(e) => handleHeadCountSelectionChild(e.target.value)}
        />
        <div className="head-count-container">
            <p className="head-count-title-text">
                HeadCount:{" "}<span className="head-count-data-text">{headCountOption}</span> {headCountOption != 1 ? "people" : "person"}
                </p>
            </div>
        <button
                className="course-make-selection-btn"
                onClick={handleHeadCountSelectionChild}
                >Make Selection</button>    
    </div>
    );
}
