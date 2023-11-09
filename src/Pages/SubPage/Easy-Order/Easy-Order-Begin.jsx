import React from "react"
import LiveTypingEasyOrder from "../Live-Typing-Pages/Live-Typing-Easy-Order"
import EasyOrderBeginButton from "./Easy-Order-Buttons/Easy-Order-Begin-Button"
import "../../.././css/EasyOrder.css" 

const EasyOrderBegin = () => {


return(
    <>
    <LiveTypingEasyOrder fontSize="28px" />
    
        <EasyOrderBeginButton />
    </>

)

}
export default EasyOrderBegin