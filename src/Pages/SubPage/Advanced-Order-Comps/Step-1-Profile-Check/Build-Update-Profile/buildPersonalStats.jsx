import React, { useEffect, useState } from "react";
//global state
import { useAdvancedOrderStoreActions } from "../../../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStore } from "../../../../../stateStore/AdvancedOrderStore";

const PersonalStats = () => {
	//global state actions
	const { setWeight } = useAdvancedOrderStoreActions((actions) => actions);
	const { setHeight } = useAdvancedOrderStoreActions((actions) => actions);
	const { setPreferredUnit } = useAdvancedOrderStoreActions((actions) => actions);
	//global state
	const weight = useAdvancedOrderStore((state) => state.weight);
	const height = useAdvancedOrderStore((state) => state.height);
	const preferredUnit = useAdvancedOrderStore((state) => state.preferredUnit);
	//state
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		preferredUnit:null,
		weight: 0,
		heightMetric: 0,
		heightFeet: 0,
		heightInches: 0,
	});

	const handleIncrement = () => {
		const add = state.weight + 1;
		setState({
			...state,
			weight: add,
		});
	};

	const handleDecrement = () => {
		const sub = state.weight - 1;
		if (state.weight > 0) {
			setState({
				...state,
				weight: sub,
			});
		}
	};

	return (
		<div className='step-container'>
			<h4>Let's get started with some basic information</h4>
			<p>What is your preference of measurement?</p>
			<select
				required
				value={state.preferredUnit}
				onChange={(e) => setState({ ...state, preferredUnit: e.target.value })}
			>
				<option value='Choose One'>Choose One</option>
				<option value='Metric'>Metric</option>
				<option value='Imperial'>Imperial</option>
			</select>
			{state.preferredUnit ? <h4>What is your current weight?</h4> : null}
			{state.preferredUnit ? <div className='weight-input-container'>
				<button onClick={handleDecrement} className='weight-button-decrement'>
					-
				</button>
				<input
					className='weight-input'
					type='decimal'
					name='weight'
					min={1}
					max={state.preferredUnit === "Metric" ? 500 : 1000}
					maxLength={4}
					value={state.weight}
				/>
				<button onClick={handleIncrement} className='weight-button-increment'>
					+
				</button>
			</div> : null}

			{state.preferredUnit ? <h4>What is your current height?</h4> : null}
			{state.preferredUnit === "Metric" ? <input
				type='decimal'
				name='height-metric'
				min={1}
				max={800}
				maxLength={3}
				value={state.heightMetric}
				onChange={(e) => setState({ ...state, height: e.target.value })}
			/>: null}
			{state.preferredUnit === "Imperial" ? <input
				type='decimal'
				name='height-imperial-ft'
				min={1}
				max={8}
				maxLength={1}
				value={state.heightFeet}
				onChange={(e) => setState({ ...state, height: e.target.value })}
			/>: null}
			{state.preferredUnit === "Imperial" ? <input
				type='decimal'
				name='height-imperial-in'
				min={1}
				max={11}
				maxLength={2}
				value={state.heightInches}
				onChange={(e) => setState({ ...state, height: e.target.value })}
			/> : null}
		</div>
	);
};

export default PersonalStats;
