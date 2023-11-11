import React from "react";
import flippedChef from "../../assets/images/flippedChef.png";
import AdvancedStart from "./advancedOrderComps/advancedStart";
import AdvancedOrderCalorieMacroSelection from "./advancedOrderComps/advancedOrderCalorieMacroSelection";
import AdvancedOrderMealSetup from "./advancedOrderComps/advancedOrderMealSetup";
import AdvancedOrderMealPlanner from "./advancedOrderComps/advancedOrderMealPlanner";

import { useRenderStepStore } from "../../stateStore/RenderStepStore";
//Buttons
import AdvancedOrderResetButton from "./advancedOrderComps/advancedOrderStartOverButton";
import AdvancedOrderPreviousButton from "./advancedOrderComps/advancedOrderPreviousButton";
import ConfirmSelectionButton from "./advancedOrderComps/confirmSelectionStepButton"

import "../../css/advancedOrder.css";
import AdvancedOrderCalorieInput from "./advancedOrderComps/calorieInput";
const AdvancedOrder = () => {

    const step = useRenderStepStore((state) => state.step);

    const renderStepMap =
    {
        0: <AdvancedStart />,
		1: <AdvancedOrderCalorieMacroSelection />,
		2: <AdvancedOrderCalorieInput />,
		3: <AdvancedOrderMealSetup />,
		4: <AdvancedOrderMealPlanner />
    }
    const RenderCompFromStep = renderStepMap[step];

console.log(step, "RenderCompFromStep");
    return (
			<div className='advanced-order-container'>
				{step === 3 ? "" : <img className='advanced-order-chef-img' src={flippedChef} />}
				
				<div className='advanced-order-render-comp-container'>
					{RenderCompFromStep}
					
					{step != 0 ? <div className='advanced-order-btn-container'>
						<ConfirmSelectionButton /> 
						<AdvancedOrderResetButton /> 
						<AdvancedOrderPreviousButton /> 
					</div> : ""}
				</div>
			</div>
		);
}
    export default AdvancedOrder