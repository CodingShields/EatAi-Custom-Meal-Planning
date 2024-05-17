import React, { useState, useEffect } from "react";
import BeverageOptionsArray from "../../../../assets/dataArrays/Beverage-Options-Array";
import { useEasyOrderRenderStore } from "../../../stateStore/RenderStore";
import { useEasyOrderStoreActions } from "../../../../stateStore/easyOrderStore";

export default function EasyOrderBeverage() {
	const [checkedBeverage, setCheckedBeverage] = useState("");
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const { setBeverage } = useEasyOrderStoreActions();
	const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);

	function handleChange(item) {
		setIsButtonDisabled(true);
		if (checkedBeverage.includes(item)) {
			// Item is already checked, so remove it
			setCheckedBeverage(checkedBeverage.filter((checkedItem) => checkedItem !== item));
		} else {
			// Item is not checked, so add it
			setCheckedBeverage([...checkedBeverage, item]);
		}
	}

	useEffect(() => {
		const savedCheckedItem = localStorage.getItem("selectedBeverage");
		if (savedCheckedItem) {
			setCheckedBeverage(savedCheckedItem);
			setIsButtonDisabled(checkedBeverage.length === 0);
		}
	}, []);

	const handleClick = () => {
		increaseStep();
		setBeverage(checkedBeverage);
		setIsButtonDisabled(false);
		localStorage.setItem("selectedBeverage", checkedBeverage);
	};

	return (
		<>
			<h1>Beverage Type</h1>
			<ul className='easy-order-list'>
				{BeverageOptionsArray.map((item) => (
					<li key={item.id}>
						<input
							className='easy-order-items-list'
							type='radio'
							value={item.name}
							checked={checkedBeverage.includes(item.name)}
							onChange={() => handleChange(item.name)} // Pass the name as an argument
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
}
