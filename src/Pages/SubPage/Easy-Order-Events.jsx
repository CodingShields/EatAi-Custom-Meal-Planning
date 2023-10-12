import React, { useState, useEffect } from "react";
import EventsArray from "../../assets/Events-Array";
// import CulturalHolidays from "../../assets/Cultural-Holiday-Array";

export default function EasyOrderEvents({
    checkedEventOptions,
    setCheckedEventOptions,
    setEventSelectionConfirmed
}) {

    const [isButtonDisabled, setIsButtonDisabled] = useState(false)


    const maxCheckedEventOptions = 1;

    const handleCheckboxEventChange = (item) => {
    if (item === "This is not for a event.") {
      // If "No Dietary Restrictions" is selected, unselect it and enable other options
      if (checkedEventOptions.includes(item)) {
        setCheckedEventOptions([]);
      } else {
        setCheckedEventOptions([item]);
      }
    } else {
      // Check if it's checked
      const isChecked = checkedEventOptions.includes(item);

      if (isChecked) {
        // If it's checked, remove it from the array
        setCheckedEventOptions(checkedEventOptions.filter((option) => option !== item));
      } else if (checkedEventOptions.length < maxCheckedEventOptions) {
        // If it's not checked and the limit is not reached, add it to the array
        setCheckedEventOptions([...checkedEventOptions, item]);

        // Unselect "No Dietary Restrictions" if it was selected
        if (checkedEventOptions.includes("This is not for a event.")) {
          setCheckedEventOptions([]);
        }
      }
    }
  };

  function handleEventSelectionChild() {
        setEventSelectionConfirmed()
        console.log("clicked");
        
  }
  
  useEffect(() => {
    setIsButtonDisabled(checkedEventOptions.length === 0);
  }, [checkedEventOptions])


    return (
      <div
        className="easy-order-menu-container"
        stlye={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
        width:"auto"
          }}
      >
            <h2 className="easy-order-menu-text">Is this for a Special Event?</h2>
        <ul
          className="courses-list-el"
          style={{
            fontSize:"20px"
          }}
        >
        
        {EventsArray.map((item) => (
          <li key={item.id}>
            <label>
            <input
              className="easy-order-items-list"
              type="checkbox"
              value={item.name}
              checked={checkedEventOptions.includes(item.name)}
              onChange={() => handleCheckboxEventChange(item.name)}
              // Disable checkboxes if "No Dietary Restrictions" is selected
              disabled={item === "This is not for a event." && checkedEventOptions.includes("This is not for a event.")}
            />
              {item.name}
              </label>
          </li>
        ))}
        </ul>
        <button
                className="course-make-selection-btn"
                disabled={isButtonDisabled}
                onClick={handleEventSelectionChild}
                >Make Selection</button>

        </div>



    )
}