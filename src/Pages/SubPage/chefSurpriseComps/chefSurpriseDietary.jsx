import React from "react";
import DietaryOptionsArray from "../../../assets/dataArrays/Dietary-Options-Array";
import { useChefSurpriseStoreActions } from "../../../stateStore/ChefSurpriseStore";
import "../../../css/chefSurprise.css";

const ChefSurpriseDietary = () => {
	const { dietaryDetails, setDietaryDetails } = useChefSurpriseStoreActions();

	function handleDietaryDetails(event) {
		const selectedValue = event.target.value;
		setDietaryDetails(selectedValue);
	}
	return (
		<div className='chef-surprise-menu-items-container'>
			<h2 className='chef-surprise-menu-item-text'>Dietary Request:</h2>
			<select onChange={handleDietaryDetails} value={dietaryDetails} className='chef-surprise-drop-down-text'>
				{DietaryOptionsArray.map((item) => (
					<option value={item.name} key={item.id}>
						{item.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default ChefSurpriseDietary;
