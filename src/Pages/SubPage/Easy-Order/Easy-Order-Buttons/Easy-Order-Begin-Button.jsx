import { useEasyOrderRenderStore } from "../../../../state-store/RenderStore";
import "../../../.././css/EasyOrder.css";

export const EasyOrderBeginButton = () => {
	const { increaseStep } = useEasyOrderRenderStore();
	return (
		<button className='easy-order-btn' onClick={increaseStep}>
			Begin
		</button>
	);
};
export default EasyOrderBeginButton;
