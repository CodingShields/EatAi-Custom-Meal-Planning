import { useState, useEffect } from "react";
import FlavorTypeArrayEasyOrder from "../../../assets/dataArrays/Flavor-Type-Array-Easy-Order";
import { useChefSurpriseStoreActions } from "../../../stateStore/ChefSurpriseStore";
import { useChefSurpriseStore } from "../../../stateStore/ChefSurpriseStore";
import "../../../css/chefSurprise.css";

const ChefSurpriseFlavor = () => {
	const { flavorDetails } = useChefSurpriseStore((state) => state);
	const { setFlavor } = useChefSurpriseStoreActions((actions) => actions);
	const { setFlavorDetails } = useChefSurpriseStoreActions((actions) => actions);
	const [selectedFlavor, setSelectedFlavor] = useState("");

	useEffect(() => {
		setSelectedFlavor("");
	}, []);

	function handleFlavorChange(event) {
		const selectedValue = event.target.value;
		setSelectedFlavor(selectedValue);
		setFlavor(selectedValue);
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
				<select onChange={handleFlavorChange} value={selectedFlavor} className='chef-surprise-drop-down-text'>
					{FlavorTypeArrayEasyOrder.map((item) => (
						<option value={item.name} key={item.id}>
							{item.name}
						</option>
					))}
				</select>
			</div>
			<div className='chef-surprise-menu-items-container'>
				<h2 className='chef-surprise-menu-item-text'>Flavor Details:</h2>
				<h3 className='chef-surprise-flavor-details-text'>
					{flavorDetails ? flavorDetails : "Flavor Details Will Show Here"}
				</h3>
			</div>
		</>
	);
};

export default ChefSurpriseFlavor;
