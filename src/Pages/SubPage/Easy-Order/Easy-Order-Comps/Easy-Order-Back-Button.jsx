import { useAppStore } from "../../../../store/appStore"

export const EasyOrderBackButton = () => {
    const previousStep = useAppStore(state => state.previousStep);
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