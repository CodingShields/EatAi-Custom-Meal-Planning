import { useEasyOrderRenderStore } from "../../../../state-store/RenderStore"
import { useEasyOrderStoreActions } from "../../../../state-store/easyOrderStore"
import "../../../.././css/EasyOrder.css";


const EasyOrderStartOverButton = () => {
    const resetStep = useEasyOrderRenderStore(state => state.resetStep);
    const { resetForm } = useEasyOrderStoreActions()
    const clearLocalStorage = () => {
    localStorage.clear();
  };
    return (
        <button className="easy-order-btn"
            onClick={() => {
                resetStep();
                resetForm();
                clearLocalStorage();
            }}
        >
            Start Over
        </button>
    )
}
export default EasyOrderStartOverButton