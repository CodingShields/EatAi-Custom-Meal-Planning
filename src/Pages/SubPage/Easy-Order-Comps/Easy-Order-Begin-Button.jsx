import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import "../../../css/easyOrder.css";

export const EasyOrderBeginButton = () => {
	const { increaseStep } = useRenderStepStore();
	return (
		<button className='easy-order-btn' onClick={increaseStep}>
			Begin
		</button>
	);
};
export default EasyOrderBeginButton;
