import React, { useState, useEffect} from "react";
import CookTimes from "../../../assets/dataArrays/Cook-Times-Array";
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore";
import { useEasyOrderStoreActions } from "../../../state-store/easyOrderStore";


const EasyOrderCookTime = () => {    
    const { setCookTime } = useEasyOrderStoreActions()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);
    const [checkedItem, setCheckedItem] = useState("")
    
    const handleChange = (item) => {
      setIsButtonDisabled(true);
      setCheckedItem(item);
  }
    
    const handleClick = () => {
      setCookTime(checkedItem);
      increaseStep();
      setIsButtonDisabled(false);
      localStorage.setItem("selectedCookTime", checkedItem);
  }
      useEffect(() => {
    // Check if there's a selected option in local storage
    const savedCheckedItem = localStorage.getItem("selectedCookTime");
    if (savedCheckedItem) {
      setCheckedItem(savedCheckedItem);
      setIsButtonDisabled(true);
    }
  }, []);


    return (
      <>
        <div className="easy-order-menu-title-container">
          <h1>Cook Time</h1>
        </div>
        <div className="easy-order-options-container">
            <ul className="easy-order-list">
                        {CookTimes.map((item) => (
                            <li key={item.id}>
                                <label>
                                  <input
                                    type="radio"
                                    value={item.name}
                                    checked={checkedItem.includes(item.name)} // This controls the checked state
                                    onChange={() => handleChange(item.name)} // Handle changes
                                  />
                                  {item.name}
                                </label>
                            </li>
                        ))}
          </ul>
        </div>
        {isButtonDisabled ? <button className="easy-order-make-selection-btn" onClick={handleClick}
      >Make Selection
    </button>:""}
  </>
    )
}
export default EasyOrderCookTime;