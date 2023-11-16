import React, { useState, useEffect } from "react";
//DB
import { db } from "../../../../Firebase/fireBaseConfig.js";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
//auth
import { UserAuth } from "../../../../Context/AuthContext.jsx"
// Global State
import { useAdvancedOrderStore } from "../../../../stateStore/AdvancedOrderStore.js";
import { useAdvancedOrderStoreActions } from "../../../../stateStore/AdvancedOrderStore.js";
import { useRenderSmallStepStore } from "../../../../stateStore/RenderStepStore.js";
//utilities
import { FetchUserData } from "../../../../Firebase/userData.jsx"
//components
import AgeGender from "./Build-Update-Profile/buildAgeGender.jsx";
import Goal from "./Build-Update-Profile/buildGoal.jsx";
import PersonalStats from "./Build-Update-Profile/buildPersonalStats.jsx";

//buttons
import AdvancedOrderBeginButton from "../beginButton.jsx";
import HandleSteps from "./handleSteps.jsx"
// CSS
import "../../../../css/Advanced-Order-CSS/StepOnePersonal.css";
import "../../../../css/Advanced-Order-CSS/start.css";

const CheckProfile = () => {

	const step = useRenderSmallStepStore((state) => state.step);
	const user = UserAuth();
	const userId = user.user.uid;
	const userData = {}


	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		welcome: false,
		welcomeMessage: "",
		loading: false,
		hasProfile: false,
	});

	// useEffect(() => {	
	// 	const checkForProfile = async () => {
	// 		try {
	// 			const userDocRef = doc(db, "users", userId);
	// 			const userDocSnap = await getDoc(userDocRef);
	// 			const userDocData = userDocSnap.data();
	// 			const userDocId = userDocSnap.id;
	// 			const userProfile = userDocData.profile;
	// 			if (userDocData.personalStats) {
	// 				console.log("success");
	// 			} else {
	// 				console.log("no profile");
	// 				setState({ hasProfile: false, error: true, errorMessage: "No Personal Stats file found. If this is not right, please go to the support and submit a request." })
					
	// 			}
	// 			console.log(userDocSnap, "userDocSnap");
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	checkForProfile();
	// }, []);








	const renderStepMap = {
		0:null,
		1: <PersonalStats />,
		2: <AgeGender />,
		3: <Goal />,
		4: null,
	};

	const RenderCompFromStep = renderStepMap[step];

	return (
		<div className='advanced-order-comp-container'>
			<h4> Let's Check to see if you have a profile already ...</h4>
			<div className='error-message-modal'>
				<p>{state.errorMessage}</p>
			</div>
			<FetchUserData userData={userData, noUserData} />
			{RenderCompFromStep}
			{/* <div>
				Profile Review
				<div>
					<p>age</p>
					<button>update</button>
					<p>birthday</p>
					<button>update</button>
					<p>gender</p>
					<button>update</button>
					<p>weight</p>
					<button>update</button>
					<p>height</p>
					<button>update</button>
					<p>preferred measurement</p>
					<button>update</button>
					<p>BMR</p>
					<button>update</button>
					<p>TDEE</p>
					<button>update</button>
				</div>
			</div> */}
			<div>
				<HandleSteps />
			</div>

			<AdvancedOrderBeginButton />
		</div>
	);
};

export default CheckProfile;
