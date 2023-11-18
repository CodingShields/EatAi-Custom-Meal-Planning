import React, { useState, useEffect } from "react";
//DB
import { db} from "../../../Firebase/fireBaseConfig.js";
import { doc, getDoc } from "firebase/firestore";
//auth
import { UserAuth } from "../../../Context/AuthContext.jsx";
// Global State
import { useAdvancedOrderProfileStore } from "../../../stateStore/AdvancedOrderProfileStore.js";
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore.js";
//images
import SearchingForProfileFadeIn from "../../../assets/images/SearchingForProfileFadeIn.svg";
import SearchingForProfileFadeOut from "../../../assets/images/SearchingForProfileFadeOut.svg";
import "../../../css/Advanced-Order-CSS/stepOne.css";

const ProfileSearch = ({ onConfirm}) => {
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
		// setState({ ...state, loading: false, errorModal: false, errorMessage: "" });
		const checkForProfile = () => {
			setState({ ...state, loading: true, message: "Checking to see if your Profile is loaded ..." });
			setTimeout(() => {
				if (advancedProfileFound === true) {
					setState({ ...state, loading: false, hasProfile: true, message: "Profile Found!" });
				} else {
					setState({
						...state,
						loading: true,
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
		setState({
			...state,
			errorModal: false,
			loading: false,
			errorMessage: "",
			message: "Let's get started building you a profile!",
		});
	};

	const handleConfirm = () => {
		onConfirm();
	}


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
						add a navigate button on the error modal to go to support page
					</div>
				</div>
			) : (
				""
			)}
			{state.noProfile && state.message === "Let's get started building you a profile!" ? (
				<button onClick={handleConfirm}>Lets build your profile</button>
			) : (
				""
			)}
		</div>
	);
};

export default ProfileSearch;
