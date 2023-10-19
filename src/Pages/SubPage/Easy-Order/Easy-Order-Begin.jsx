import React from "react"
import LiveTypingEasyOrder from "../Live-Typing-Pages/Live-Typing-Easy-Order"
import EasyOrderBeginButton from "./Easy-Order-Comps/Easy-Order-Begin-Button"
import { useAppStore } from "../../../store/appStore"

const EasyOrderBegin = () => {
  const step = useAppStore((state) => state.step[0]);

return(
    <>
        <LiveTypingEasyOrder fontSize="28px" />
        <EasyOrderBeginButton />
    </>

)

}
export default EasyOrderBegin