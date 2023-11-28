import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import "../../../css/easyOrder.css";

export const EasyOrderPreviousButton = () => {
	const previousStep = useRenderStepStore((state) => state.previousStep);
	return (
		<button
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
