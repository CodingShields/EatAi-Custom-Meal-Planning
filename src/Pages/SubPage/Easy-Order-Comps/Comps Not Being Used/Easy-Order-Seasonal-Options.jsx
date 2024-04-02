import React, { useState, useEffect } from "react";
import SeasonalArray from "../../../../assets/dataArrays/Seasonal-Options-Array";
import { useRenderStepStore } from "../../../../stateStore/RenderStepStore";
import { useEasyOrderStoreActions } from "../../../../stateStore/easyOrderStore";
import "../../../css/easyOrder.css";

const EasyOrderSeasonalOptions = () => {
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [checkedSeasonal, setCheckedSeasonal] = useState([]);
	const { setSeasonal } = useEasyOrderStoreActions();
	const increaseStep = useRenderStepStore((state) => state.increaseStep);

	const maxCheckedSeasonalOptions = 1;

	const handleCheckboxChange = (item) => {
		setIsButtonDisabled(true);
		if (item === "No Preference") {
			if (checkedSeasonal.includes(item)) {
				setCheckedSeasonal([]);
			} else {
				setCheckedSeasonal([item]);
			}
		} else {
			const isChecked = checkedSeasonal.includes(item);

			if (isChecked) {
				setCheckedSeasonal(checkedSeasonal.filter((option) => option !== item));
			} else if (checkedSeasonal.length < maxCheckedSeasonalOptions) {
				setCheckedSeasonal([...checkedSeasonal, item]);

				if (checkedSeasonal.includes("No Preference")) {
					setCheckedSeasonal([]);
				}
			}
		}
	};
	const handleClick = () => {
		setSeasonal(checkedSeasonal);
		increaseStep();
		setIsButtonDisabled(false);
		localStorage.setItem("selectedSeasonal", checkedSeasonal);
	};
	useEffect(() => {
		// Check if there's a selected option in local storage
		const savedCheckedItem = localStorage.getItem("selectedSeasonal");
		if (savedCheckedItem) {
			setCheckedSeasonal(savedCheckedItem);
			setIsButtonDisabled(true);
		}
	}, []);

	return (
		<>
			<h1>Seasonal Options</h1>
			<ul className='courses-list-el'>
				{SeasonalArray.map((item) => (
					<li className='easy-order-list' key={item.id}>
						<input
							type='radio'
							value={item.name}
							checked={checkedSeasonal.includes(item.name)}
							onChange={() => handleCheckboxChange(item.name)}
							disabled={item === "No Preference" && checkedSeasonal.includes("No Preference")}
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
export default EasyOrderSeasonalOptions;
