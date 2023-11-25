import React, { useState, useEffect } from "react";
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore";
import { useAdvancedOrderProfileStore } from "../../../stateStore/AdvancedOrderProfileStore";
import "../../../css/Advanced-Order-CSS/buildAgeGenderGoal.css";
import "../../../css/errorModal.css";

const Goal = () => {
	const goal = useAdvancedOrderProfileStore((state) => state.goal);
	const activityLevel = useAdvancedOrderProfileStore((state) => state.activityLevel);
	const activityLevelValue = useAdvancedOrderProfileStore((state) => state.activityLevelValue);
	const { setGoal } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setActivityLevel } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setActivityLevelValue } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		selectedGoal: "",
		selectedActivityLevel: "",
		completed: false,
	});
	const initializeState = () => {
		setState({
			error: false,
			errorMessage: "",
			loading: false,
			selectedGoal: "",
			selectedActivityLevel: "",
			completed: false,
		});
	};

	const handleConfirm = () => {
		if (state.selectedGoal === "Choose One") {
			setState({ ...state, error: true, errorMessage: "Please choose a goal" });
		} else if (state.selectedActivityLevel === "Choose One") {
			setState({ ...state, error: true, errorMessage: "Please choose an activity level" });
		} else {
			setGoal(state.selectedGoal);
			setActivityLevel(state.selectedActivityLevel);
			initializeState();
		}
	};

	useEffect(() => {
		if (state.selectedActivityLevel === "Sedentary (little or no exercise)") {
			setActivityLevelValue(1.2);
			setState({ ...state, completed: true });
		} else if (state.selectedActivityLevel === "Lightly active (light exercise or sports 1-3 days a week)") {
			setActivityLevelValue(1.375);
			setState({ ...state, completed: true });
		} else if (state.selectedActivityLevel === "Moderately active (moderate exercise or sports 3-5 days a week)") {
			setActivityLevelValue(1.55);
			setState({ ...state, completed: true });
		} else if (state.selectedActivityLevel === "Very active (hard exercise or sports 6-7 days a week)") {
			setActivityLevelValue(1.725);
			setState({ ...state, completed: true });
		} else if (
			state.selectedActivityLevel === "Super active (very hard exercise, physical job, or training twice a day)"
		) {
			setActivityLevelValue(1.9);
			setState({ ...state, completed: true });
		}
	}, [state.selectedActivityLevel]);

	const closeModalBtn = () => {
		setState({ ...state, errorModal: false, errorMessage: "" });
	};

	return (
		<div className='comp-container-col'>
			<p className='title'>What is your current goal?</p>
			{state.error ? (
				<div className='error-container'>
					<div className='error-content'>
						<p className='error-message'>{state.errorMessage}</p>
						<button className='close-modal-btn' onClick={closeModalBtn}>
							Close
						</button>
					</div>
				</div>
			) : null}
			<select
				className='select-list'
				value={state.selectedGoal}
				onChange={(e) => setState({ ...state, selectedGoal: e.target.value })}
			>
				<option value='Choose One'>Choose One</option>
				<option value='Maintain Weight'>Maintain Weight</option>
				<option value='Weight Loss'>Weight Loss</option>
				<option value='Weight Gain'>Weight Gain</option>
				<option value='None'>No current physical goals</option>
			</select>
			<p>How active are you?</p>
			<select
				value={state.selectedActivityLevel}
				onChange={(e) => setState({ ...state, selectedActivityLevel: e.target.value })}
			>
				<option value={"Sedentary (little or no exercise)"}>Sedentary (little or no exercise)</option>
				<option value='Lightly active (light exercise or sports 1-3 days a week)'>
					Lightly active (light exercise or sports 1-3 days a week)
				</option>
				<option value='Moderately active (moderate exercise or sports 3-5 days a week)'>
					Moderately active (moderate exercise or sports 3-5 days a week)
				</option>
				<option value='Very active (hard exercise or sports 6-7 days a week)'>
					Very active (hard exercise or sports 6-7 days a week)
				</option>
				<option value='Super active (very hard exercise, physical job, or training twice a day)'>
					Super active (very hard exercise, physical job, or training twice a day)
				</option>
			</select>
			<button onClick={handleConfirm}>Confirm Info</button>
		</div>
	);
};
export default Goal;
