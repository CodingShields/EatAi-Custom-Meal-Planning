import React, { useState, useEffect } from "react";
import DietaryOptionsArray from "../../assets/Dietary-Options-Array";

export default function EasyOrderDietary({
  checkedDietaryOptions,
  setCheckedDietaryOptions,
  setDietarySelectionConfirmed
})
{

  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const maxCheckedDietaryOptions = 3;

  const handleCheckboxDietaryChange = (item) => {
    if (item === 'No Dietary Restrictions') {
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
        setCheckedDietaryOptions(checkedDietaryOptions.filter((option) => option !== item));
      } else if (checkedDietaryOptions.length < maxCheckedDietaryOptions) {
        // If it's not checked and the limit is not reached, add it to the array
        setCheckedDietaryOptions([...checkedDietaryOptions, item]);

        // Unselect "No Dietary Restrictions" if it was selected
        if (checkedDietaryOptions.includes('No Dietary Restrictions')) {
          setCheckedDietaryOptions([]);
        }
      }
    }
  };

  function handleDietarySelectionChild() {
        setDietarySelectionConfirmed()
        console.log("clicked");
        
    }


  useEffect(() => {
    setIsButtonDisabled(checkedDietaryOptions.length === 0);
  }, [checkedDietaryOptions])


  return (
    <div
      className="easy-order-menu-container"
      stlye={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
            
          }}>
      <h2 className="easy-order-menu-text"> Please Choose Up to 3 Dietary Options</h2>
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
              disabled={item === 'No Dietary Restrictions' && checkedDietaryOptions.includes('No Dietary Restrictions')}
            />
            {item.name}
          </li>
        ))}
      </ul>
      <button
                className="course-make-selection-btn"
                disabled={isButtonDisabled}
                onClick={handleDietarySelectionChild}
                >Make Selection</button>
    </div>
  );
}
