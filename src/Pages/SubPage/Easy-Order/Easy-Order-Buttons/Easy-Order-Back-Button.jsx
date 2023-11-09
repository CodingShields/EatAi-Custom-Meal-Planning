import { useEasyOrderRenderStore } from "../../../../state-store/RenderStore";
import "../../../.././css/EasyOrder.css";


export const EasyOrderBackButton = () => {
	const previousStep = useEasyOrderRenderStore((state) => state.previousStep);
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
