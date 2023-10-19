import { useAppStore } from "../../../store/appStore"

export const EasyOrderStartOverButton = () => {
    const resetStep = useAppStore(state => state.resetStep);
    // console.log(resetStep);
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