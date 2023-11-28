import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import "../../../css/easyOrder.css";

const EasyOrderStartOverButton = () => {
	const resetStep = useRenderStepStore((state) => state.resetStep);
	const { resetForm } = useEasyOrderStoreActions();

	const handleOnClick = () => {
		resetStep();
		resetForm();
	};

	return (
		<button className='easy-order-reset-btn' onClick={handleOnClick}>
			Reset
		</button>
	);
};
export default EasyOrderStartOverButton;
