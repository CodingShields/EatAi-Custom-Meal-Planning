import React from "react";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import "../../../css/easyOrder.css";

const EasyOrderConfirmOrder = () => {
	const increaseStep = useRenderStepStore((state) => state.increaseStep);

	return (
		<>
			<div className='easy-order-confirm-container'>
				<p className='easy-order-confirm-order-text'>
					Please double check your order. If you need to make an a change, just click on the Title of the item to go
					back and change your answer.
				</p>
				<p className='easy-order-confirm-order-text'>
					If You are ready to send it off to the Chef, just click "Order Now".
				</p>

				<button className='easy-order-fulfill-order-button' onClick={() => increaseStep()}>
					Order Now
				</button>
			</div>
		</>
	);
};

export default EasyOrderConfirmOrder;
