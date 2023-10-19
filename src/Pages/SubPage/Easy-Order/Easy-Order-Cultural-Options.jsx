import React from "react";
import CulturalHolidayArray from "../../../assets/dataArrays/Cultural-Holiday-Array";
import EasyOrderMakeSelectionButton from "./Easy-Order-Comps/Easy-Order-Make-Selection-btn";

export default function EasyOrderCulturalOptions() {  
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [checkedCulturalOptions, setCheckedCulturalOptions] = useState("")

 function handleCheckbox(item) {
    if (checkedCulturalOptions.includes(item)) {
      // Item is already checked, so remove it
      setCheckedCulturalOptions(checkedCulturalOptions.filter((checkedCulturalOptions) => checkedCulturalOptions !== item));
    } else {
      // Item is not checked, so add it
      setCheckedCulturalOptions([...checkedCulturalOptions, item]);
    }
  }

    useEffect(() => {
    setIsButtonDisabled(checkedCulturalOptions.length === 0);
  }, [CulturalOptions])
    return (
        <>
            <h1>Dessert Flavor</h1>
            <ul className="courses-list-el">
                        {CulturalHolidayArray.map((item) => (
                            <li key={item.id}>
                                <input
                                    className="easy-order-items-list"
                                    type="checkbox"
                                    value={item.name}
                                    checked={checkedCulturalOptions.includes(item.name)}
                                    onChange={() => handleCheckbox(item.name)}
                                />
                                {item.name}
                            </li>
                        ))}
                </ul>
            {!isButtonDisabled ? <EasyOrderMakeSelectionButton /> : ""}
        </>
    )
}