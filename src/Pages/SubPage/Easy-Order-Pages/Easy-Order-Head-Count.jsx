import React, { useState } from "react";

export default function HeadCount() {
    const [people, setPeople] = useState(1);

    function handleHeadCount(value) {
    setPeople(value);
    }
    console.log(people);
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
            value={people}
            onChange={(e) => handleHeadCount(e.target.value)}
        />
        <div className="head-count-container">
            <p className="head-count-title-text">
                HeadCount:{" "}<span className="head-count-data-text">{people}</span> {people != 1 ? "people" : "person"}
                </p>
        </div>   
    </div>
    );
}
