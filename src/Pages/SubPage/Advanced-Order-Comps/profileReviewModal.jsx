import React, { useEffect, useState } from "react";
import { useAdvancedOrderProfileStore } from "../../../stateStore/AdvancedOrderProfileStore";
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore";
import BuildHeight from "./buildHeight";
import BuildWeight from "./buildWeight";
import BuildGoal from "./buildGoal";
import AgeGender from "./buildAgeGender";

const ProfileReview = ({ closeModal }) => {
	const { setAge } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setBirthday } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setGender } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setWeight } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setHeight } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setGoal } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setPreferredUnit } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setActivityLevel } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setActivityLevelValue } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setBmr } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setTdee } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { age, birthday, gender, weight, height, goal, preferredUnit, activityLevel, activityLevelValue, bmr, tdee } =
		useAdvancedOrderProfileStore((state) => state);

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		errorModal: false,
		completed: false,
		reviewModal: false,
		renderPopUp: false,
		imperialHeightDisplay: "",
		renderBuildWeight: false,
		renderBuildHeight: false,
		renderAgeGender: false,
		renderBuildGoal: false,
	});

	const initializeState = () => {
		setState({
			error: false,
			errorMessage: "",
			loading: false,
			errorModal: false,
			completed: false,
			reviewModal: false,
			renderPopUp: false,
			imperialHeightDisplay: "",
			renderBuildWeight: false,
			renderBuildHeight: false,
			renderAgeGender: false,
			renderBuildGoal: false,
		});
	};

	// BMR and TDEE calculations
	useEffect(() => {
		initializeState();
		if (preferredUnit === "Imperial") {
			if (gender === "Male") {
				const weightToKg = weight * 0.45359237;
				const heightToCm = height * 2.54;
				const imperialMaleBMR = 88.362 + 13.397 * weightToKg + 4.799 * heightToCm - 5.677 * age;
				const imperialMaleTDEE = imperialMaleBMR * activityLevelValue;
				setBmr(Math.floor(imperialMaleBMR));
				setTdee(Math.floor(imperialMaleTDEE));
			} else if (gender === "Female") {
				const weightToKg = weight * 0.45359237;
				const heightToCm = height * 2.54;
				const imperialFemaleBMR = 447.593 + 9.247 * weightToKg + 3.098 * heightToCm - 4.33 * age;
				const imperialFemaleTDEE = imperialFemaleBMR * activityLevelValue;
				setBmr(Math.floor(imperialFemaleBMR));
				setTdee(Math.floor(imperialFemaleTDEE));
			}
		} else if (preferredUnit === "Metric") {
			if (gender === "Male") {
				const metricBMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
				const metricTDEE = metricBMR * activityLevelValue;
				setBmr(Math.floor(metricBMR));
				setTdee(Math.floor(metricTDEE));
			} else if (gender === "Female") {
				const metricBMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
				const metricTDEE = metricBMR * activityLevelValue;
				setBmr(Math.floor(metricBMR));
				setTdee(Math.floor(metricTDEE));
			}
		}
	}, []);

	useEffect(() => {
		if (preferredUnit === "Imperial") {
			console.log(height, "height");
			const heightImperial = height / 12;
			const heightSplit = heightImperial.toString().split(".");
			const whole = heightSplit[0];
			const decimal = (heightSplit[1] / 100) * 12;
			setState({ ...state, imperialHeightDisplay: whole + " ft " + decimal + " in" });
		}
	}, [weight]);

	const handleAgeUpdate = () => {
		setState({
			...state,
			renderAgeGender: true,
			renderPopUp: true,
		});
	};

	const handleWeightUpdate = () => {
		setState({
			...state,
			renderBuildWeight: true,
			renderPopUp: true,
		});
	};

	const handleHeightUpdate = () => {
		setState({
			...state,
			renderBuildHeight: true,
			renderPopUp: true,
		});
	};

	const handleGoalUpdate = () => {
		setState({
			...state,
			renderBuildGoal: true,
			renderPopUp: true,
		});
	};

	const closeModalUpdate = () => {
		setState({
			...state,
			renderBuildGoal: false,
			renderBuildHeight: false,
			renderBuildWeight: false,
			renderAgeGender: false,
			renderPopUp: false,
		});
	};

	return (
		<div className='modal-container'>
			<div className='modal-content'>
				<button className='preview-profile-close-modal-btn' onClick={closeModal}>
					x
				</button>
					<h2> Update Profile</h2>

					<p className='modal-side-text'>
						To update any field, click on the incorrect value you would like to change
					</p>

				<div className='modal-container-profile-update'>
					<div
						style={{
							display: state.renderPopUp ? "inline-flex" : "none",
						}}
						className='modal-profile-update-container'
					>
						<div className='modal-profile-update-content'>
							<button className='close-update-btn' onClick={closeModalUpdate}>
								x
							</button>
							<p></p>
							{state.renderBuildGoal ? <BuildGoal /> : ""}
							{state.renderAgeGender ? <AgeGender /> : ""}
							{state.renderBuildHeight ? <BuildHeight /> : ""}
							{state.renderBuildWeight ? <BuildWeight /> : ""}
						</div>
					</div>
				</div>
				<div className='element-grid-container'>
					<div className='grid-container-left'>
						<p className='element-title-left'>Current Age</p>
						<p className='element-title-left'>Birthday</p>
						<p className='element-title-left'>Gender</p>
						<p className='element-title-left'>Current Weight</p>
						<p className='element-title-left'>Current Height</p>
						<p className='element-title-left'>Measurement Unit</p>
						<p className='element-title-left'>Current Activity Level</p>
						<p className='element-title-left'>Current Goal</p>
					</div>
					<div className='grid-container-right'>
						<p onClick={handleAgeUpdate} className='element-title-right'>
							{age} Years Old
						</p>
						<p onClick={handleAgeUpdate} className='element-title-right'>
							{birthday}
						</p>
						<p onClick={handleAgeUpdate} className='element-title-right'>
							{gender}
						</p>
						<p onClick={handleWeightUpdate} className='element-title-right'>
							{weight} {preferredUnit === "Imperial" ? " lbs" : " kgs"}
						</p>
						<p onClick={handleHeightUpdate} className='element-title-right'>
							{preferredUnit === "Metric" ? weight + " cm" : state.imperialHeightDisplay}
						</p>
						<p onClick={handleWeightUpdate} className='element-title-right'>
							{preferredUnit}
						</p>
						<p onClick={handleGoalUpdate} className='element-title-right'>
							{activityLevel}
						</p>
						<p onClick={handleGoalUpdate} className='element-title-right'>
							{goal}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileReview;
