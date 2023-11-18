import React, { useEffect, useState } from "react";
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore.js";
import { useAdvancedOrderProfileStore } from "../../../stateStore/AdvancedOrderProfileStore.js";
import renderTextWithNewLines from "../../../utilities/renderTextWithNewLines.jsx";
import { useRenderSmallStepStore } from "../../../stateStore/RenderStepStore.js";
import helpMessages from "../../../assets/helpMessages/helpMessages.jsx";
import "../../../../css/Advanced-Order-CSS/stepOne.css";
import "../../../../css/errorModal.css";
const BuildWeight = () =>
	// { onConfirm }
	{
		const weight = useAdvancedOrderProfileStore((state) => state.weight);
		const preferredUnit = useAdvancedOrderProfileStore((state) => state.preferredUnit);
		const { setWeight } = useAdvancedOrderProfileStore((actions) => actions);
		const { setPreferredUnit } = useAdvancedOrderProfileStoreActions((actions) => actions);
		const { increaseStep } = useRenderSmallStepStore((state) => state.increaseStep);
		const [state, setState] = useState({
			error: false,
			errorMessage: "",
			loading: false,
			preferredUnit: null,
			weightLeft: 0,
			weightMiddle: 0,
			weightRight: 0,
		});

		useEffect(() => {
			initialize();
		}, []);

		const handleIncrementLeft = () => {
			const add = state.weightLeft + 1;
			setState({
				...state,
				weightLeft: add,
			});
		};
		const handleIncrementMiddle = () => {
			const add = state.weightMiddle + 1;
			setState({
				...state,
				weightMiddle: add,
			});
		};
		const handleIncrementRight = () => {
			const add = state.weightRight + 1;
			setState({
				...state,
				weightRight: add,
			});
		};

		const handleDecrementLeft = () => {
			const sub = state.weightLeft - 1;
			if (state.weightLeft > 0) {
				setState({
					...state,
					weightLeft: sub,
				});
			}
		};
		const handleDecrementMiddle = () => {
			const sub = state.weightMiddle - 1;
			if (state.weightMiddle > 0) {
				setState({
					...state,
					weightMiddle: sub,
				});
			}
		};
		const handleDecrementRight = () => {
			const sub = state.weightRight - 1;
			if (state.weightRight > 0) {
				setState({
					...state,
					weightRight: sub,
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
			if (state.preferredUnit === "Choose One") {
				setState({ ...state, error: true, errorMessage: "Please choose a unit of measurement" });
			} else {
				// setWeight(state.weightLeft + state.weightMiddle + state.weightRight);
				setPreferredUnit(state.preferredUnit);
				// onConfirm();
				initialize();
			}
		};

		const initialize = () => {
			setState({
				...state,
				error: false,
				errorMessage: "",
				loading: false,
				preferredUnit: "",
				weightLeft: 0,
				weightMiddle: 0,
				weightRight: 0,
			});
		};
		return (
			<div className='weight-input-container-main'>
				<p className='help-title'>
					If you need help, Click
					<span onClick={handleHelpClick} className='here-link'>
						{" "}
						HERE
					</span>
				</p>
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
				<p>What is your preference of measurement?</p>
				<select
					className='preferred-unit-select-list'
					required
					value={state.preferredUnit}
					onChange={(e) => setState({ ...state, preferredUnit: e.target.value })}
				>
					<option value='Choose One'>Choose One</option>
					<option value='Metric'>Metric</option>
					<option value='Imperial'>Imperial</option>
				</select>
				{state.preferredUnit ? <h4>What is your current weight?</h4> : null}
				{state.preferredUnit ? (
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
							<input className='weight-input-left' value={state.weightLeft} />
							<input className='weight-input-middle' value={state.weightMiddle} />
							<input className='weight-input-right' value={state.weightRight} />
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
						<button className='adv-order-btn' onClick={handleConfirm}>
							Confirm Weight
						</button>
					</div>
				) : null}
			</div>
		);
	};

export default BuildWeight;
