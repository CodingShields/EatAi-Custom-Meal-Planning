import React from "react";
import flippedchef from "../../assets/images/flippedchef.png";
import EasyOrderBegin from "./Easy-Order/Easy-Order-Begin"
import EasyOrderCourse from "./Easy-Order/Easy-Order-Course";
import EasyOrderDietary from "./Easy-Order/Easy-Order-Dietary";
import EasyOrderHeadCount from "./Easy-Order/Easy-Order-Head-Count"; // You also need to import EasyOrderHeadCount
import EasyOrderStartOverButton from "./Easy-Order/Easy-Order-Start-Over-Button"
import EasyOrderBackButton from "./Easy-Order/Easy-Order-Back-Button";
import { useAppStore } from "../../store/appStore";

const EasyOrder = () => {
    const step = useAppStore((state) => state.step);
   

        const renderStepMap = {
            0: <EasyOrderBegin />,
            1: <EasyOrderCourse />,
            2: <EasyOrderDietary />,
            3: <EasyOrderHeadCount />,
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9:""
        }

        const RenderCompFromStep = renderStepMap[step]

        return (
            <div className="easy-order-container">
                <img className="chef-img" src={flippedchef} alt="Chef" />
                <div className="chef-bubble-div">
                    {RenderCompFromStep}
                    <div className="easy-order-btn-div">
                        <EasyOrderStartOverButton />
                        <EasyOrderBackButton/>
                    </div>
                </div>
                
            </div>
        )
    }
export default EasyOrder
