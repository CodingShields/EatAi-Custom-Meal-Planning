import React from "react"
import EasyOrderMakeSelectionButton from "./Easy-Order-Comps/Easy-Order-Make-Selection-btn";
import HowToCook from "../../../assets/dataArrays/How-To-Cook-Array";
export default function EasyOrderHowToCook() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [checkedHowToCook, setCheckedHowToCook] = useState([])
    
     function handleCheckboxChange(item) {
    if (checkedHowToCook.includes(item)) {
      // Item is already checked, so remove it
      setCheckedHowToCook(checkedHowToCook.filter((checkedHowToCook) => checkedHowToCook !== item));
    } else {
      // Item is not checked, so add it
      setCheckedHowToCook([...checkedHowToCook, item]);
    }
  }

    


    return (
        <>
            <h1>How would you like to cook?</h1>
            {HowToCook.map((item) => (
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