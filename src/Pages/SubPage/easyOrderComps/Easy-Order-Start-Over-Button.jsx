import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import "../../../css/easyOrder.css";

const EasyOrderStartOverButton = () => {
	const resetStep = useRenderStepStore((state) => state.resetStep);
	const { resetForm } = useEasyOrderStoreActions();
	const clearLocalStorage = () => {
		localStorage.clear();
	};
	return (
		<button
			className='easy-order-btn'
			onClick={() => {
				resetStep();
				resetForm();
				clearLocalStorage();
			}}
		>
			Start Over
		</button>
	);
};
export default EasyOrderStartOverButton;
