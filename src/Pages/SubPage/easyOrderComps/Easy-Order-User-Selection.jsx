import React from "react";
import { useEasyOrderStore } from "../../../stateStore/easyOrderStore"
import "../../../css/easyOrder.css";

const EasyOrderUserSelection = () => {
	const culture = useEasyOrderStore((state) => state.Culture);
	const event = useEasyOrderStore((state) => state.Event);
	const headcount = useEasyOrderStore((state) => state.HeadCount);
	const courses = useEasyOrderStore((state) => state.Courses);
	const dietary = useEasyOrderStore((state) => state.Dietary);
	const flavor = useEasyOrderStore((state) => state.Flavor);
	const mealBalance = useEasyOrderStore((state) => state.Balance);
	// const cookTime = useEasyOrderStore((state) => state.CookTime);
	// const howToCook = useEasyOrderStore((state) => state.HowToCook);
	// const dessert = useEasyOrderStore((state) => state.Dessert);
	// const seasonal = useEasyOrderStore((state) => state.Seasonal);
	// const beverage = useEasyOrderStore((state) => state.Beverage);
	const measure = useEasyOrderStore((state) => state.Measure);

	const formatCoursesOptions = () => {
		if (Array.isArray(courses)) {
			// Join the selected options into a comma-separated string
			return courses.join(", ");
		} else {
			return ""; // or some other default value if courses is not an array
		}
	};
	const formatDietaryOptions = () => {
		if (Array.isArray(dietary)) {
			// Join the selected options into a comma-separated string
			return dietary.join(", ");
		} else {
			return ""; // or some other default value if courses is not an array
		}
	};

	return (
		<div className='easy-order-user-selection-container'>
			<h1 className='easy-order-selection-title'>Current Selections</h1>
			<div className='user-selection-container'>
				<button className='confirmed-selection-button' onClick={() => useEasyOrderRenderStore.setState({ step: 1 })}>
					Event:
				</button>
				<>
					<span className='user-input-text'>{event}</span>
				</>
				<button className='confirmed-selection-button' onClick={() => useEasyOrderRenderStore.setState({ step: 2 })}>
					Cultural:
				</button>
				<>
					<span className='user-input-text'>{culture}</span>
				</>
				<button className='confirmed-selection-button' onClick={() => useEasyOrderRenderStore.setState({ step: 3 })}>
					HeadCount:
				</button>
				<>
					<span className='user-input-text'>{headcount} </span>
				</>
				<button className='confirmed-selection-button' onClick={() => useEasyOrderRenderStore.setState({ step: 4 })}>
					Courses:
				</button>
				<>
					<span className='user-input-text'>{formatCoursesOptions()}</span>
				</>
				<button className='confirmed-selection-button' onClick={() => useEasyOrderRenderStore.setState({ step: 5 })}>
					Dietary:
				</button>
				<>
					<span className='user-input-text'>{formatDietaryOptions()}</span>
				</>
				<button className='confirmed-selection-button' onClick={() => useEasyOrderRenderStore.setState({ step: 6 })}>
					Desired Flavor:
				</button>
				<>
					<span className='user-input-text'>{flavor}</span>
				</>
				<button className='confirmed-selection-button' onClick={() => useEasyOrderRenderStore.setState({ step: 7 })}>
					Meal Balance:
				</button>
				<>
					<span className='user-input-text'>{mealBalance}</span>
				</>
				{/* <button className="confirmed-selection-button" onClick={() => useEasyOrderRenderStore.setState({ step: 8 })}>Cook Time:</button> 
        <>
        <span className="user-input-text">{cookTime}</span>
        </> */}
				{/* <button className="confirmed-selection-button" onClick={() => useEasyOrderRenderStore.setState({ step: 9 })}>How To Cook:</button>
        <>
        <span className="user-input-text">{howToCook}</span>
        </> */}
				<button className='confirmed-selection-button' onClick={() => useEasyOrderRenderStore.setState({ step: 8 })}>
					Measurement:
				</button>
				<>
					<span className='user-input-text'>{measure}</span>
				</>
				{/* <button className="confirmed-selection-button" onClick={() => useEasyOrderRenderStore.setState({ step: 11 })}>Seasonal:</button>
        <>
        <span className="user-input-text">{seasonal}</span>
        </> */}
				{/* <button className="confirmed-selection-button" onClick={() => useEasyOrderRenderStore.setState({ step: 12 })}>Dessert:</button>
        <>
        <span className="user-input-text">{dessert}</span>
        </> */}
				{/* <button className="confirmed-selection-button" onClick={() => useEasyOrderRenderStore.setState({ step: 13 })}>Beverages:</button>
        <>
        <span className="user-input-text">{beverage}</span>
        </> */}
				<button className='confirmed-selection-button' onClick={() => useEasyOrderRenderStore.setState({ step: 9 })}>
					Review Order
				</button>
				<>
					<button className='confirmed-selection-button' onClick={() => useEasyOrderRenderStore.setState({ step: 10 })}>
						Order Fulfillment
					</button>
				</>
			</div>
		</div>
	);
};
export default EasyOrderUserSelection;
