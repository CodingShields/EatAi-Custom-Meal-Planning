import React from "react";
import LiveTypingEasyOrder from "../Live-Typing-Pages/Live-Typing-Easy-Order";
import EasyOrderBeginButton from "./Easy-Order-Begin-Button";
import "../../../css/easyOrder.css";


const EasyOrderBegin = () => {
	return (
		<>
			<LiveTypingEasyOrder fontSize='28px' />

			<EasyOrderBeginButton />
		</>
	);
};
export default EasyOrderBegin;
