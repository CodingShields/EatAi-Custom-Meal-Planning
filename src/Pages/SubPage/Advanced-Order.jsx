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

//global state
import { useAdvancedOrderStoreActions } from "../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStore } from "../../stateStore/AdvancedOrderStore";
import { useRenderStepStore } from "../../stateStore/RenderStepStore";

//css
import "../../css/advancedOrder.css";
import "../../assets/statusBar/loading-bar.css";

const AdvancedOrder = () => {
	const step = useRenderStepStore((state) => state.step);
	const { macroCalorieSelection } = useAdvancedOrderStore((state) => state);

	const [state, setState] = useState({
		statusBar: 0,
		error: false,
		errorMessage: "",
	});

//status bar
	useEffect(() => {
		if (step === 0) {
			setState({ statusBar: "5" });
		} else if (step === 1) {
			setState({ statusBar: "25" });
		} else if (step === 2) {
			setState({ statusBar: "50" });
		} else if (step === 3) {
			setState({ statusBar: "75" });
		} else if (step === 4) {
			setState({ statusBar: "100" });
		}
	}, [step]);



	const renderStepMap = {
		0: <AdvancedStart />,
		1: <AdvancedOrderCalorieMacroSelection />,
		2: macroCalorieSelection === "macros" ? <AdvancedOrderMacroInput /> : <AdvancedOrderCalorieInput />,
		3: <AdvancedOrderMealSetup />,
		4: <AdvancedOrderMealPlanner />,
	};
	const RenderCompFromStep = renderStepMap[step];

	return (
		<div className='advanced-order-container'>
			{step === 3 ? "" : <img className='advanced-order-chef-img' src={flippedChef} />}
			{RenderCompFromStep}
			<div
				style={{
					display: "flex",
					width: "auto",
					marginTop: "10px",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
			</div>
			<div data-preset='stripe' data-value={state.statusBar} id='ldBar' className='ldBar'></div>
		</div>
	);
};
export default AdvancedOrder;
