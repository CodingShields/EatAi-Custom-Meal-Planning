import React, { useEffect, useState } from "react";
//images
import flippedChef from "../../assets/images/flippedChef.png";

//components
import AdvancedStart from "./Advanced-Order-Comps/advancedStart.jsx";
import AdvancedOrderCalorieMacroSelection from "./Advanced-Order-Comps/calorieMacroSelection.jsx";
import AdvancedOrderMealSetup from "./Advanced-Order-Comps/MealSetup.jsx";
import AdvancedOrderMealPlanner from "./Advanced-Order-Comps/mealPlanner.jsx";
import AdvancedOrderCalorieInput from "./Advanced-Order-Comps/calorieInput.jsx";
import AdvancedOrderMacroInput from "./Advanced-Order-Comps/macroInput.jsx";
//main comps
import ProfileSearch from "./Advanced-Order-Comps/profileSearch.jsx";
//build profile comps
import BuildWeight from "./Advanced-Order-Comps/buildWeight.jsx";
import BuildHeight from "./Advanced-Order-Comps/buildHeight.jsx";
import AgeGender from "./Advanced-Order-Comps/buildAgeGender.jsx";
import BuildGoal from "./Advanced-Order-Comps/buildGoal.jsx";
import ProfileReview from "./Advanced-Order-Comps/profileReview.jsx";

//global state
import { useAdvancedOrderStoreActions } from "../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStore } from "../../stateStore/AdvancedOrderStore";
import { useRenderStepStore } from "../../stateStore/RenderStepStore";
import { useRenderSmallStepStore } from "../../stateStore/RenderStepStore";

//css
import "../../css/advancedOrder.css";
import "../../assets/statusBar/loading-bar.css";
import "../../css/Advanced-Order-CSS/stepOne.css";

//buttons
import HandleSteps from "./Advanced-Order-Comps/handleSteps.jsx";

const AdvancedOrder = () => {
	const step = useRenderSmallStepStore((state) => state.step);
	const [buildProfile, setBuildProfile] = useState(false);

	const [state, setState] = useState({
		statusBar: 0,
		error: false,
		errorMessage: "",
	});

	// //status bar
	// useEffect(() => {
	// 	setState({ step: 0 });
	// 	if (step === 0) {
	// 		setState({ statusBar: "5" });
	// 	} else if (step === 1) {
	// 		setState({ statusBar: "25" });
	// 	} else if (step === 2) {
	// 		setState({ statusBar: "50" });
	// 	} else if (step === 3) {
	// 		setState({ statusBar: "75" });
	// 	} else if (step === 4) {
	// 		setState({ statusBar: "100" });
	// 	}
	// }, [step]);

	const renderStepMap = {
		0: <ProfileReview />,
	};
const renderStepMapNewProfileSetup = {
	0: <BuildWeight />,
	1: <BuildHeight />,
	2: <AgeGender />,
	3: <BuildGoal />,
	4: <ProfileReview />,
}
const RenderCompFromStep = renderStepMap[step];
	
const RenderNoProfileSetup = renderStepMapNewProfileSetup[step];

	useEffect(() => {
		setBuildProfile(false);
	}
	, [])
	

	return (
		<div className='advanced-order-container'>
			{step === 3 ? "" : <img className='advanced-order-chef-img' src={flippedChef} />}
			<div
				style={{
					display: "flex",
					width: "auto",
					marginTop: "10px",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				{/* {!buildProfile ?<ProfileSearch onConfirm={handleConfirm} /> : ""} */}
				{/* {buildProfile ? */}
				{RenderNoProfileSetup}
				{/* : ""} */}
				<HandleSteps />
			</div>

			{/* <div data-preset='stripe' data-value={state.statusBar} id='ldBar' className='ldBar'></div> */}
		</div>
	);
};
export default AdvancedOrder;
