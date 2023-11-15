import React, { useEffect, useState } from "react";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import CulturalHolidayArray from "../../../assets/dataArrays/Cultural-Holiday-Array";
import "../../../css/easyOrder.css";

const EasyOrderCulturalOptions = () => {
	const { setCulture } = useEasyOrderStoreActions();
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const increaseStep = useRenderStepStore((state) => state.increaseStep);
	const [isChecked, setIsChecked] = useState(false);
	const [checkedItem, setCheckedItem] = useState("");

	const handleChange = (itemName) => {
		setIsChecked(itemName);
		setCheckedItem(itemName);
		setIsButtonDisabled(true);
		console.log(itemName);
	};

	const handleClick = () => {
		setCulture(checkedItem);
		increaseStep();
		setIsButtonDisabled(false);
		localStorage.setItem("selectedCulture", checkedItem);
	};
	useEffect(() => {
		// Check if there's a selected option in local storage
		const savedCheckedItem = localStorage.getItem("selectedCulture");
		if (savedCheckedItem) {
			setCheckedItem(savedCheckedItem);
			setIsButtonDisabled(true);
		}
	}, []);

	return (
		<>
			<div className='easy-order-menu-title-container'>
				<h1>Is This For A Cultural Holiday?</h1>
			</div>
			<ul className='easy-order-list-big'>
				{CulturalHolidayArray.map((item) => (
					<li key={item.id}>
						<label>
							<input
								type='radio'
								value={item.name}
								checked={checkedItem === item.name} // This controls the checked state
								onChange={() => handleChange(item.name)} // Handle changes
							/>
							{item.name}
						</label>
					</li>
				))}
			</ul>
			{isButtonDisabled ? (
				<button className='easy-order-btn' onClick={handleClick}>
					Make Selection
				</button>
			) : (
				""
			)}
		</>
	);
};
export default EasyOrderCulturalOptions;
