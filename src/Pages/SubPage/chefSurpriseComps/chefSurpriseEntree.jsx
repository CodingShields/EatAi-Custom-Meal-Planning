import React from "react";
import MealTypeArray from "../../../assets/dataArrays/Meal-Type-Array";
import { useChefSurpriseStoreActions } from "../../../stateStore/ChefSurpriseStore";
import "../../../css/chefSurprise.css";

const ChefSurpriseEntree = () => {
	const { entree, setEntree } = useChefSurpriseStoreActions();

	function handleEntree(event) {
		const selectedValue = event.target.value;
		setEntree(selectedValue);
	}

	return (
		<div className='chef-surprise-menu-items-container'>
			<h2 className='chef-surprise-menu-item-text'>Entree:</h2>
			<select onChange={handleEntree} value={entree} className='chef-surprise-drop-down-text'>
				{MealTypeArray.map((item) => (
					<option value={item.name} key={item.id}>
						{item.name}
					</option>
				))}
			</select>
		</div>
	);
};
export default ChefSurpriseEntree;
