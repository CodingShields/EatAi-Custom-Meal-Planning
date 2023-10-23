import React, { useState} from "react";
import EventsArray from "../../../assets/dataArrays/Events-Array";
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore";
import { useEasyOrderStoreActions } from "../../../state-store/easyOrderStore";

  const  EasyOrderEvents = () =>{
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const { setEvent } = useEasyOrderStoreActions()
    const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);
    const [isChecked, setIsChecked] = useState(false)
    const [checkedItem, setCheckedItem] = useState("")
    
    const handleChange = (itemName) => {
      setIsChecked(itemName)
      setCheckedItem(itemName)
      setIsButtonDisabled(true)
      console.log(itemName);
  };
    
    const handleClick = () => {
    setEvent(checkedItem);
      increaseStep();
      setIsButtonDisabled(false);
  }


   return (
    <>
      <h2 className="easy-order-menu-text">Is this for a Special Event?</h2>
      <ul className="easy-order-list">
        {EventsArray.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="radio"
                value={item.name}
                checked={isChecked === item.name} // This controls the checked state
                onChange={() => handleChange(item.name)} // Handle changes
              />
              {item.name}
            </label>
          </li>
        ))}
      </ul>
      {isButtonDisabled ? <button className="easy-order-make-selection-btn" onClick={handleClick}
      >Make Selection
    </button>:""}
    </>
  );
};

export default EasyOrderEvents;