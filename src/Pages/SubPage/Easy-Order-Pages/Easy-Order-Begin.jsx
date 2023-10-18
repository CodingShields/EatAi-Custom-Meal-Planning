import React from "react"
import LiveTypingEasyOrder from "../Live-Typing-Pages/Live-Typing-Easy-Order"
import { EasyOrderAddNextStepButton } from "./Easy-Order-Add-Next-Step-Button"

const EasyOrderBegin = () => {

    
return(
    <div
        className="easy-order-live-text-div">
        <LiveTypingEasyOrder fontSize="28px" />
        <EasyOrderAddNextStepButton />
    </div>

)

}
export default EasyOrderBegin