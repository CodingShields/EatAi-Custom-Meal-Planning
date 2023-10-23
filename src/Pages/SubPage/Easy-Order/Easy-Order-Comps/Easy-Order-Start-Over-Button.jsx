import { useEasyOrderRenderStore } from "../../../../state-store/RenderStore"
import { useEasyOrderStoreActions } from "../../../../state-store/easyOrderStore"


const EasyOrderStartOverButton = () => {
    const resetStep = useEasyOrderRenderStore(state => state.resetStep);
    const {resetForm} = useEasyOrderStoreActions()
    return (
        <button className="easy-order-begin-btn"
            onClick={() => {
                resetStep();
                resetForm();
            }}
        >
            Start Over
        </button>
    )
}
export default EasyOrderStartOverButton