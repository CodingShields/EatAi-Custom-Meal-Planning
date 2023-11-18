import React, { useState, useEffect } from "react";
import { useRenderSmallStepStore } from "../../../stateStore/RenderStepStore";
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore";
import { useAdvancedOrderProfileStore } from "../../../stateStore/AdvancedOrderProfileStore";
import "../../../css/errorModal.css";

const HandleSteps = () => {
	const preferredUnit = useAdvancedOrderProfileStore((state) => state.preferredUnit);
	const weight = useAdvancedOrderProfileStore((state) => state.weight);
	const height = useAdvancedOrderProfileStore((state) => state.height);
	const age = useAdvancedOrderProfileStore((state) => state.age);
	const gender = useAdvancedOrderProfileStore((state) => state.gender)
	const step = useRenderSmallStepStore((state) => state.step);
	const resetStep = useRenderSmallStepStore((state) => state.resetStep);
	const increaseStep = useRenderSmallStepStore((state) => state.increaseStep);
	const decreaseStep = useRenderSmallStepStore((state) => state.previousStep);
	const {resetForm} = useAdvancedOrderProfileStoreActions((actions) => actions.resetForm);
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		nextStepDisabled: true,
		previousStep: false,
		resetStep: false,
	});
	const initializeState = () => {
		setState({
			error: false,
			errorMessage: "",
			nextStepDisabled: true,
			previousStep: false,
			resetStep: false,
		});
	}
	

	useEffect(() => {
		if (weight === 0 && preferredUnit === "") {
			setState({ ...state, error: true, errorMessage: "Please select a preferred unit of measurement and enter a weight" });
		} else if (weight === 0) {
			setState({ ...state, error: true, errorMessage: "Please enter a weight" });
		} else if (preferredUnit === "") {
			setState({ ...state, error: true, errorMessage: "Please select a unit" });
		}else if (height === 0) {
			setState({ ...state, error: true, errorMessage: "Please select a preferred unit of measurement and enter a height" });
		} else {
			setState({ ...state, error: false, errorMessage: "", nextStepDisabled: false });
		}
	}, [weight, preferredUnit, height]);
		
	

	const handleNextStep = () => {
		if (step > 5) {
			setState({ ...state, navError: true, errorMessage: "You are at the end" });
		} else if (preferredUnit === "" && weight === 0) {
			setState({ ...state, nextStep: true, errorMessage: "Please select a unit and enter a weight" });
			console.log(state.errorMessage);
		} else {
			increaseStep();
		}
		console.log("next step");
	};

	const handlePreviousStep = () => {
		if (step < 0) {
			setState({ ...state, error: true, errorMessage: "You are at the beginning" });
		} else {
			decreaseStep();
		}
		console.log("previous step");
	};

	const handleResetStep = () => {
		console.log(weight,"weight", preferredUnit, "preferredUnit");
		resetStep();
		resetForm();
		initializeState();
	};

		const handleCloseModal = () => {
			setState({ ...state, error: false, errorMessage: "" });
		};
	return (
		<div className='adv-order-handle-step-btn-container'>
			{state.error ? (
				<div className='start-error-container-modal'>
					<div className='start-error-content'>
						<button onClick={handleCloseModal} className='start-close-modal-btn'>
							Close X
						</button>
						<p>{state.errorMessage}</p>
					</div>
				</div>
			) : null}
			<button
				className='adv-order-handle-step-btn-left'
				disabled={step === 0 ? true : false}
				onClick={handlePreviousStep}
			>
				Previous Step
			</button>

			<button
				className='adv-order-handle-step-btn-middle'
				disabled={state.nextStepDisabled ? true : false}
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
