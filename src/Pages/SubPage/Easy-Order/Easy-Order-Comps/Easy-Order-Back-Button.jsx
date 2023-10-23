import { useEasyOrderRenderStore } from "../../../../state-store/RenderStore"

export const EasyOrderBackButton = () => {
    const previousStep = useEasyOrderRenderStore(state => state.previousStep);
    return (
        <button className="easy-order-begin-btn"
            onClick={() => {
                previousStep(); 
            }}
        >
            Previous
        </button>
    )
}
export default EasyOrderBackButton