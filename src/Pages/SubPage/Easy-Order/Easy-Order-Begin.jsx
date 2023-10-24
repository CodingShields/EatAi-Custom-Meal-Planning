import React from "react"
import LiveTypingEasyOrder from "../Live-Typing-Pages/Live-Typing-Easy-Order"
import EasyOrderBeginButton from "./Easy-Order-Buttons/Easy-Order-Begin-Button" 
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore"

const EasyOrderBegin = () => {
  const step = useEasyOrderRenderStore((state) => state.step[0]);

return(
    <>
        <LiveTypingEasyOrder fontSize="28px" />
        <EasyOrderBeginButton />
    </>

)

}
export default EasyOrderBegin