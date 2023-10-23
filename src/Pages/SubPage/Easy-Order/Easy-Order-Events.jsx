import React, { useState, useEffect } from "react";
import EventsArray from "../../../assets/dataArrays/Events-Array";
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore";
import { useEasyOrderStore, useEasyOrderStoreActions } from "../../../state-store/easyOrderStore";

  const  EasyOrderEvents = () =>{
    
      const [isButtonDisabled, setIsButtonDisabled] = useState(false)
      const [checked, setChecked] = useState([])
      const maxChecked = 1;
      const { setEvent } = useEasyOrderStoreActions((state) =>  ({ event: state.event }));
      const { event } = useEasyOrderStore((state) =>  ({ event: state.event }));
      const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);
  
    
function handleClick(checked) {
  // Add a console.log here to check the value of 'checked' before setting it
  console.log("Before setting event:", checked);

  setEvent(checked, (updatedEvent) => {
    // This callback function will receive the updated 'event' value                                                                                                
    console.log("After setting event:", updatedEvent);

    // You can use the updatedEvent value here or set it to another variable.
  });

  // This console.log can help you check the state after setting it
  console.log("Event in state:", event);

  // Any additional debugging statements you need
  console.log(checked);
}

   
    
  const handleCheckboxChange = (item) => {
    if (item === "This is not for a event.") {
      if (checked.includes(item)) {
        // Deselect the "This is not for a event." option
        setChecked([]);
      } else {
        // Select the "This is not for a event." option and deselect others
        setChecked([item]);
      }
    } else {
      const isChecked = checked.includes(item);
      if (isChecked) {
        // Deselect the item if it was checked
        setChecked(checked.filter((option) => option !== item));
      } else if (checked.length < maxChecked) {
        // Select the item if the maxChecked limit is not reached
        setChecked([...checked, item]);
        if (checked.includes("This is not for a event.")) {
          // Deselect the "This is not for a event." option if other options are selected
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
              disabled={item === "This is not for a event." && checked.includes("This is not for a event.")}
            />
              {item.name}
              </label>
          </li>
        ))}
        </ul>
      <button className="easy-order-make-selection-btn"
          value={checked}    
          onClick={(e) => { handleClick(e.target.value) }}
          disabled={isButtonDisabled}
        >
            Make Selection
        </button>

        </>
    )
}
export default EasyOrderEvents