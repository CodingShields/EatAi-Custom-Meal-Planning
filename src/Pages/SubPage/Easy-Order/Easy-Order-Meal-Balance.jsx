import React, { useState } from "react";
import MealBalance from "../../../assets/dataArrays/Meal-Balance-Array";
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore";
import { useEasyOrderStoreActions } from "../../../state-store/easyOrderStore";

const EasyOrderMealBalance = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [checkedMealBalance, setCheckedMealBalance] = useState([]);
  const { setBalance } = useEasyOrderStoreActions()
  const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);

  const handleCheckboxChange = (item) => {
    setIsButtonDisabled(true);
    if (checkedMealBalance.includes(item)) {
      // Item is already checked, so remove it
      setCheckedMealBalance(checkedMealBalance.filter((checkedMealBalance) => checkedMealBalance !== item));
    } else {
      // Item is not checked, so add it
      setCheckedMealBalance([...checkedMealBalance, item]);
    }
  };

  const handleClick = () => {
    setBalance(checkedMealBalance);
    increaseStep();
    setIsButtonDisabled(false);
  };

  return (
    <>
      <h1>Food Balance</h1>
      {MealBalance.map((item) => (
        <ul className="easy-order-list" key={item.id}>
          <input
            type="radio"
            value={item.name}
            checked={checkedMealBalance.includes(item.name)}
            onChange={() => handleCheckboxChange(item.name)}
          />
          {item.name}
        </ul>
      ))}
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
