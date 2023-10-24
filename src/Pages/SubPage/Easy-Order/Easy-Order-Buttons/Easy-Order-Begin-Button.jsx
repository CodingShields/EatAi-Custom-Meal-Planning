import { useEasyOrderRenderStore } from "../../../../state-store/RenderStore"


export const EasyOrderBeginButton = () => {
    const {increaseStep} =useEasyOrderRenderStore()
    return (
        <button className="easy-order-begin-btn"
            onClick={increaseStep}
        >
            Begin
        </button>
    )
}
export default EasyOrderBeginButton