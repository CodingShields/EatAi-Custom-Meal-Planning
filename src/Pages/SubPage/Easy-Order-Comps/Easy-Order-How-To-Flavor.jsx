import React, { useState, useEffect } from "react";
import FlavorTypeArray from "../../../assets/dataArrays/Flavor-Type-Array";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import "../../../css/easyOrder.css";

const HowToFlavor = () => {
	const { setFlavor } = useEasyOrderStoreActions();
	const [selectedOption, setSelectedOption] = useState("");
	const [flavorDetails, setFlavorDetails] = useState("");

	const handleSelectChange = (e) => {
		const selectedValue = e.target.value;
		setSelectedOption(selectedValue);
		setFlavor(selectedValue);
		const flavorDetails = FlavorTypeArray.find((item) => item.name === selectedValue);
		if (flavorDetails) {
			setFlavorDetails(flavorDetails.details);
		} else {
			setFlavorDetails("");
		}
	};
	return (
		<>
			<h2 className='easy-order-menu-text'>How would you like to flavor your food meal?</h2>
			<select className='easy-order-drop-down' onChange={handleSelectChange} value={selectedOption}>
				{FlavorTypeArray.map((item) => {
					return (
						<option key={item.id} value={item.name}>
							{item.name}
						</option>
					);
				})}
			</select>
			<div className='easy-order-menu-title-container'>
				<h2 className='easy-order-menu-text'> Flavor Description </h2>
				<p className='easy-order-menu-text'>{flavorDetails}</p>
			</div>
		</>
	);
};

export default HowToFlavor;
