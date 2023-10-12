import React, { useState } from "react"
import MealTypeArray from "../MealTypeArray";

export default function MealType() {
    

    return (
    <>
        <h2 className ="list-item-text">Entree:</h2>
            <select className= "list-items" >
                {MealTypeArray.map((item) => (
                    <option key={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
    </>
    )
}