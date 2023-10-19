import React, { useState, useEffect } from "react";
import DietaryOptionsArray from "../../../assets/dataArrays/Dietary-Options-Array";
import EasyOrderSelectionButton from "./Easy-Order-Comps/Easy-Order-Make-Selection-btn";

export default function EasyOrderDietary() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [checkedDietaryOptions, setCheckedDietaryOptions] = useState([])
    const [dietarySelectionConfirmed, setDietarySelectionConfirmed] =useState(false)

  const maxCheckedDietaryOptions = 3;

  const handleCheckboxDietaryChange = (item) => {
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

  function handleDietarySelectionChild() {
    setDietarySelectionConfirmed();
    console.log("clicked");
  }

  useEffect(() => {
    setIsButtonDisabled(
      checkedDietaryOptions.length === 0 ||
        (checkedDietaryOptions.includes("No Dietary Restrictions") &&
          checkedDietaryOptions.length === 1)
    );
  }, [checkedDietaryOptions]);

  return (
    <>
      <h2 className="easy-order-menu-text">
        Please Choose Up to 3 Dietary Options
      </h2>
      <ul className="courses-list-el">
        {DietaryOptionsArray.map((item) => (
          <li key={item.id}>
            <input
              className="easy-order-items-list"
              type="checkbox"
              value={item.name}
              checked={checkedDietaryOptions.includes(item.name)}
              onChange={() => handleCheckboxDietaryChange(item.name)}
              // Disable checkboxes if "No Dietary Restrictions" is selected
              disabled={
                item === "No Dietary Restrictions" &&
                checkedDietaryOptions.includes("No Dietary Restrictions")
              }
            />
            {item.name}
          </li>
        ))}
      </ul>
    <EasyOrderSelectionButton />
    </>
  );
}
