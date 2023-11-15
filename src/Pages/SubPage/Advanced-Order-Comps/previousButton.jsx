import React from "react";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";

const PreviousButton = () => {
	const { previousStep } = useRenderStepStore((state) => state);
	
  return (
		<button className='advanced-order-btn' onClick={previousStep}>
			Previous
		</button>
	);
}
export default PreviousButton