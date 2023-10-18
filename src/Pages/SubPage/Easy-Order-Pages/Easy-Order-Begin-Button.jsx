import { useAppStore } from "../../../store/appStore"


export const EasyOrderBeginButton = () => {
    const {increaseStep} =useAppStore()
    return (
        <button className="easy-order-begin-btn"
            onClick={increaseStep}
        >
            Begin
        </button>
    )
}
export default EasyOrderBeginButton