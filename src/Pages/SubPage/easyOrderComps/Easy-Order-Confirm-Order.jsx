import React from "react";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import "../../../css/easyOrder.css";

const EasyOrderConfirmOrder = () => {
	const increaseStep = useRenderStepStore((state) => state.increaseStep);

	return (
		<>
			<div>
				<h4 className='easy-order-confirmOrder-text'>
					{" "}
					Double Check Your Order Details On The Right. If you see anything you would like to change, just click on the
					Option Title to go back and change. If You are ready to send it off to the Chef, just click "Order Now".
				</h4>
				<h1> Need To Add Option to exclude previous searches??</h1>
				<button className='easy-order-btn' onClick={() => increaseStep()}>
					{" "}
					Order Now
				</button>
			</div>
		</>
	);
};

export default EasyOrderConfirmOrder;
