import React, { useState, useEffect } from "react";
import EventsArray from "../../../assets/dataArrays/Events-Array";
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore";
import { useEasyOrderStore, useEasyOrderStoreActions } from "../../../state-store/easyOrderStore";

  const  EasyOrderEvents = () =>{
    
      // const [isButtonDisabled, setIsButtonDisabled] = useState(false)
      // const [checked, setChecked] = useState([])
      const { setEvent } = useEasyOrderStoreActions((state) =>  ({ event: state.event }));
      const { event } = useEasyOrderStore((state) =>  ({ event: state.event }));
      const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);
  

   
    
    const handleChange = ({ target }) => {
    setEvent(target.value);
  };
  
  // useEffect(() => {
  //   setIsButtonDisabled(checked.length === 0);
  // }, [checked])
    
   return (
    <>
      <h2 className="easy-order-menu-text">Is this for a Special Event?</h2>
      <ul className="courses-list-el" style={{ fontSize: "22px" }}>
        {EventsArray.map((item) => (
          <li key={item.id}>
            <label>
              <input
                className="easy-order-items-list"
                type="radio"
                value={item.name}
                checked={event === item.name} // This controls the checked state
                onChange={handleChange} // Handle changes
              />
              {item.name}
            </label>
          </li>
        ))}
      </ul>
      <button
        className="easy-order-make-selection-btn"
        onClick={increaseStep}
        // disabled={isButtonDisabled}
      >
        Make Selection
      </button>
    </>
  );
};

export default EasyOrderEvents;