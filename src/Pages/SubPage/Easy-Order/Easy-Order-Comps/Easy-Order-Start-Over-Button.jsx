import { useEasyOrderRenderStore } from "../../../../state-store/RenderStore"

export const EasyOrderStartOverButton = () => {
    const resetStep = useEasyOrderRenderStore(state => state.resetStep);
    return (
        <button className="easy-order-begin-btn"
            onClick={() => {
                resetStep(); 
            }}
        >
            Start Over
        </button>
    )
}
export default EasyOrderStartOverButton