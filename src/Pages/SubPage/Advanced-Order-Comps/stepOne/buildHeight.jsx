import React, { useEffect, useState } from "react";
import { useAdvancedOrderProfileStoreActions } from "../../../../stateStore/AdvancedOrderProfileStore";
import { useAdvancedOrderProfileStore } from "../../../../stateStore/AdvancedOrderProfileStore";
import "../../../../css/Advanced-Order-CSS/stepOne.css";
const BuildHeight = ({ onConfirm }) => {
	const preferredUnit = useAdvancedOrderProfileStore((state) => state.preferredUnit);
	const { setHeight } = useAdvancedOrderProfileStoreActions((actions) => actions);

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		heightMetric: 0,
		heightFeet: 0,
		heightInches: 0,
	});

	const handleIncrementMetric = () => {
		const add = state.heightMetric + 1;
		setState({
			...state,
			heightMetric: add,
		});
	};

	const handleDecrementMetric = () => {
		const sub = state.heightMetric - 1;
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

	const handleConfirm = () => {
		if (preferredUnit === "Metric") {
			setHeight(state.heightMetric);
		} else {
			const heightInches = state.heightFeet * 12 + state.heightInches;
			setHeight(heightInches);
		}
		onConfirm();
	};

	return (
		<div className='weight-container-main'>
			<h4>What is your current height?</h4>
			{preferredUnit === "Metric" ? (
				<div className='weight-container'>
					<button className='button-increment-top' onClick={handleIncrementMetric}>
						+
					</button>
					<input
						className='height-input-metric'
						readOnly={true}
						value={state.heightMetric + " cm"}
						onChange={(e) => setState({ ...state, heightMetric: e.target.value })}
					/>
					<button className='button-increment-bottom' onClick={handleDecrementMetric}>
						-
					</button>
				</div>
			) : (
				""
			)}
			<div className='weight-input-button-container '>
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
			<div className='weight-input-container'>
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
			<div className='weight-input-button-container '>
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
                disabled={state.heightFeet === 0 && state.heightInches === 0 && state.heightMetric === 0 ? true : false}
                className='adv-order-btn' onClick={handleConfirm}>
				Confirm
			</button>
		</div>
	);
};

export default BuildHeight;
