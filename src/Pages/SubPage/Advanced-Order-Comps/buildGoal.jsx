import React, { useState, useEffect } from "react";
//global state
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore";
import { useAdvancedOrderProfileStore } from "../../../stateStore/AdvancedOrderProfileStore";
import "../../../css/Advanced-Order-CSS/stepOne.css";

const Goal = () => {
	//global state actions
	const { setGoal } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setActivityLevel } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setActivityLevelValue } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		errorModal: false,
		errorModalMessage: "",
		loading: false,
		selectedGoal: "",
		selectedActivityLevel: "",
		completed: false,
	});

	const handleConfirm = () => {
		if (selectedGoal === "chooseOne") {
			setState({ ...state, error: true, errorMessage: "Please choose a goal" });
		} else if (selectedActivityLevel === "chooseOne") {
			setState({ ...state, error: true, errorMessage: "Please choose an activity level" });
		} else {
			setGoal(state.selectedGoal);
			setActivityLevel(state.selectedActivityLevel);
			setState({ ...state, error: false, errorMessage: "" });
		}
	};

	useEffect(() => {
		setState({ ...state, loading: true, message: "Lets figure out your goals and current activity level" });
		if (state.selectedActivityLevel === "Sedentary (little or no exercise)") {
			setActivityLevelValue(1.2);
		} else if (state.selectedActivityLevel === "Lightly active (light exercise or sports 1-3 days a week)") {
			setActivityLevelValue(1.375);
		} else if (state.selectedActivityLevel === "Moderately active (moderate exercise or sports 3-5 days a week)") {
			setActivityLevelValue(1.55);
		} else if (state.selectedActivityLevel === "Very active (hard exercise or sports 6-7 days a week)") {
			setActivityLevelValue(1.725);
		} else if (
			state.selectedActivityLevel === "Super active (very hard exercise, physical job, or training twice a day)"
		) {
			setActivityLevelValue(1.9);
		}
	}, [state.selectedActivityLevel]);

	const closeModalBtn = () => {
		setState({ ...state, errorModal: false, errorMessage: "" });
	};

	return (
		<div className='step-container'>
			<p>What is your current goal?</p>
			{state.errorModal ? (
				<div className='error-container'>
					<div className='error-content'>
						<p className='error-message'>{state.errorMessage}</p>
						<button className='close-modal-btn' onClick={closeModalBtn()}>
							Close
						</button>
					</div>
				</div>
			) : null}
			<select required value={selectedGoal} onChange={(e) => setState({ ...state, selectedGoal: e.target.value })}>
				<option value='chooseOne'>Choose One</option>
				<option value='maintainWeight'>Maintain Weight</option>
				<option value='weightLoss'>Weight Loss</option>
				<option value='weightGain'>Weight Gain</option>
				<option value='none'>No current physical goals</option>
			</select>
			<p>How active are you?</p>
			<select required>
				<option value='sedentary'>Sedentary (little or no exercise)</option>
				<option value='lightlyActive'>Lightly active (light exercise or sports 1-3 days a week)</option>
				<option value='moderatelyActive'>Moderately active (moderate exercise or sports 3-5 days a week)</option>
				<option value='veryActive'>Very active (hard exercise or sports 6-7 days a week)</option>
				<option value='superActive'>Super active (very hard exercise, physical job, or training twice a day)</option>
			</select>
			{completed ? <button onClick={handleConfirm()}>Confirm Info</button> : null}
		</div>
	);
};
export default Goal;
