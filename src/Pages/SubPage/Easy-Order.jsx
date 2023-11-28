import { useEffect, useState } from "react";

import EasyOrderStartConfirmButton from "./Easy-Order-Comps/Easy-Order-Start-Confirm-Button";
import flippedChef from "../../assets/images/flippedChef.png";
import EasyOrderBegin from "./Easy-Order-Comps/Easy-Order-Begin";
import EasyOrderCourses from "./Easy-Order-Comps/Easy-Order-Courses";
import EasyOrderDietary from "./Easy-Order-Comps/Easy-Order-Dietary";
import EasyOrderHeadCount from "./Easy-Order-Comps/Easy-Order-Head-Count";
import EasyOrderEvents from "./Easy-Order-Comps/Easy-Order-Events";
import EasyOrderMealBalance from "./Easy-Order-Comps/Easy-Order-Meal-Balance";
import EasyOrderCulturalOptions from "./Easy-Order-Comps/Easy-Order-Cultural-Options";
import EasyOrderStartOverButton from "./Easy-Order-Comps/Easy-Order-Start-Over-Button";
import EasyOrderPreviousButton from "./Easy-Order-Comps/Easy-Order-Previous-Button";
import EasyOrderUserSelection from "./Easy-Order-Comps/Easy-Order-User-Selection";
import EasyOrderMeasure from "./Easy-Order-Comps/Easy-Order-Measure";
import EasyOrderHowToFlavor from "./Easy-Order-Comps/Easy-Order-How-To-Flavor";
import EasyOrderConfirmOrder from "./Easy-Order-Comps/Easy-Order-Confirm-Order";
import EasyOrderFulfilled from "./Easy-Order-Comps/Easy-Order-Fulfilled";
import { useRenderStepStore } from "../../stateStore/RenderStepStore";
const EasyOrderForm = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		reviewOrder: false,
	});
	const step = useRenderStepStore((state) => state.step);

	useEffect(() => {
		if(step === 9){
			setState({...state, reviewOrder: true})
		}
	}, [step]);

	const renderStepMap = {
		0: <EasyOrderBegin />,
		1: <EasyOrderEvents />,
		2: <EasyOrderCulturalOptions />,
		3: <EasyOrderHeadCount />,
		4: <EasyOrderCourses />,
		5: <EasyOrderDietary />,
		6: <EasyOrderHowToFlavor />,
		7: <EasyOrderMealBalance />,
		8: <EasyOrderMeasure />,
		9: <EasyOrderConfirmOrder />,
		10: <EasyOrderFulfilled />,
	};

	const RenderCompFromStep = renderStepMap[step];
	console.log(RenderCompFromStep, "RenderCompFromStep");

	return (
		<div className='easy-order-container-main'>
			<div className='easy-order-comp-container'>
				<div className='easy-order-chef-img-container'>
					<img className='easy-order-chef-img' src={flippedChef} alt='Chef' />
				</div>
				<div className='easy-order-menu-container'>
					{RenderCompFromStep}
					<div className='easy-order-btn-container'>
						<EasyOrderPreviousButton />
						<EasyOrderStartOverButton />
						<EasyOrderStartConfirmButton />
					</div>
				</div>
				<div>
					{state.reviewOrder ? (
						<div className='easy-order-user-selection-container-main'>
							<EasyOrderUserSelection />
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};
export default EasyOrderForm;
