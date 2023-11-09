import React from "react";
import FlavorTypeArrayEasyOrder from "../../../assets/dataArrays/Flavor-Type-Array-Easy-Order";
import { useChefSurpriseStoreActions } from "../../../stateStore/ChefSurpriseStore";
import { useChefSurpriseStore } from "../../../stateStore/ChefSurpriseStore";
import "../../../css/chefSurprise.css";

const ChefSurpriseFlavor = () => {
	const { flavor, setFlavor } = useChefSurpriseStoreActions();
	const { setFlavorDetails } = useChefSurpriseStoreActions();
	const { flavorDetails } = useChefSurpriseStore();

	function handleFlavorChange(event) {
		const selectedValue = event.target.value;
		setFlavor("selected", selectedValue);
		const flavorDetail = FlavorTypeArrayEasyOrder.find((item) => item.name === selectedValue);
		if (flavorDetail) {
			setFlavorDetails(flavorDetail.details);
		} else {
			setFlavorDetails("");
		}
	}
	return (
		<>
			<div className='chef-surprise-menu-items-container'>
				<h2 className='chef-surprise-menu-item-text'>Flavor:</h2>
				<select onChange={handleFlavorChange} value={flavor} className='chef-surprise-drop-down-text'>
					{FlavorTypeArrayEasyOrder.map((item) => (
						<option value={item.name} key={item.id}>
							{item.name}
						</option>
					))}
				</select>
			</div>
			<div className='chef-surprise-menu-items-container'>
				<h2 className='chef-surprise-menu-item-text'>Flavor Details:</h2>
				<h3 className='easy-order-flavor-details-text'>
					{flavorDetails ? flavorDetails : "Flavor Details Will Show Here"}
				</h3>
			</div>
		</>
	);
};

export default ChefSurpriseFlavor;
