import React, { useEffect, useState } from "react";
//global state
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore.js";
import { useAdvancedOrderProfileStore } from "../../../stateStore/AdvancedOrderProfileStore.js";
//utilities
import renderTextWithNewLines from "../../../utilities/renderTextWithNewLines.jsx";
//help messages
import helpMessages from "../../../assets/helpMessages/helpMessages.jsx";
//css
import "../../../css/errorModal.css"
import "../../../css/Advanced-Order-CSS/stepOne.css";

const BuildWeight = () => {

	const preferredUnit = useAdvancedOrderProfileStore((state) => state.preferredUnit);
	const { setWeight } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setPreferredUnit } = useAdvancedOrderProfileStoreActions((actions) => actions);

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		preferredUnitSelection: "",
		weightLeft: 0,
		weightMiddle: 0,
		weightRight: 0,
		totalWeight: 0,
		disableConfirm: true,
	});

	useEffect(() => {
		initialize();
	}, []);

	const handleIncrementLeft = () => {
		const add = state.weightLeft + 1;
		const addTotal = state.totalWeight + 100;
		setState({
			...state,
			weightLeft: add,
			totalWeight: addTotal,
		});
	};

	const handleIncrementMiddle = () => {
		const add = state.weightMiddle + 1;
		const addTotal = state.totalWeight + 10;
		setState({
			...state,
			weightMiddle: add,
			totalWeight: addTotal,
		});
	};

	const handleIncrementRight = () => {
		const add = state.weightRight + 1;
		const addTotal = state.totalWeight + 1;
		setState({
			...state,
			weightRight: add,
			totalWeight: addTotal,
		});
	};

	const handleDecrementLeft = () => {
		const sub = state.weightLeft - 1;
		const subTotal = state.totalWeight - 100;
		if (state.weightLeft > 0) {
			setState({
				...state,
				weightLeft: sub,
				totalWeight: subTotal,
			});
		}
	};

	const handleDecrementMiddle = () => {
		const sub = state.weightMiddle - 1;
		const subTotal = state.totalWeight - 10;
		if (state.weightMiddle > 0) {
			setState({
				...state,
				weightMiddle: sub,
				totalWeight: subTotal,
			});
		}
	};

	const handleDecrementRight = () => {
		const sub = state.weightRight - 1;
		const subTotal = state.totalWeight - 1;
		if (state.weightRight > 0) {
			setState({
				...state,
				weightRight: sub,
				totalWeight: subTotal,
			});
		}
	};

	const handleCloseModal = () => {
		setState({ ...state, error: false, errorMessage: "" });
	};

	const handleHelpClick = () => {
		const measureHelp = helpMessages[1].message;
		setState({ ...state, error: true, errorMessage: renderTextWithNewLines(measureHelp) });
	};

	const handleConfirm = () => {
		const weight = state.totalWeight;
		if (preferredUnit === "Choose One") {
			setState({ ...state, error: true, errorMessage: "Please choose a unit of measurement" });
		} else if (state.totalWeight === 0) {
			setState({ ...state, error: true, errorMessage: "Please enter your weight" });
		} else if (state.totalWeight < 1000 && state.preferredUnitSelection === "Metric" || state.preferredUnitSelection === "Imperial") {
			setState({ ...state, error: true, errorMessage: "Your Data has been saved. Click Next to input your Height" });
			setWeight(weight);
			setPreferredUnit(state.preferredUnitSelection);
		}
	};

	const handleUnitOnChange = (e) => {
		if (e === "Choose One") {
			setState({ ...state, error: true, errorMessage: "Please choose either Imperial or Metric" });
		} else {
			setState({ ...state, preferredUnitSelection: e});
		}
	};

	const initialize = () => {
		setState({
			...state,
			error: false,
			errorMessage: "",
			loading: false,
			preferredUnitSelection: "",
			weightLeft: 0,
			weightMiddle: 0,
			weightRight: 0,
			totalWeight: 0,
		});
	};

	return (
		<div className='advanced-order-comp-container'>
			<h2 className='comp-title'>Let's get started with some basic information</h2>
			{state.error ? (
				<div className='start-error-container-modal'>
					<div className='start-error-content'>
						<button onClick={handleCloseModal} className='start-close-modal-btn'>
							Close X
						</button>
						<p>{state.errorMessage}</p>
					</div>
				</div>
			) : null}
			<h4 className='title'>What is your preference of measurement?</h4>
			<p className='help-title'>
				If you need help, Click
				<span onClick={handleHelpClick} className='here-link'>
					{" "}
					HERE
				</span>
			</p>
			<select
				className='preferred-unit-select-list'
				value={state.preferredUnitSelection}
				onChange={(e) => handleUnitOnChange(e.target.value)}
			>
				<option value={"Choose One"}>Choose One</option>
				<option value={"Metric"}>Metric</option>
				<option value={"Imperial"}>Imperial</option>
			</select>
			<h4 className='title'>What is your current weight?</h4>
			<div className='weight-container'>
				<div className='weight-input-button-container'>
					<button
						disabled={state.weightLeft === 9 ? true : false}
						onClick={handleIncrementLeft}
						className='weight-button-increment-left'
					>
						+
					</button>
					<button
						disabled={state.weightMiddle === 9 ? true : false}
						onClick={handleIncrementMiddle}
						className='weight-button-increment-middle'
					>
						+
					</button>
					<button
						disabled={state.weightRight === 9 ? true : false}
						onClick={handleIncrementRight}
						className='weight-button-increment-right'
					>
						+
					</button>
				</div>
				<div className='weight-input-container'>
					<div className='weight-input-left'>{state.weightLeft}</div>
					<div className='weight-input-middle'>{state.weightMiddle}</div>
					<div className='weight-input-right'>{state.weightRight}</div>
					<div
						style={{
							position: "sticky",
						}}
					></div>
				</div>
				<div className='weight-input-button-container'>
					<button
						disabled={state.weightLeft === 0 ? true : false}
						onClick={handleDecrementLeft}
						className='weight-button-decrement-left'
					>
						-
					</button>
					<button
						disabled={state.weightMiddle === 0 ? true : false}
						onClick={handleDecrementMiddle}
						className='weight-button-decrement-middle'
					>
						-
					</button>
					<button
						disabled={state.weightRight === 0 ? true : false}
						onClick={handleDecrementRight}
						className='weight-button-decrement-right'
					>
						-
					</button>
				</div>
			</div>

			<button className='adv-order-btn' onClick={handleConfirm}>
				Confirm Weight
			</button>
		</div>
	);
};

export default BuildWeight;
