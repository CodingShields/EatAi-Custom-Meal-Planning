import React, { useState } from "react";
import AdvancedOrderMacroQuestions from "../../../assets/Data Arrays/Advanced-Order-Macros-Questions";

export default function AdvancedOrderMacros() {
    const [macroData, setMacroData] = useState({
        calories:"",
        protein: "",
        carbs: "",
        fat: "",
    });

    function handleChange(id, value) {
        setMacroData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }

  console.log(macroData);

  return (
    <div className="advanced-order-macros-container">
        {AdvancedOrderMacroQuestions.map((category) => (
            <div
                className="advanced-order-questions-container"
                key={category.id}>
            <h1 className="advanced-order-macro-category-title">
                {category.question}
            </h1>
                <input
                    required
                    type="text"
                    className="advanced-order-macro-input"
                    value={macroData[category.id]} // Use macroData to display the value
                    onChange={(e) => handleChange(category.id, e.target.value)} // Pass the value from the input
                />
            </div>
        ))}
        <button className="advanced-order-done-btn">Confirm Nutrition</button>
    </div>
    );
}
