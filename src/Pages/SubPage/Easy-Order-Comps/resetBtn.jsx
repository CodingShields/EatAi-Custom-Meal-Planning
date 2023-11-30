import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import "../../../css/easyOrder.css";

const resetBtn = () => {
	const step = useRenderStepStore((state) => state.step);
	const resetStep = useRenderStepStore((state) => state.resetStep);
	const { resetForm } = useEasyOrderStoreActions();

	const handleOnClick = () => {
		resetStep();
		resetForm();
	};

	return (
		<button
			disabled={step === 0 ? true : false}
			className='easy-order-reset-btn' onClick={handleOnClick}>
			Reset
		</button>
	);
};
export default resetBtn
