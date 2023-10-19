import React from "react";
import MealBalance from "../../../assets/dataArrays/Meal-Balance-Array";
import EasyOrderMakeSelectionButton from "./Easy-Order-Comps/Easy-Order-Make-Selection-btn";

export default function EasyOrderMealBalance() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [checkedMealBalance, setCheckedMealBalance] = useState([])
    
    function handleCheckboxChange(item) {
    if (checkedMealBalance.includes(item)) {
      // Item is already checked, so remove it
      setCheckedMealBalance(checkedMealBalance.filter((checkedMealBalance) => checkedMealBalance !== item));
    } else {
      // Item is not checked, so add it
      setCheckedMealBalance([...checkedMealBalance, item]);
    }
  }

    return (
        <>
            <h1>Food Balance</h1>
            {MealBalance.map((item) => (
                <div key={item.id}>
                    <input
                        className="easy-order-items-list"
                        type="checkbox"
                        value={item.name}
                        checked={checkedMealBalance.includes(item.name)}
                        onChange={() => handleCheckboxChange(item.name)}
                    />
                    {item.name}
                </div>
            ))}
            {!isButtonDisabled ? <EasyOrderMakeSelectionButton /> : ""}
        </>
    )
}