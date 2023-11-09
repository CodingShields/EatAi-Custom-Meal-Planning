import React, { useEffect, useState } from "react";
import EventsArray from "../../../assets/dataArrays/Events-Array";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import "../../../css/easyOrder.css";

const EasyOrderEvents = () => {
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const { setEvent } = useEasyOrderStoreActions();
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
		setEvent(checkedItem);
		increaseStep();
		setIsButtonDisabled(false);
		localStorage.setItem("selectedEvent", checkedItem);
	};
	useEffect(() => {
		// Check if there's a selected option in local storage
		const savedCheckedItem = localStorage.getItem("selectedEvent");
		if (savedCheckedItem) {
			setIsChecked(savedCheckedItem); // Set isChecked to the saved value
			setCheckedItem(savedCheckedItem);
			setIsButtonDisabled(true);
		}
	}, []);

	return (
		<>
			<div className='easy-order-menu-title-container'>
				<h2 className='easy-order-menu-text'>Is this for a Special Event?</h2>
			</div>
			<ul className='easy-order-list-big'>
				{EventsArray.map((item) => (
					<li key={item.id}>
						<label>
							<input
								type='radio'
								value={item.name}
								checked={isChecked === item.name} // This controls the checked state
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

export default EasyOrderEvents;
