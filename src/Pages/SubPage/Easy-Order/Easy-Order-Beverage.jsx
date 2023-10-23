import React, { useState, useEffect} from "react";  
import BeverageOptionsArray from "../../../assets/dataArrays/Beverage-Options-Array";
export default function EasyOrderBeverage() {  
    // const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [checkedBeverage, setCheckedBeverage] = useState("")

 function handleCheckbox(item) {
    if (checkedBeverage.includes(item)) {
      // Item is already checked, so remove it
      setCheckedBeverage(checkedBeverage.filter((checkedBeverage) => checkedBeverage !== item));
    } else {
      // Item is not checked, so add it
      setCheckedBeverage([...checkedBeverage, item]);
    }
  }

    useEffect(() => {
    setIsButtonDisabled(checkedBeverage.length === 0);
  }, [checkedBeverage])
    return (
        <>
            <h1>Dessert Flavor</h1>
            <ul className="easy-order-items-list">
                        {BeverageOptionsArray.map((item) => (
                            <li key={item.id}>
                                <input
                                    className="easy-order-items-list"
                                    type="checkbox"
                                    value={item.name}
                                    checked={checkedBeverage.includes(item.name)}
                                    onChange={() => handleCheckbox(item.name)}
                                />
                                {item.name}
                            </li>
                        ))}
                </ul>
        </>
    )
}
