import React, { useEffect, useState } from "react";
//components
import AdvancedStart from "./Advanced-Order-Comps/advancedStart.jsx";
import AdvancedOrderCalorieMacroSelection from "./Advanced-Order-Comps/calorieMacroSelection.jsx";
import AdvancedOrderMealSetup from "./Advanced-Order-Comps/MealSetup.jsx";
import AdvancedOrderMealPlanner from "./Advanced-Order-Comps/mealPlanner.jsx";
import AdvancedOrderCalorieInput from "./Advanced-Order-Comps/calorieInput.jsx";
import AdvancedOrderMacroInput from "./Advanced-Order-Comps/macroInput.jsx";
//main comps
import ProfileSearch from "./Advanced-Order-Comps/ProfileSearch.jsx";
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
import LiveTyping from "../../comp/LiveTyping.jsx";
import SearchingIcon from "../../comp/SearchingIcon.jsx";
//buttons
import HandleSteps from "./Advanced-Order-Comps/handleSteps.jsx";
import flippedChef from "../../assets/images/flippedChef.png";
import advancedOrderingBG4 from "../../assets/images/advancedOrderingBG4.jpeg";
const AdvancedOrder = () => {
	const step = useRenderSmallStepStore((state) => state.step);

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
	});
	const defaultChefMessage = "Welcome, I am ChefAi. Lets get started!";
	const [chefMessage, setChefMessage] = useState("Welcome, I am ChefAi. Lets get started!");

	const renderStepMap = {
		0: <ProfileReview />,
	};
	const renderStepMapNewProfileSetup = {
		0: <BuildWeight />,
		1: <BuildHeight />,
		2: <AgeGender />,
		3: <BuildGoal />,
		4: <ProfileReview />,
	};
	const RenderCompFromStep = renderStepMap[step];

	const RenderNoProfileSetup = renderStepMapNewProfileSetup[step];

	const handleConfirm = () => {
		setState({ ...state, buildProfile: true, profileSearch: false });
	};

	const handleNewChefMessage = (message) => {
		const newMessage = message;
		console.log(newMessage);
		setChefMessage(newMessage);
	};

	return (
		<div className='w-full h-full flex flex-col justify-center items-center my-auto py-24'>
			<img src={advancedOrderingBG4} alt='chef' className='w-full h-[1250px] absolute object-cover -z-10' />
			<div className='grid grid-cols-2 my-auto w-3/4 h-full '>
				<div className='flex flex-row w-fit h-[1000px] my-auto px-12'>
					<img src={flippedChef} alt='chef' className='w-[500px] my-auto opacity-90' />
					<div className='text-3xl mt-36 border-2 border-black w-[600px] h-fit rounded-2xl bg-slate-200 shadow-2xl shadow-white/50 px-4 py-4'>
						<LiveTyping message={chefMessage} speed={50} />
					</div>
				</div>
				<div className='flex flex-col justify-start items-start w-fit h-fit space-y-4'>
					<div className='bg-black/70 py-8 px-24 rounded-2xl shadow-2xl shadow-white/50 mt-24'>
						<h1 className='text-center text-5xl font-thin uppercase text-white underline underline-offset-8 decoration-0 whitespace-nowrap'>
							Welcome To Advanced Ordering
						</h1>
						<h1 className='text-white text-2xl my-4'> Here is what we can do here ......</h1>
					</div>
					<ProfileSearch handleConfirm={handleConfirm} updateMessage={handleNewChefMessage} />
				</div>

				{/* {RenderNoProfileSetup}
				<HandleSteps /> */}
			</div>
		</div>
	);
};
export default AdvancedOrder;
