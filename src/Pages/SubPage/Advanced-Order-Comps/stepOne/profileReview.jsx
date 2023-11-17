import React, {useEffect, useState} from "react";
import { useAdvancedOrderProfileStore } from "../../../../stateStore/AdvancedOrderProfileStore";
import { useAdvancedOrderProfileStoreActions } from "../../../../stateStore/AdvancedOrderProfileStore";
import ProfileReviewModal from "./profileReviewModal";
const ProfileReview = () => { 

	// const { setBMR } = AdvancedOrderProfileStoreActions((actions) => actions);
	// const {	setTDEE } = AdvancedOrderProfileStoreActions((actions) => actions);
	const { age, birthday, gender, weight, height, preferredUnit, activityLevel,bmr, tdee } = useAdvancedOrderProfileStore((state) => state);

	// const [state, setState] = useState({
	// 	error: false,
	// 	errorMessage: "",
	// 	loading: false,
	// 	errorModal: false,
	// 	completed: false,
	// 	reviewModal: false,
	// });

	
	// useEffect(() => {
	// 	setState({ ...state, loading: true, errorModal: false, errorMessage: "" });
	// 	if (preferredUnit === "imperial") {
	// 		if (gender === "male") {
	// 			const weightToKg = weightImperial * 0.45359237;
	// 			const heightToCm = height * 2.54;
	// 			const imperialMaleBMR = 88.362 + (13.397 * weightToKg) + (4.799 * heightToCm) - (5.677 * age);
	// 			const imperialMaleTDEE = imperialMaleBMR * activityLevelValue;
	// 			setBMR(imperialMaleBMR);
	// 			setTDEE(imperialMaleTDEE);
	// 		} else if (gender === "female") {
	// 			const weightToKg = weightMetric * 0.45359237;
	// 			const heightToCm = height * 2.54;
	// 			const imperialFemaleBMR = 447.593 + (9.247 * weightToKg) + (3.098 * heightToCm) - (4.330 * age);
	// 			const imperialFemaleTDEE = imperialFemaleBMR * activityLevelValue;
	// 			setBMR(imperialFemaleBMR);
	// 			setTDEE(imperialFemaleTDEE);
	// 		}
	// 	} else if (preferredUnit === "metric") {
	// 		if (gender === "male") {
	// 			const metricBMR = 88.362 + (13.397 * weightMetric) + (4.799 * height) - (5.677 * age);
	// 			const metricTDEE = metricBMR * activityLevelValue;
	// 			setBMR(metricBMR);
	// 			setTDEE(metricTDEE);
	// 		} else if (gender === "female") {
	// 			const metricBMR = 447.593 + (9.247 * weightMetric) + (3.098 * height) - (4.330 * age);
	// 			const metricTDEE = metricBMR * activityLevelValue;
	// 			setBMR(metricBMR);
	// 			setTDEE(metricTDEE);
	// 		}
	// 	}
	// }
	// 	, []);
	
	// const closeErrorModalBtn = () => {
	// 	setState({ ...state, errorModal: false, errorMessage: "", completed: false });
	// };

	// const closeReviewModalBtn = () => {
	// 	setState({ ...state, reviewModal: false });
	// }

    return (
			<div>
				<h2> Profile Review</h2>
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
				{/* <div>
					<ProfileReviewModal closeReviewModalBtn={closeReviewModalBtn} />
				</div> */}
				<div>
					<p>age</p>
					{age}
					<p>birthday</p>
					{birthday}
					<p>gender</p>
					{gender}
					<p>weight</p>
					{weight}
					<p>height</p>
					{height}
					<p>preferred measurement</p>
					{preferredUnit}
					<p>current activity level</p>
					{activityLevel}
					<p>BMR</p>
					{bmr}
					{/* <p className='start-container-title-bmr'> Next we need to figure our your BMR</p>
					<p className='start-container-title-bmr'>
						Click{" "}
						<span onClick={() => handleHelpClick("bmrHelp")} className='here-link'>
							HERE
						</span>{" "}
						to learn more about BMR
					</p> */}
					<p>TDEE</p>
					{tdee}
					<button>update</button>
				</div>
			</div>
		);
}

export default ProfileReview;