import React, { useState } from "react";
import HowToCook from "../../../assets/dataArrays/How-To-Cook-Array";
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore";
import { useEasyOrderStoreActions } from "../../../state-store/easyOrderStore";

const EasyOrderHowToCook = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [checkedHowToCook, setCheckedHowToCook] = useState([]);
  const { setHowToCook } = useEasyOrderStoreActions();
  const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);
  const maxCheckedOptions = 3;

  const handleCheckbox = (item) => {
    setIsButtonDisabled(true)
    if (item === "No Preference") {
      // If "No Dietary Restrictions" is selected, unselect it and enable other options
      if (checkedDietaryOptions.includes(item)) {
        setCheckedHowToCook([]);
      } else {
        setCheckedHowToCook([item]);
      }
    } else {
      // Check if it's checked
      const isChecked = setCheckedHowToCook.includes(item);

      if (isChecked) {
        // If it's checked, remove it from the array
        setCheckedHowToCook(
          setCheckedHowToCook.filter((option) => option !== item)
        );
      } else if (setCheckedHowToCook.length < maxCheckedOptions) {
        // If it's not checked and the limit is not reached, add it to the array
        setCheckedHowToCook([...setCheckedHowToCook, item]);

        // Unselect "No Dietary Restrictions" if it was selected
        if (setCheckedHowToCook.includes("No Preference")) {
          setCheckedHowToCook([]);
        }
      }
    }
  };

  const handleClick = () => {
    setHowToCook(checkedHowToCook);
    increaseStep();
    setIsButtonDisabled(false);
  };

  return (
    <>
      <h1>Please Select 3 Different Cooking Styles</h1>
      <div className="easy-order-options-container">
      <ul className="easy-order-list">
        {HowToCook.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
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

export default EasyOrderHowToCook;
