import React from "react";
import FlavorTypeArray from "./FlavorTypeArray"

export default function Flavor() {


    return (
        <>
        <h2 className ="option-title">How would You Like to Flavor your Meal?</h2>
            <select className ="meal-list">
                {FlavorTypeArray.map((item) => (
                    <option key={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            <button className="confirm-selections-btn">Add</button>
            <h3 className="flavor-details">Flavoring will consist of ... </h3>
        </>
    )
    
}