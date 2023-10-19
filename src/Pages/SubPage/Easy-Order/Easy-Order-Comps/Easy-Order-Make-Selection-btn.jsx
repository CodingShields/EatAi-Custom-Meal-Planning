import { useAppStore } from "../../../../store/appStore"


export const EasyOrderMakeSelectionButton = () => {
    const {increaseStep} =useAppStore()
    return (
        <button className="easy-order-make-selection-btn"
            onClick={increaseStep}
        >
            Make Selection
        </button>
    )
}
export default EasyOrderMakeSelectionButton