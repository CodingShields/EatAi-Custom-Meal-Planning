import React, { useState, useEffect } from "react";
import HowToCook from "../../../../assets/dataArrays/How-To-Cook-Array";
import { useRenderStepStore } from "../../../../stateStore/RenderStepStore";
import { useEasyOrderStoreActions } from "../../../../stateStore/easyOrderStore";
import "../../../css/easyOrder.css";

const EasyOrderHowToCook = () => {
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [checkedHowToCook, setCheckedHowToCook] = useState([]);
	const { setHowToCook } = useEasyOrderStoreActions();
	const increaseStep = useRenderStepStore((state) => state.increaseStep);
	const maxCheckedOptions = 3;

	const handleCheckbox = (item) => {
		setIsButtonDisabled(true);
		if (item === "No Preference") {
			// If "No Dietary Restrictions" is selected, unselect it and enable other options
			if (checkedHowToCook.includes(item)) {
				setCheckedHowToCook([]);
			} else {
				setCheckedHowToCook([item]);
			}
		} else {
			// Check if it's checked
			const isChecked = checkedHowToCook.includes(item);

			if (isChecked) {
				// If it's checked, remove it from the array
				setCheckedHowToCook(checkedHowToCook.filter((option) => option !== item));
			} else if (checkedHowToCook.length < maxCheckedOptions) {
				// If it's not checked and the limit is not reached, add it to the array
				setCheckedHowToCook([...checkedHowToCook, item]);

				// Unselect "No Dietary Restrictions" if it was selected
				if (checkedHowToCook.includes("No Preference")) {
					setCheckedHowToCook([]);
				}
			}
		}
	};

	const handleClick = () => {
		setHowToCook(checkedHowToCook);
		increaseStep();
		setIsButtonDisabled(false);
		localStorage.setItem("selectedCook", JSON.stringify(checkedHowToCook));
	};

	useEffect(() => {
		// Check if there's a selected option in local storage
		const savedCheckedItem = localStorage.getItem("selectedCook");
		if (savedCheckedItem) {
			setCheckedHowToCook(JSON.parse(savedCheckedItem));
			setIsButtonDisabled(true);
		}
	}, []);

	return (
		<>
			<div className='easy-order-menu-title-container'>
				<h1>Please Select 3 Different Cooking Styles</h1>
			</div>
			<ul className='easy-order-list-big'>
				{HowToCook.map((item) => (
					<li key={item.id}>
						<input
							type='checkbox'
							value={item.name}
							checked={checkedHowToCook.includes(item.name)}
							onChange={() => handleCheckbox(item.name)}
							disabled={item.name === "No Preference" && checkedHowToCook.includes("No Preference")}
						/>
						{item.name}
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

export default EasyOrderHowToCook;
