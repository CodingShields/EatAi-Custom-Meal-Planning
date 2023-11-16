import React from "react";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";


const ConfirmSelectionButton = () => {

    const { increaseStep } = useRenderStepStore((state) => state);

        return (
            <>
                <button
                    className="advanced-order-btn"
                    onClick={increaseStep}
                >
                    Next
                </button>
            </>
        )
}
    export default ConfirmSelectionButton    
