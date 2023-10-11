import React, { useState, useEffect } from "react";
import dietaryOptions from "../../assets/Dietary";

export default function EasyOrderDietary({ checkedDietaryOptions, setCheckedDietaryOptions }) {




  const maxCheckedDietaryOptions = 3;

  const handleCheckboxDietaryChange = (item) => {
    if (item === 'No Dietary Restrictions') {
      // Toggle the selection state
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
        setCheckedDietaryOptions(checkedDietaryOptions.filter((option) => option !== item));
      } else if (checkedDietaryOptions.length < maxCheckedDietaryOptions) {
        // If it's not checked and the limit is not reached, add it to the array
        setCheckedDietaryOptions([...checkedDietaryOptions, item]);
      }
    }
  };

  return (
    <div className="easy-order-menu-container">
      <h2 className="easy-order-menu-text"> Please Choose Up to 3 Dietary Options</h2>
      <ul className="courses-list-el">
        {dietaryOptions.map((item) => (
          <li key={item.id}>
            <input
              className="courses-items"
              type="checkbox"
              value={item.name}
              checked={checkedDietaryOptions.includes(item.name)}
              onChange={() => handleCheckboxDietaryChange(item.name)}
              // Disable checkboxes if "No Dietary Restrictions" is selected
              disabled={item !== 'No Dietary Restrictions' && checkedDietaryOptions.includes('No Dietary Restrictions')}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
