import React from "react"
import LiveTypingEasyOrder from "../Live-Typing-Pages/Live-Typing-Easy-Order"
import EasyOrderBeginButton from "./Easy-Order-Begin-Button"
import { useAppStore } from "../../../store/appStore"

const EasyOrderBegin = () => {
  const step = useAppStore((state) => state.step);
console.log("Step:", step); // Add this line to check the step value

return(
  <div
        className="easy-order-live-text-div">
        <LiveTypingEasyOrder fontSize="28px" />
        <EasyOrderBeginButton />
    </div>

)

}
export default EasyOrderBegin