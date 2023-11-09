import React from "react";
import { useChefSurpriseStoreActions } from "../../../stateStore/ChefSurpriseStore";
import { useChefSurpriseStore } from "../../../stateStore/ChefSurpriseStore";
import "../../../css/chefSurprise.css";
const ChefSurpriseHeadCount = () => {
	const { setHeadCount } = useChefSurpriseStoreActions();
	const { headCount } = useChefSurpriseStore();

	const handleHeadCount = (value) => {
		console.log(value);
		setHeadCount(value);
	};

	return (
		<div className='chef-surprise-menu-items-container'>
			<h2 className='chef-surprise-menu-item-text'>HeadCount:</h2>
			<div className='easy-order-headcount-container'>
				<h2 className='easy-order-headcount-text '>{headCount}</h2>
				<input
					className='easy-oder-headcount-slider'
					type='range'
					id='volume'
					name='volume'
					min='1'
					max='5'
					step='1'
					value={headCount}
					onChange={(e) => handleHeadCount(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default ChefSurpriseHeadCount;
