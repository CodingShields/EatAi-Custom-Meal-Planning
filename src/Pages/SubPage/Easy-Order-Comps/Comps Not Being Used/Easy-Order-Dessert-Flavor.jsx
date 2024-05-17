import React, { useState, useEffect } from "react";
import DessertFlavor from "../../../../assets/dataArrays/Dessert-Flavor-Array";
import { useRenderStepStore } from "../../../../stateStore/RenderStepStore";
import { useEasyOrderStoreActions } from "../../../../stateStore/easyOrderStore";

const EasyOrderDessertFlavor = () => {
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const { setDessert } = useEasyOrderStoreActions();
	const [checkedDessert, setCheckedDessert] = useState("");
	const increaseStep = useRenderStepStore((state) => state.increaseStep);

	function handleCheckbox(item) {
		setIsButtonDisabled(true);
		if (checkedDessert.includes(item)) {
			// Item is already checked, so remove it
			setCheckedDessert(checkedDessert.filter((checkedDessert) => checkedDessert !== item));
		} else {
			// Item is not checked, so add it
			setCheckedDessert([...checkedDessert, item]);
		}
	}

	const handleClick = () => {
		increaseStep();
		setDessert(checkedDessert);
		setIsButtonDisabled(false);
		localStorage.setItem("selectedDessertFlavor", checkedDessert);
	};

	useEffect(() => {
		const savedCheckedItem = localStorage.getItem("selectedDessertFlavor");
		if (savedCheckedItem) {
			setCheckedDessert(savedCheckedItem);
			setIsButtonDisabled(checkedDessert.length === 0);
		}
	}, []);
	return (
		<>
			<h1>Dessert Flavor</h1>
			<ul className='easy-order-list'>
				{DessertFlavor.map((item) => (
					<li key={item.id}>
						<input
							type='radio'
							value={item.name}
							checked={checkedDessert.includes(item.name)}
							onChange={() => handleCheckbox(item.name)}
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
export default EasyOrderDessertFlavor;
