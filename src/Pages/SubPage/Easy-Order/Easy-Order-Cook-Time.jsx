import React from "react";
import EasyOrderMakeSelectionButton from "./Easy-Order-Comps/Easy-Order-Make-Selection-btn";
import CookTimes from "../../../assets/dataArrays/Cook-Times-Array";
export default function EasyOrderCookTime() {    
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [checkedCookTime, setCheckedCookTime] = useState([])
    const maxCheckedCookTimeOptions = 1;
    
    function handleCheckboxChange(item) {
    if (checkedCookTime.includes(item)) {
      // Item is already checked, so remove it
      setCheckedCourseOptions(checkedCookTime.filter((checkedCookTime) => checkedCookTime !== item));
    } else {
      // Item is not checked, so add it
      setCheckedCookTime([...checkedCookTime, item]);
    }
  }

    return (
        <>
            <h1>What is your preferred amount of time to cook?</h1>
            {CookTimes.map((item) => (
                <div key={item.id}>
                    <input
                        className="easy-order-items-list"
                        type="checkbox"
                        value={item.name}
                        checked={checkedCourseOptions.includes(item.name)}
                        onChange={() => handleCheckboxChange(item.name)}
                    />
                    {item.name}
                </div>
            ))}
            {!isButtonDisabled ? <EasyOrderMakeSelectionButton /> : ""}
        </>
    )
}