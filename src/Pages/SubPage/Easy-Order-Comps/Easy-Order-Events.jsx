import React, { useEffect, useState } from "react";
import EventsArray from "../../../assets/dataArrays/Events-Array";
import { useEasyOrderStore } from "../../../stateStore/easyOrderStore";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";

const EasyOrderEvents = () => {
	const { setEvent } = useEasyOrderStoreActions();
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		checkedItem: "",
		isChecked: false,

	});

	const handleChange = (e) => {
		const itemId = e;
		const itemSearch = EventsArray.filter((item) => item.id === itemId)
		const itemName = itemSearch[0].name
		if (itemName != null || itemName != undefined) {
			setState({
				...state,
				checkedItem: itemName,
				isChecked: true,
			});
			setEvent(itemName);
			
		}
	};
	return (
		<>
			<div className='easy-order-menu-title-container'>
				<h2 className='easy-order-menu-text'>Is this for a Event?</h2>
			</div>
			<ul className='easy-order-list-two-col'>
				{EventsArray.map((item) => (
					<li key={item.id}>
						<label>
							<input
								className='easy-order-radio-button'
								type='radio'
								value={item.id}
								disabled={state.isButtonDisabled ? true : false}
								checked={state.checkedItem === item.name} // This controls the checked state
								onChange={(e) => handleChange(e.target.value)} // Handle changes
							/>
							{item.name}
						</label>
					</li>
				))}
			</ul>
		</>
	);
};

export default EasyOrderEvents;
