import React from "react";
import SeasonalArray from "../../../assets/dataArrays/Seasonal-Options-Array";
import EasyOrderMakeSelectionButton from "./Easy-Order-Comps/Easy-Order-Make-Selection-btn";

export default function EasyOrderSeasonalOptions() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [checkedSeasonal, setCheckedSeasonal] = useState([])

    const maxCheckedSeasonalOptions = 1;

    const handleCheckboxChange = (item) => {
        if (item === "No Preference") {
        if (checkedSeasonal.includes(item)) {
            setCheckedSeasonal([]);
        } else {
            setCheckedSeasonal([item]);
        }
    } else {
    const isChecked = checkedSeasonal.includes(item);

    if (isChecked) {
        setCheckedSeasonal(
            checkedSeasonal.filter((option) => option !== item)
        );
    } else if (checkedSeasonal.length < maxCheckedSeasonalOptions) {
        setCheckedSeasonal([...checkedSeasonal, item]);

        if (checkedSeasonal.includes("No Preference")) {
            setCheckedSeasonal([]);
            }
        }
    }
};

    return (
        <>
            <h1>Seasonal Options</h1>
            <ul className="courses-list-el">
        {SeasonalArray.map((item) => (
            <li key={item.id}>
                <input
                        className="easy-order-items-list"
                        type="checkbox"
                        value={item.name}
                        checked={checkedSeasonal.includes(item.name)}
                        onChange={() => handleCheckboxChange(item.name)}
                        disabled={
                        item === "No Preference" &&
                        checkedSeasonal.includes("No Preference")
                    }
                />
            {item.name}
        </li>
        ))}
    </ul>
        {!isButtonDisabled ? <EasyOrderMakeSelectionButton /> : ""}
        </>
    )
} 