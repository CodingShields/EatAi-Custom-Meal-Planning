import React, { useState, useEffect } from "react";
import Measure from "../../../assets/dataArrays/Measure-Options";
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore";
import { useEasyOrderStoreActions } from "../../../state-store/easyOrderStore";
import "../../.././css/EasyOrder.css"; 

const EasyOrderMeasure = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { setMeasure } = useEasyOrderStoreActions();
  const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (itemName) => {
    setIsButtonDisabled(true);

    if (checkedItems.includes(itemName)) {
      // Item is already checked, so remove it
      setCheckedItems(checkedItems.filter((item) => item !== itemName));
    } else {
      // Item is not checked, so add it
      setCheckedItems([...checkedItems, itemName]);
    }
    console.log(checkedItems);
  };

  const handleClick = () => {
    setMeasure(checkedItems);
    increaseStep();
    setIsButtonDisabled(false);
    localStorage.setItem("selectedMeasure", checkedItems);

  };

  useEffect(() => {
    const savedCheckedItem = localStorage.getItem("selectedMeasure");
    if (savedCheckedItem) {
      setCheckedItems((savedCheckedItem));
      setIsButtonDisabled(true);
    }
  }, []);

  return (
    <>
      <div className="easy-order-menu-title-container">
        <h1>How Would You Like Your Measurements?</h1>
      </div>
      <ul className="easy-order-list">
        {Measure.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="radio"
                name="measure"
                value={item.name}
                checked={checkedItems.includes(item.name)}
                onChange={() => handleChange(item.name)}
              />
              <span className="measure-span-text">{item.name}</span>
            </label>
            <p>{item.data}</p>
          </li>
        ))}
      </ul>
      {isButtonDisabled ? (
        <button
          className="easy-order-btn"
          onClick={handleClick}
        >
          Make Selection
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default EasyOrderMeasure;
