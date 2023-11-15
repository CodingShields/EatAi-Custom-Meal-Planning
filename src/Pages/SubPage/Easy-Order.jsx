import React from "react";
import flippedChef from "../../assets/images/flippedChef.png";
import EasyOrderBegin from "./Easy-Order-Comps/Easy-Order-Begin";
import EasyOrderCourse from "./Easy-Order-Comps/Easy-Order-Course";
import EasyOrderDietary from "./Easy-Order-Comps/Easy-Order-Dietary";
import EasyOrderHeadCount from "./Easy-Order-Comps/Easy-Order-Head-Count";
import EasyOrderEvents from "./Easy-Order-Comps/Easy-Order-Events";
// import EasyOrderBeverage from "./easyOrderComps/Easy-Order-Beverage";
// import EasyOrderCookTime from "./easyOrderComps/Easy-Order-Cook-Time";
// import EasyOrderDessertFlavor from "./easyOrderComps/Easy-Order-Dessert-Flavor";
import EasyOrderMealBalance from "./Easy-Order-Comps/Easy-Order-Meal-Balance";
// import EasyOrderHowToCook from "./easyOrderComps/Easy-Order-How-To-Cook";
// import EasyOrderSeasonalOptions from "./easyOrderComps/Easy-Order-Seasonal-Options";
import EasyOrderCulturalOptions from "./Easy-Order-Comps/Easy-Order-Cultural-Options";
import EasyOrderStartOverButton from "./Easy-Order-Comps/Easy-Order-Start-Over-Button";
import EasyOrderBackButton from "./Easy-Order-Comps/Easy-Order-Back-Button";
import EasyOrderUserSelection from "./Easy-Order-Comps/Easy-Order-User-Selection";
import EasyOrderMeasure from "./Easy-Order-Comps/Easy-Order-Measure";
import EasyOrderHowToFlavor from "./Easy-Order-Comps/Easy-Order-How-To-Flavor";
import EasyOrderConfirmOrder from "./Easy-Order-Comps/Easy-Order-Confirm-Order";
import EasyOrderFulfilled from "./Easy-Order-Comps/Easy-Order-Fulfilled";
import { useRenderStepStore } from "../../stateStore/RenderStepStore";
const EasyOrderForm = () => {
	const step = useRenderStepStore((state) => state.step);

	const renderStepMap = {
		0: <EasyOrderBegin />,
		1: <EasyOrderEvents />,
		2: <EasyOrderCulturalOptions />,
		3: <EasyOrderHeadCount />,
		4: <EasyOrderCourse />,
		5: <EasyOrderDietary />,
		6: <EasyOrderHowToFlavor />,
		7: <EasyOrderMealBalance />,
		// 8: <EasyOrderCookTime />,
		// 9: <EasyOrderHowToCook />,
		8: <EasyOrderMeasure />,
		// 11: <EasyOrderSeasonalOptions />,
		// 12: <EasyOrderDessertFlavor />,
		// 13: <EasyOrderBeverage />,
		9: <EasyOrderConfirmOrder />,
		10: <EasyOrderFulfilled />,
	};

	const RenderCompFromStep = renderStepMap[step];
	
	return (
		<div className='easy-order-container'>
			<div className='easy-order-chef-img-container'>
				<img className='chef-img' src={flippedChef} alt='Chef' />
			</div>
			<div className='easy-order-chef-bubble-container'>
				{RenderCompFromStep}
				<div className='easy-order-btn-container'>
					<EasyOrderStartOverButton />
					<EasyOrderBackButton />
				</div>
			</div>
			<EasyOrderUserSelection />
		</div>
	);
};
export default EasyOrderForm;
