import React, { useState, useEffect } from "react";
import EventsArray from "../../../assets/dataArrays/Events-Array";
import EasyOrderMakeSelectionButton from "./Easy-Order-Comps/Easy-Order-Make-Selection-btn";
export default function EasyOrderEvents() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [checked, setChecked] = useState([])
    const maxChecked = 1;

    const handleCheckboxChange = (item) => {
    if (item === "This is not for a event.") {
      if (checked.includes(item)) {
        setChecked([]);
      } else {
        setChecked([item]);
      }
    } else {
      const isChecked = checked.includes(item);
      if (isChecked) {
        setChecked(checked.filter((option) => option !== item));
      } else if (checked.length < maxChecked) {
        setChecked([...checked, item]);
      if (checked.includes("This is not for a event.")) {
          setChecked([]);
        }
      }
    }
  };
  
  useEffect(() => {
    setIsButtonDisabled(checked.length === 0);
  }, [checked])


    return (
      <>
            <h2 className="easy-order-menu-text">Is this for a Special Event?</h2>
        <ul
          className="courses-list-el"
          style={{
            fontSize:"22px"
          }}
        >
        
        {EventsArray.map((item) => (
          <li key={item.id}>
            <label>
            <input
              className="easy-order-items-list"
              type="checkbox"
              value={item.name}
              checked={checked.includes(item.name)}
              onChange={() => handleCheckboxChange(item.name)}
              // Disable checkboxes if "No Dietary Restrictions" is selected
              disabled={item === "This is not for a event." && checked.includes("This is not for a event.")}
            />
              {item.name}
              </label>
          </li>
        ))}
        </ul>
      {!isButtonDisabled ? <EasyOrderMakeSelectionButton /> : ""}

        </>



    )
}