import React, { useEffect, useState } from "react";
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore";
import { useAdvancedOrderProfileStore } from "../../../stateStore/AdvancedOrderProfileStore";
const BuildHeight = () => {
		const preferredUnit = useAdvancedOrderProfileStore((state) => state.preferredUnit);
		const { setHeight } = useAdvancedOrderProfileStoreActions((actions) => actions);

		const [state, setState] = useState({
			error: false,
			errorMessage: "",
			loading: false,
			displayMetric: false,
			displayImperial: false,
			heightMetric: 0,
			heightFeet: 0,
			heightInches: 0,
			disableConfirm: true,
			incrementCount: 0,
			activeIncrement1: false,
			activeIncrement10: false,
			activeIncrement100: false,
		});
		
	const initializeState = () => {
		setState({
			error: false,
			errorMessage: "",
			loading: false,
			displayMetric: false,
			displayImperial: false,
			heightMetric: 0,
			heightFeet: 0,
			heightInches: 0,
			disableConfirm: true,
			incrementCount: 0,
			activeIncrement1: false,
			activeIncrement10: false,
			activeIncrement100: false,
		});
	}
	

	useEffect(() => {
		initializeState();
		if (preferredUnit === "Imperial") {
			setState({ ...state, displayImperial: true, displayMetric: false });
		} else if (preferredUnit === "Metric") {
			setState({ ...state, displayMetric: true, displayImperial: false });
		}
	}, [preferredUnit]);


	const handleIncrementMetric = () => {
			const value = state.incrementCount;
			const add = state.heightMetric + value;
			setState({
				...state,
				heightMetric: add,
			});
		};

	const handleDecrementMetric = () => {
			const value = state.incrementCount;
			const sub = state.heightMetric - value;
			if (state.heightMetric > 0) {
				setState({
					...state,
					heightMetric: sub,
				});
			}
		};

		const handleIncrementFeet = () => {
			const add = state.heightFeet + 1;
			if (state.heightFeet < 8) {
				setState({
					...state,
					heightFeet: add,
				});
			}
		};
		const handleIncrementInches = () => {
			const add = state.heightInches + 1;
			if (state.heightInches < 11) {
				setState({
					...state,
					heightInches: add,
				});
			}
		};

		const handleDecrementFeet = () => {
			const sub = state.heightFeet - 1;
			if (state.heightFeet > 0) {
				setState({
					...state,
					heightFeet: sub,
				});
			}
		};

		const handleDecrementInches = () => {
			const sub = state.heightInches - 1;
			if (state.heightInches > 0) {
				setState({
					...state,
					heightInches: sub,
				});
			}
	};
	const handleIncrementChange = (e) => {
		const value = e
		if (value === "1") {
			setState({
				...state,
				incrementCount: 1,
				activeIncrement1: true,
				activeIncrement10: false,
				activeIncrement100: false,
			});
		} else if (value === "10") {
			setState({
				...state,
				incrementCount: 10,
				activeIncrement1: false,
				activeIncrement10: true,
				activeIncrement100: false,
			});
		} else if (value === "100") {
			setState({
				...state,
				incrementCount: 100,
				activeIncrement1: false,
				activeIncrement10: false,
				activeIncrement100: true,
			});
		}
	}
		const handleConfirm = () => {
			if(preferredUnit === "Imperial") {
				const height = state.heightFeet * 12 + state.heightInches;
				console.log("compheight", height);
				setState({
					...state,
					error: true,
					disableConfirm: false,
					errorMessage: "Your Height Data is saved. Click Next for the next step",
				});
				setHeight(height);
			} else if (preferredUnit === "Metric") {
				setState({
					...state,
					error: true,
					disableConfirm: false,
					errorMessage: "Your Height Data is saved. Click Next for the next step",
				});
				setHeight(state.heightMetric);
			}	
	}
	
	const handleCloseModal = () => {
		setState({ ...state, error: false, errorMessage: "" });
	};


		return (
			<div className='comp-container-col'>
				<h2 className='comp-title'>Next let's set your Height</h2>

				<h4 className='title'>What is your current height?</h4>
				{state.error ? (
					<div className='error-container'>
						<div className='error-content'>
							<button onClick={handleCloseModal} className='close-modal-btn'>
								Close X
							</button>
							<p>{state.errorMessage}</p>
						</div>
					</div>
				) : null}
				<div
					style={{
						display: state.displayMetric ? "flex" : "none",
					}}
					className='weight-height-container'
				>
					<div className='height-btn-container'>
						<div className='btn-container-column-increment'>
							<button
								style={{
									fontWeight: state.activeIncrement1 ? "bold" : "",
									color: state.activeIncrement1 ? "white" : "",
									backgroundColor: state.activeIncrement1 ? "rgb(33, 175, 5)" : "",
								}}
								className='radio-button'
								type='radio'
								value={1}
								onClick={(e) => handleIncrementChange(e.target.value)}
							>
								1
							</button>
							<button
								style={{
									fontWeight: state.activeIncrement10 ? "bold" : "",
									color: state.activeIncrement10 ? "white" : "",
									backgroundColor: state.activeIncrement10 ? "rgb(33, 175, 5)" : "",
								}}
								className='radio-button'
								type='radio'
								value={10}
								onClick={(e) => handleIncrementChange(e.target.value)}
							>
								10
							</button>
							<button
								style={{
									fontWeight: state.activeIncrement100 ? "bold" : "",
									color: state.activeIncrement100 ? "white" : "",
									backgroundColor: state.activeIncrement100 ? "rgb(33, 175, 5)" : "",
								}}
								className='radio-button'
								type='radio'
								value={100}
								onClick={(e) => handleIncrementChange(e.target.value)}
							>
								100
							</button>
						</div>
						<div className='btn-container-column'>
							<button
								disabled={state.incrementCount === 0 ? true : false}
								className='button-increment-top'
								onClick={handleIncrementMetric}
							>
								+
							</button>
							<input
								className='height-input-metric'
								readOnly={true}
								value={state.heightMetric + " cm"}
								onChange={(e) => setState({ ...state, heightMetric: e.target.value })}
							/>
							<button
								disabled={state.incrementCount === 0 ? true : false}
								className='button-increment-bottom'
								onClick={handleDecrementMetric}
							>
								-
							</button>
						</div>
					</div>
				</div>
				{/*  */}
				<div
					style={{
						display: state.displayImperial ? "flex" : "none",
					}}
					className='weight-input-button-container '
				>
					<button
						disabled={state.heightFeet === 10 ? true : false}
						className='weight-button-increment-left'
						onClick={handleIncrementFeet}
					>
						+
					</button>
					<button
						disabled={state.heightInches === 11 ? true : false}
						className='weight-button-increment-right'
						onClick={handleIncrementInches}
					>
						+
					</button>
				</div>
				<div
					style={{
						display: state.displayImperial ? "flex" : "none",
					}}
					className='weight-input-container'
				>
					<input
						className='weight-input-left'
						readOnly={true}
						value={state.heightFeet + " ft"}
						onChange={(e) => setState({ ...state, heightFeet: e.target.value })}
					/>
					<input
						className='weight-input-right'
						readOnly={true}
						value={state.heightInches + " in"}
						onChange={(e) => setState({ ...state, heightInches: e.target.value })}
					/>
				</div>
				<div
					style={{
						display: state.displayImperial ? "flex" : "none",
					}}
					className='weight-input-button-container '
				>
					<button
						disabled={state.heightFeet === 0 ? true : false}
						className='weight-button-decrement-left'
						onClick={handleDecrementFeet}
					>
						-
					</button>
					<button
						disabled={state.heightInches === 0 ? true : false}
						className='weight-button-decrement-right'
						onClick={handleDecrementInches}
					>
						-
					</button>
				</div>

				<button
					disabled={
						preferredUnit === "Imperial"
							? state.heightFeet === 0 && state.heightInches === 0
							: preferredUnit === "Metric"
							? state.heightMetric === 0
							: false
					}
					className='adv-order-btn'
					onClick={handleConfirm}
				>
					Confirm
				</button>
			</div>
		);
	};

export default BuildHeight;
