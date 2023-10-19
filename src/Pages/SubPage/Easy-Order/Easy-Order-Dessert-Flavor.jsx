import React from "react";
import DessertFlavor from "../../../assets/dataArrays/Dessert-Flavor-Array";
import EasyOrderMakeSelectionButton from "./Easy-Order-Comps/Easy-Order-Make-Selection-btn";

export default function EasyOrderDessertFlavor() {  
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [checkedDessert, setCheckedDessert] = useState("")

 function handleCheckbox(item) {
    if (checkedDessert.includes(item)) {
      // Item is already checked, so remove it
      setCheckedDessert(checkedDessert.filter((checkedDessert) => checkedDessert !== item));
    } else {
      // Item is not checked, so add it
      setCheckedDessert([...checkedDessert, item]);
    }
  }

    useEffect(() => {
    setIsButtonDisabled(checkedDessert.length === 0);
  }, [checkedDessert])
    return (
        <>
            <h1>Dessert Flavor</h1>
            <ul className="courses-list-el">
                        {DessertFlavor.map((item) => (
                            <li key={item.id}>
                                <input
                                    className="easy-order-items-list"
                                    type="checkbox"
                                    value={item.name}
                                    checked={checkedDessert.includes(item.name)}
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