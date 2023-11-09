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
                    Confirm Selection
                </button>
            </>
        )
}
    export default ConfirmSelectionButton    
