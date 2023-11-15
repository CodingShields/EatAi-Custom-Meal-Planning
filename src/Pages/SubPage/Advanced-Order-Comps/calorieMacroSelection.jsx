import React, { useState, useEffect } from "react";
//global state
import { useAdvancedOrderStoreActions } from "../../../stateStore/AdvancedOrderStore.js";
import { useAdvancedOrderStore } from "../../../stateStore/AdvancedOrderStore.js";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore.js";
//components
import AdvancedOrderCalorieInput from "./calorieInput.jsx";
import AdvancedOrderMacroInput from "./macroInput.jsx";

//buttons
import ResetButton from "./startOverButton.jsx";
import PreviousButton from "./previousButton.jsx";
import ConfirmSelectionButton from "./confirmSelectionStepButton.jsx";
//css
import "../../../css/Advanced-Order-CSS/errorModal.css";
import "../../../css/Advanced-Order-CSS/calorieMacroSelection.css";

const AdvancedOrderCalorieMacroSelection = () => {
	const { setMacroCalorieSelection } = useAdvancedOrderStoreActions((actions) => actions);
	const { macroCalorieSelection } = useAdvancedOrderStore((state) => state);
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		renderBtn: false,
	});


	const handleMacroCalorieSelection = (value) => {
		console.log(value, "value");
		if (value === "Choose One") {
			setState({
				...state,
				error: true,
				errorMessage: "Please Choose either Macros or Calories",
				renderBtn: false,
			});
			setMacroCalorieSelection(value);
			setTimeout(() => {
				setState({ ...state, error: false, errorMessage: "" });
			}, 2000);
		} else if (value != "Choose One") {
			setState({ ...state, renderBtn: true });
			setMacroCalorieSelection(value);
		}
		console.log(value, "value");
	};
	console.log(macroCalorieSelection, "macroCalorieSelection");

	return (
		<div className='main-container'>
			<p
				style={{
					display: state.renderSelection ? "none" : "block",
				}}
			>
				Are we setting up with Macros or Calories?
			</p>
			{state.error ? <div className='error-container'>
					<p className='error-content'>{state.errorMessage}</p>
				</div> : null }
		
			<select
				style={{
					display: state.renderSelection ? "none" : "block",
				}}
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
			{macroCalorieSelection === "macros" && state.renderSelection ? <AdvancedOrderMacroInput /> : null}
			{macroCalorieSelection === "calories" && state.renderSelection ? <AdvancedOrderCalorieInput /> : null}
			<div className='advanced-order-btn-container'>
				<ResetButton />
				<PreviousButton />
				{state.renderBtn ? <ConfirmSelectionButton /> : null}
			</div>
		</div>
	);
};

export default AdvancedOrderCalorieMacroSelection;
