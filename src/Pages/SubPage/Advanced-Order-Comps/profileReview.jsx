import React, { useEffect, useState } from "react";
import { useAdvancedOrderProfileStore } from "../../../stateStore/AdvancedOrderProfileStore";
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore";
import ProfileReviewModal from "./profileReviewModal";

const ProfileReview = () => {
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
		imperialHeightDisplay: "",
	});
// BMR and TDEE calculations
	useEffect(() => {
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


	const closeModal = () => {
		setState({ ...state, reviewModal: false });
	};

	const openModal = () => {
		setState({ ...state, reviewModal: true });
	}

	

	return (
		<div className='comp-container-col'>
			<h2 className='comp-title'> Profile Review</h2>
			<p> We have figured up your BMR calories and your TDEE calories.</p>
			<p>
				If you want to change any information, click <span>Update</span>,
			</p>
			<p>
				or click <span>Confirm</span> to finish the profile setup.
			</p>
			{/* {state.errorModal ? (
					<div className='error-container'>
						<div className='error-content'>
							<p className='error-message'>{state.errorMessage}</p>
							<button className='close-modal-btn' onClick={closeErrorModalBtn()}>
								Close
							</button>
						</div>
					</div>
				) : (
					""
				)} */}
			{state.reviewModal ? <ProfileReviewModal closeModal={closeModal} /> : ""}
			<div className='element-grid-container'>
				<div className='grid-container-left'>
					<p className='element-title-left'>BMR:</p>
					<p className='element-title-left'>TDEE:</p>
				</div>
				<div className='grid-container-right'>
					<p className='element-title-right'>{bmr} Calories</p>
					<p className='element-title-right'>{tdee} Calories</p>
				</div>
			</div>
			<div>
				<button onClick={openModal} className='adv-order-btn'>
					Update
				</button>
				<button className='adv-order-btn'>Confirm</button>
			</div>
		</div>
	);
};

export default ProfileReview;
