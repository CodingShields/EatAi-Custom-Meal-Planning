import { useEffect, useState } from "react";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import DietaryOptionsArray from "../../../assets/dataArrays/Dietary-Options-Array";
import "../../../css/easyOrder.css";

const EasyOrderDietary = () => {
	const [checkedDietaryOptions, setCheckedDietaryOptions] = useState([]);
	const dietary = useRenderStepStore((state) => state.dietary);
	const { setDietary } = useEasyOrderStoreActions();
	const maxCheckedOptions = 3;

	const isNoDietaryRestrictionsSelected = checkedDietaryOptions.includes("No Dietary Restrictions");


	const handleCheckbox = (item) => {
		if (item === "No Dietary Restrictions") {
			if (isNoDietaryRestrictionsSelected) {
				setCheckedDietaryOptions([]);
			} else {
				setCheckedDietaryOptions([item]);
			}
		} else {
			const isChecked = checkedDietaryOptions.includes(item);
			if (isChecked) {
				setCheckedDietaryOptions(checkedDietaryOptions.filter((option) => option !== item));
			} else if (checkedDietaryOptions.length < maxCheckedOptions) {
				setCheckedDietaryOptions([...checkedDietaryOptions, item]);
				if (isNoDietaryRestrictionsSelected) {
					const updatedOptions = checkedDietaryOptions.filter((option) => option !== "No Dietary Restrictions");
					setCheckedDietaryOptions(updatedOptions);
				}
			}
		}
	};


	return (
		<>
			<div className='easy-order-menu-title-container'>
				<h2 className='easy-order-menu-text'>Please Choose Up to 3 Dietary Options</h2>
			</div>
			<div className='easy-order-list-big'>
				<select>
					{DietaryOptionsArray.map((item) => (
						<li>
							<option
								type='checkbox'
								key={item.id}
								value={item.name}
								isChecked={checkedDietaryOptions.includes(item.name)}
								onChange={() => handleCheckbox(item.name)}
								disabled={
									item === "No Dietary Restrictions" && checkedDietaryOptions.includes("No Dietary Restrictions")
								}
							/>
							{item.name}
						</li>
					))}
				</select>
			</div>
		</>
	);
};

export default EasyOrderDietary;
