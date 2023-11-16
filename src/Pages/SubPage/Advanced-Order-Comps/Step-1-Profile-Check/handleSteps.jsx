import React from "react";
import { useRenderSmallStepStore } from "../../../../stateStore/RenderStepStore";

const HandleSteps = () => {
	const resetStep = useRenderSmallStepStore((state) => state.resetStep);
	const increaseStep = useRenderSmallStepStore((state) => state.increaseStep);
	const decreaseStep = useRenderSmallStepStore((state) => state.previousStep);

	const handleNextStep = () => {
		increaseStep();
	};

	const handlePreviousStep = () => {
		decreaseStep();
	};

	const handleResetStep = () => {
		resetStep();
	};
	return (
		<>
			<>
				<button onClick={handlePreviousStep}>Previous Step</button>
			</>
			<>
				<button onClick={handleNextStep}>Next Step</button>
			</>
			<>
				<button onClick={handleResetStep}>Start Over</button>
			</>
		</>
	);
};

export default HandleSteps;
