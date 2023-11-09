import React from "react";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import { useAdvancedOrderStoreActions } from "../../../stateStore/AdvancedOrderStore";

const AdvancedOrderResetButton = () => {

	const  resetStep  = useRenderStepStore((state) => state.resetStep);
	const { resetForm } = useAdvancedOrderStoreActions();
	const clearLocalStorage = () => {
		localStorage.clear();
	};
	
	return (
		<>
			<button
				className='advanced-order-btn'
				onClick={() => {
					resetStep();
					resetForm();
					clearLocalStorage();
				}}
			>
				Start Over
			</button>
		</>
	);
};
export default AdvancedOrderResetButton
