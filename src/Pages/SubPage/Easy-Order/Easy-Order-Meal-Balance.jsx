import React, { useState, useEffect } from "react";
import MealBalance from "../../../assets/dataArrays/Meal-Balance-Array";
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore";
import { useEasyOrderStoreActions } from "../../../state-store/EasyOrderStore";

const EasyOrderMealBalance = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [selectedBalance, setSelectedBalance] = useState("");
  const { setBalance } = useEasyOrderStoreActions()
  const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);

  const handleChange = (item) => {
    setIsButtonDisabled(true);
    setSelectedBalance(item);

  };

  const handleClick = () => {
    setBalance(selectedBalance);
    increaseStep();
    setIsButtonDisabled(false);
    localStorage.setItem("selectedBalance", selectedBalance);
  };
    useEffect(() => {
  // Check if there's a selected option in local storage
  const savedSelectedItem = localStorage.getItem("selectedBalance");
  if (savedSelectedItem) {
    setSelectedBalance(savedSelectedItem); // Update the selectedBalance state
    setIsButtonDisabled(true);
  }
}, []);


  return (
    <>
      <div className="easy-order-menu-title-container">
        <h1>Food Balance</h1>
      </div>
      <div className="easy-order-options-container-big">
        <ul className="easy-order-list" >
      {MealBalance.map((item) => (
        <li key={item.id}>
          <label>
          <input
            type="radio"
            value={item.name}
            checked={selectedBalance.includes(item.name)}
            onChange={() => handleChange(item.name)}
          />
            {item.name}
            </label>
        </li>
      ))}
        </ul>
        </div>
      {isButtonDisabled ? (
        <button className="easy-order-make-selection-btn" onClick={handleClick}>
          Make Selection
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default EasyOrderMealBalance;
