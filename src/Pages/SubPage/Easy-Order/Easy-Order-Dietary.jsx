import React, { useState} from "react";
import DietaryOptionsArray from "../../../assets/dataArrays/Dietary-Options-Array";
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore";
import { useEasyOrderStoreActions } from "../../../state-store/easyOrderStore";

const EasyOrderDietary = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [checkedDietaryOptions, setCheckedDietaryOptions] = useState([])
  const { setDietary } = useEasyOrderStoreActions()
  const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);
  const maxCheckedDietaryOptions = 3;

  const handleCheckbox = (item) => {
    setIsButtonDisabled(true)
    if (item === "No Dietary Restrictions") {
      // If "No Dietary Restrictions" is selected, unselect it and enable other options
      if (checkedDietaryOptions.includes(item)) {
        setCheckedDietaryOptions([]);
      } else {
        setCheckedDietaryOptions([item]);
      }
    } else {
      // Check if it's checked
      const isChecked = checkedDietaryOptions.includes(item);

      if (isChecked) {
        // If it's checked, remove it from the array
        setCheckedDietaryOptions(
          checkedDietaryOptions.filter((option) => option !== item)
        );
      } else if (checkedDietaryOptions.length < maxCheckedDietaryOptions) {
        // If it's not checked and the limit is not reached, add it to the array
        setCheckedDietaryOptions([...checkedDietaryOptions, item]);

        // Unselect "No Dietary Restrictions" if it was selected
        if (checkedDietaryOptions.includes("No Dietary Restrictions")) {
          setCheckedDietaryOptions([]);
        }
      }
    }
  };
  const handleClick = () => {
    setDietary(checkedDietaryOptions);
    increaseStep();
    setIsButtonDisabled(false);
  }



  return (
    <>
      <h2 className="easy-order-menu-text">
        Please Choose Up to 3 Dietary Options
      </h2>
      <ul className="easy-order-list">
        {DietaryOptionsArray.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              value={item.name}
              checked={checkedDietaryOptions.includes(item.name)}
              onChange={() => handleCheckbox(item.name)}
              disabled={
                item === "No Dietary Restrictions" &&
                checkedDietaryOptions.includes("No Dietary Restrictions")
              }
            />
            {item.name}
          </li>
        ))}
      </ul>
      {isButtonDisabled ? <button className="easy-order-make-selection-btn" onClick={handleClick}
      >Make Selection
    </button>:""}
    </>
  );
}

export default EasyOrderDietary;