import React from "react";
import { useEasyOrderStore } from "../../../stateStore/easyOrderStore";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import "../../../css/easyOrder.css";
import "../../../css/errorModal.css";
import windowCloseBtn from "../../../assets/images/windowCloseBtn.svg";

const EasyOrderUserSelection = () => {
	const culture = useEasyOrderStore((state) => state.culture);
	const event = useEasyOrderStore((state) => state.event);
	const headCount = useEasyOrderStore((state) => state.headCount);
	const courses = useEasyOrderStore((state) => state.courses);
	const dietary = useEasyOrderStore((state) => state.dietary);
	const flavor = useEasyOrderStore((state) => state.flavor);
	const mealBalance = useEasyOrderStore((state) => state.balance);
	const measure = useEasyOrderStore((state) => state.measure);
	const step = useRenderStepStore((state) => state.step);

	const [state, setState] = React.useState({
		error: false,
		errorMessage: "",
		confirmOrder: false,
	});

	const formatCoursesOptions = () => {
		if (Array.isArray(courses)) {
			return courses.join(", ");
		} else {
			return "";
		}
	};
	const formatDietaryOptions = () => {
		if (Array.isArray(dietary)) {
			return dietary.join(", ");
		} else {
			return "";
		}
	};
	const handleCompleteOrder = () => {
		setState({ ...state, confirmOrder: true });
	};
	return (
		<div className='easy-order-user-selection-container'>
			<h1 className='easy-order-selection-title'>Current Selections</h1>
			{state.error ? (
				<div className='error-container'>
					<div className='error-content'>
						<p className='error-message'>{state.errorMessage}</p>
						<img
							className='error-btn'
							src={windowCloseBtn}
							onClick={() => setState({ ...state, error: false, errorMessage: "" })}
						/>
					</div>
				</div>
			) : (
				""
			)}
			<div className='easy-order-user-selection-container-main'>
				<div className='easy-order-list-single-col-left '>
					<p className='user-input-text-click' onClick={() => useRenderStepStore.setState({ step: 1 })}>
						Event:
					</p>
					<p className='user-input-text-click' onClick={() => useRenderStepStore.setState({ step: 2 })}>
						Cultural:
					</p>
					<p className='user-input-text-click' onClick={() => useRenderStepStore.setState({ step: 3 })}>
						HeadCount:
					</p>
					<p className='user-input-text-click' onClick={() => useRenderStepStore.setState({ step: 4 })}>
						Courses:
					</p>
					<p className='user-input-text-click' onClick={() => useRenderStepStore.setState({ step: 5 })}>
						Dietary:
					</p>
					<p className='user-input-text-click' onClick={() => useRenderStepStore.setState({ step: 6 })}>
						Desired Flavor:
					</p>
					<p className='user-input-text-click' onClick={() => useRenderStepStore.setState({ step: 7 })}>
						Meal Balance:
					</p>
					<p className='user-input-text-click' onClick={() => useRenderStepStore.setState({ step: 8 })}>
						Measurement:
					</p>
				</div>
				<div className='easy-order-list-single-col-right'>
					<p className='user-input-text'>{event}</p>
					<p className='user-input-text'>{culture}</p>
					<p className='user-input-text'>{headCount} </p>
					<p className='user-input-text'>{formatCoursesOptions()}</p>
					<p className='user-input-text'>{formatDietaryOptions()}</p>
					<p className='user-input-text'>{flavor}</p>
					<p className='user-input-text'>{mealBalance}</p>
					<p className='user-input-text'>{measure}</p>
				</div>
			</div>
			{!state.confirmOrder ? <button className='easy-order-fulfill-order-button' onClick={handleCompleteOrder}>
				Complete Order
			</button>: ""}
		</div>
	);
};
export default EasyOrderUserSelection;
