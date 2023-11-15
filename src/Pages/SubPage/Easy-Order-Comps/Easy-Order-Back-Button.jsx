import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import "../../../css/easyOrder.css";

export const EasyOrderBackButton = () => {
	const previousStep = useRenderStepStore((state) => state.previousStep);
	return (
		<button
			className='easy-order-btn'
			onClick={() => {
				previousStep();
			}}
		>
			Previous
		</button>
	);
};
export default EasyOrderBackButton;
