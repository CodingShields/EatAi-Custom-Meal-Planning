import React from "react";
import flippedChef from "../../assets/images/flippedChef.png";
import AdvancedStart from "./advancedOrderComps/advancedStart";
import AdvancedOrderCalorieMacroSelection from "./advancedOrderComps/advancedOrderCalorieMacroSelection";
import AdvancedOrderMealSetup from "./advancedOrderComps/advancedOrderMealSetup";
import AdvancedOrderMealPlanner from "./advancedOrderComps/advancedOrderMealPlanner";

import { useRenderStepStore } from "../../stateStore/RenderStepStore";
//Buttons
import AdvancedOrderBeginButton from "./advancedOrderComps/advancedOrderBeginButton";
import AdvancedOrderResetButton from "./advancedOrderComps/advancedOrderStartOverButton";
import AdvancedOrderPreviousButton from "./advancedOrderComps/advancedOrderPreviousButton";


import "../../css/advancedOrder.css";
const AdvancedOrder = () => {

    const step = useRenderStepStore((state) => state.step);

    const renderStepMap =
    {
        0: <AdvancedStart />,
        1: <AdvancedOrderCalorieMacroSelection />,
		2: <AdvancedOrderMealSetup />,
		3: <AdvancedOrderMealPlanner />
    }
    const RenderCompFromStep = renderStepMap[step];


    return (
			<div className='advanced-order-container'>
				{step === 3 ? "": <img className='advanced-order-chef-img' src={flippedChef} />}
				<div className='advanced-order-render-comp-container'>
					{RenderCompFromStep}
					<div className='advanced-order-button-container'>
						
						{step === 0 ? <AdvancedOrderBeginButton /> : null}
						{step != 0 ? <AdvancedOrderResetButton /> : null}
						{step != 0 ? <AdvancedOrderPreviousButton /> : null}
					</div>
				</div>
			</div>
		);
}
    export default AdvancedOrder