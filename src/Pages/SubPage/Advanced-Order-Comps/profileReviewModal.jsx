import React, { useState, useEffect } from "react";
import { useAdvancedOrderProfileStore } from "../../../stateStore/AdvancedOrderProfileStore";
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore";

const ProfileReviewModal = ({ closeReviewModalBtn }) => {
	const { age, birthday, gender, weightMetric, height, preferredUnit, activityLevel, activityLevelValue, bmr, tdee } =
		useAdvancedOrderProfileStore((state) => state);

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		errorModal: false,
		completed: false,
	});

	// const handleUpdate = () => {

	// const handleUpdate = () => {

	return (
		<div>
			<h2> Profile Review</h2>
			<div className='error-container'>
				<p>current age</p>
				{age}

				<p>current birthday</p>
				{birthday}
				<p></p>
				<p>current gender</p>
				{gender}
				<p>current weight</p>
				{weightMetric}
				<p>current height</p>
				{height}
				<p>current preferred measurement</p>
				{preferredUnit}
				<p>current activity level</p>
				{activityLevel}
				<p>current BMR</p>
				{bmr}
				<p>current TDEE</p>
				{tdee}
				<button onClick={handleUpdate()}>update</button>
				<button onClick={closeReviewModalBtn()}>close</button>
			</div>
		</div>
	);
};

export default ProfileReviewModal;
