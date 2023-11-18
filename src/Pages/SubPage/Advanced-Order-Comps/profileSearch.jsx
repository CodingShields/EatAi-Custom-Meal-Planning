import React, { useState, useEffect } from "react";
//DB
import { db, auth } from "../../../Firebase/fireBaseConfig.js";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
//auth
import { UserAuth } from "../../../Context/AuthContext.jsx";
// Global State
import { useAdvancedOrderProfileStore } from "../../../stateStore/AdvancedOrderProfileStore.js";
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore.js";
import { useRenderSmallStepStore } from "../../../stateStore/RenderStepStore.js";
//components
import AgeGender from "./buildAgeGender.jsx";
import Goal from "./buildGoal.jsx";
import PersonalStats from "./buildPersonalStats.jsx";
import ProfileReview from "./profileReview.jsx";
import MealGuide from "./mealGuide.jsx";
import BuildWeight from "./buildWeight.jsx";
import BuildHeight from "./buildHeight.jsx";
//buttons
import AdvancedOrderBeginButton from "./beginButton.jsx";
import HandleSteps from "./handleSteps.jsx";
// import HandleSteps from "./handleSteps.jsx";
// CSS
import "../../../../css/Advanced-Order-CSS/stepOne.css";
import "../../../../css/Advanced-Order-CSS/start.css";
import "../../../../css/errorModal.css";
//images
import SearchingForProfileFadeIn from "../../../../assets/images/SearchingForProfileFadeIn.svg";
import SearchingForProfileFadeOut from "../../../../assets/images/SearchingForProfileFadeOut.svg";

const ProfileSearch = () => {
	const step = useRenderSmallStepStore((state) => state.step);
	const resetStep = useRenderSmallStepStore((state) => state.resetStep);
	const user = UserAuth();
	const userId = user.user.uid;
	const { advancedProfileFound } = useAdvancedOrderProfileStoreActions((actions) => actions);

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		welcome: false,
		message: "Checking to see if your Profile is loaded ...",
		loading: false,
		hasProfile: false,
		noProfile: false,
		errorModal: false,
	});

	useEffect(() => {
		resetStep();
		setState({ ...state, loading: false, errorModal: false, errorMessage: "" });
		const checkForProfile = () => {
			setState({ ...state, loading: true, message: "Checking to see if your Profile is loaded ..." });
			setTimeout(() => {
				if (advancedProfileFound === true) {
					setState({ ...state, loading: false, hasProfile: true, message: "Profile Found!" });
				} else {
					setState({
						...state,
						loading: false,
						hasProfile: false,
						message: "No Profile was loaded yet. Let me check the DataBase.",
					});
				}
				{
					!state.hasProfile
						? setTimeout(() => {
								const checkForProfileInDb = async () => {
									try {
										const userDocRef = doc(db, "users", userId);
										const userDocSnap = await getDoc(userDocRef);
										const userDocData = userDocSnap.data();
										if (userDocData.advancedOrderProfile) {
											setState({ ...state, hasProfile: true, error: false, errorMessage: "", loading: false });
											console.log("success");
										} else {
											console.log("no profile");
											setState({
												...state,
												hasProfile: false,
												noProfile: true,
												error: true,
												errorModal: true,
												errorMessage:
													"No Personal Stats file found. If this is not right, please go to the support and submit a request.",
											});
										}
									} catch (error) {
										console.log(error);
									}
								};
								checkForProfileInDb();
						  }, 4000)
						: null;
				}
			}, 3000);
		};
		checkForProfile();
	}, []);

	const closeModalBtn = () => {
		setState({ ...state, errorModal: false, errorMessage: "", message: "Let's get started building you a profile!" });
	};

	const renderStepMap = {
		0: <PersonalStats />,
		1: <BuildWeight />,
		2: <BuildHeight />,
		3: <AgeGender />,
		4: <Goal />,
		5: <ProfileReview />,
		6: <MealGuide />,
	};
	const RenderCompFromStep = renderStepMap[step];

	return (
		<div className='advanced-order-comp-container'>
			<h4> {state.message}</h4>
			{state.loading ? <img src={SearchingForProfileFadeIn} alt='Looking for Profile' /> : ""}
			{state.errorModal ? (
				<div className='error-container'>
					<div className='error-content'>
						<p className='error-message'>{state.errorMessage}</p>
						<button className='close-modal-btn' onClick={closeModalBtn}>
							Close
						</button>
					</div>
				</div>
			) : (
				""
			)}

			{state.noProfile ? [RenderCompFromStep] : ""}

			{<HandleSteps />}
			<AdvancedOrderBeginButton />
		</div>
	);
};

export default ProfileSearch;
