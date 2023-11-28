import { useEffect, useState } from "react";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import { useEasyOrderStore } from "../../../stateStore/easyOrderStore";
import easyOrderDietaryOptionsArray from "../../../assets/dataArrays/Easy-Order-Dietary-Options-Array";
import "../../../css/easyOrder.css";

const EasyOrderDietary = () => {
	const [checkedDietaryOptions, setCheckedDietaryOptions] = useState([]);
	const dietary = useEasyOrderStore((state) => state.dietary);
	const { setDietary } = useEasyOrderStoreActions();
	const maxCheckedOptions = 3;
	const isNoDietaryRestrictionsSelected = checkedDietaryOptions.includes("No Dietary Restrictions");
	useEffect(() => {
		setDietary(checkedDietaryOptions);
	}, [checkedDietaryOptions]);

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
					setCheckedDietaryOptions([item]);
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
				<ul className='easy-order-list-two-col'>
					{easyOrderDietaryOptionsArray.map((item) => (
						<li key={item.id}>
							<input
								type='checkbox'
								key={item.id}
								value={item.name}
								checked={checkedDietaryOptions.includes(item.name)}
								onChange={() => handleCheckbox(item.name)}
								disabled={
									(item.name !== "No Dietary Restrictions" && isNoDietaryRestrictionsSelected) ||
									(checkedDietaryOptions.length === maxCheckedOptions &&
										!isNoDietaryRestrictionsSelected &&
										!checkedDietaryOptions.includes(item.name))
								}
							/>
							{item.name}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default EasyOrderDietary;
