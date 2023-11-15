import React from "react";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";


const AdvancedOrderBeginButton = () => {

    const { increaseStep } = useRenderStepStore((state) => state);


    return (
			<>
				<button className='advanced-order-btn' onClick={increaseStep}>
					Begin
				</button>
			</>
		);
}
    export default AdvancedOrderBeginButton
