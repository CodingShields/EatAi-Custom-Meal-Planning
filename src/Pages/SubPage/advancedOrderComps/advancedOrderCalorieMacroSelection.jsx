import React, { useState, useEffect } from "react";
import { useAdvancedOrderStoreActions } from "../../../stateStore/AdvancedOrderStore.js";
import { useAdvancedOrderStore } from "../../../stateStore/AdvancedOrderStore.js";
import ConfirmSelectionButton from "./confirmSelectionStepButton.jsx";

const AdvancedOrderCalorieMacroSelection = () => {
	const { setMacroCalorieSelection } = useAdvancedOrderStoreActions((actions) => actions);
	const { macroCalorieSelection } = useAdvancedOrderStore((state) => state);
	const [error, setError] = useState(false);

	console.log(macroCalorieSelection);
	const handleMacroCalorieSelection = (value) => {
		if (value === "Choose One") {
			setError(true);
			return;
		} else {
			setError(false);
			setMacroCalorieSelection(value);
		}
	};
	return (
		<div className='advanced-order-comp-container'>
			<p>Are we setting up with Macros or Calories?</p>
			<select
				type='text'
				value={macroCalorieSelection}
				onChange={(e) => handleMacroCalorieSelection(e.target.value)}
				className='advanced-order-macros-select'
			>
				<option value={"Choose One"} className='advanced-order-macros-select'>
					Choose One
				</option>
				<option value={"macros"} className='advanced-order-macros-select'>
					Macros
				</option>
				<option value={"calories"} className='advanced-order-macros-select'>
					Calories
				</option>
			</select>
			{macroCalorieSelection ? <ConfirmSelectionButton /> : null}
		</div>
	);
};

export default AdvancedOrderCalorieMacroSelection;
