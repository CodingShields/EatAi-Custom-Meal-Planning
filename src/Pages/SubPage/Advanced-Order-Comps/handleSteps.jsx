import React, { useState, useEffect } from "react";
import { useRenderSmallStepStore } from "../../../stateStore/RenderStepStore";
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore";

const HandleSteps = () => {
	const step = useRenderSmallStepStore((state) => state.step);
	const resetStep = useRenderSmallStepStore((state) => state.resetStep);
	const increaseStep = useRenderSmallStepStore((state) => state.increaseStep);
	const decreaseStep = useRenderSmallStepStore((state) => state.previousStep);
	const resetForm = useAdvancedOrderProfileStoreActions((actions) => actions.resetForm);
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		navError: false,
	});

	const handleNextStep = () => {
		if (step > 5) {
			setState({ ...state, navError: true, errorMessage: "You are at the end" });
		} else {
			increaseStep();
		}
	};

	const handlePreviousStep = () => {
		if (step < 0) {
			setState({ ...state, navError: true, errorMessage: "You are at the beginning" });
		} else {
			decreaseStep();
		}
	};

	const handleResetStep = () => {
		console.log("clicked");
		resetStep();
		resetForm();
	};
	return (
		<div className='adv-order-handle-step-btn-container'>
			<button
				className='adv-order-handle-step-btn-left'
				disabled={step === 0 ? true : false}
				onClick={handlePreviousStep}
			>
				Previous Step
			</button>

			<button
				className='adv-order-handle-step-btn-middle'
				disabled={step === 5 ? true : false}
				onClick={handleNextStep}
			>
				Next Step
			</button>

			<button
				disabled={step === 0 ? true : false}
				className='adv-order-handle-step-btn-right'
				onClick={handleResetStep}
			>
				Start Over
			</button>
		</div>
	);
};

export default HandleSteps;
