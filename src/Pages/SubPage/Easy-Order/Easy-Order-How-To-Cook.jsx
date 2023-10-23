import React, { useState } from "react";
import HowToCook from "../../../assets/dataArrays/How-To-Cook-Array";
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore";
import { useEasyOrderStoreActions } from "../../../state-store/easyOrderStore";

const EasyOrderHowToCook = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [checkedHowToCook, setCheckedHowToCook] = useState([]);
  const { setHowToCook } = useEasyOrderStoreActions();
  const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);

  function handleCheckbox(item) {
    setIsButtonDisabled(true);
    if (checkedHowToCook.includes(item)) {
      setCheckedHowToCook(checkedHowToCook.filter((checkedItem) => checkedItem !== item));
    } else {
      setCheckedHowToCook([...checkedHowToCook, item]);
    }
  }

  const handleClick = () => {
    setHowToCook(checkedHowToCook);
    increaseStep();
    setIsButtonDisabled(false);
  };

  return (
    <>
      <h1>How would you like to cook?</h1>
      <ul className="easy-order-list">
        {HowToCook.map((item) => (
          <li key={item.id}>
            <input
              type="radio"
              value={item.name}
              checked={checkedHowToCook.includes(item.name)}
              onChange={() => handleCheckbox(item.name)}
              disabled={
                item === "No Preference" &&
                checkedHowToCook.includes("No Preference")
              }
            />
            {item.name}
          </li>
        ))}
      </ul>
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

export default EasyOrderHowToCook;
