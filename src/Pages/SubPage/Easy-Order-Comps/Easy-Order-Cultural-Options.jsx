import React, { useEffect, useState } from "react";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import CulturalHolidayArray from "../../../assets/dataArrays/Cultural-Holiday-Array";
import "../../../css/easyOrder.css";

const EasyOrderCulturalOptions = () => {
	const { setCulture } = useEasyOrderStoreActions();
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		selectedOption: "",
	});

	const handleChange = (e) => {
		const findSelectedCulture = CulturalHolidayArray.find((item) => item.id === e);
		const cultureName = findSelectedCulture.name;
		setState({ selectedOption: cultureName });
		setCulture(cultureName);
	};

	return (
		<>
			<div className='easy-order-menu-title-container'>
				<h1 className='easy-order-menu-text'>Is This For A Cultural Holiday?</h1>
			</div>
			<ul className='easy-order-list-three-col'>
				{CulturalHolidayArray.map((item) => (
					<li key={item.id}>
						<label>
							<input
								type='radio'
								value={item.id}
								checked={state.selectedOption === item.name}
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
export default EasyOrderCulturalOptions;
