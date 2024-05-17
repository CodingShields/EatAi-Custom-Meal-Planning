import { useRenderStepStore } from "../../../stateStore/RenderStepStore";

export const EasyOrderPreviousButton = () => {
	const previousStep = useRenderStepStore((state) => state.previousStep);
	const step = useRenderStepStore((state) => state.step);
	return (
		<button
			disabled={step === 10 || step === 0 ? true : false}
			className='easy-order-previous-btn'
			onClick={() => {
				previousStep();
			}}
		>
			Previous
		</button>
	);
};
export default EasyOrderPreviousButton;
