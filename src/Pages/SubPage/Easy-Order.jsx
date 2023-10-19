import React from "react";
import flippedchef from "../../assets/images/flippedchef.png";
import EasyOrderBegin from "./Easy-Order/Easy-Order-Begin"
import EasyOrderCourse from "./Easy-Order/Easy-Order-Course";
import EasyOrderDietary from "./Easy-Order/Easy-Order-Dietary";
import EasyOrderHeadCount from "./Easy-Order/Easy-Order-Head-Count"; // You also need to import EasyOrderHeadCount
import EasyOrderStartOverButton from "./Easy-Order/Easy-Order-Comps/Easy-Order-Start-Over-Button"
import EasyOrderBackButton from "./Easy-Order/Easy-Order-Comps/Easy-Order-Back-Button";
import EasyOrderUserSelection from "./Easy-Order/Easy-Order-Comps/Easy-Order-User-Selection";
import EasyOrderEvents from "./Easy-Order/Easy-Order-Events";
import EasyOrderBeverage from "./Easy-Order/Need To Build Out/Easy-Order-Beverage";
import EasyOrderCookTime from "./Easy-Order/Easy-Order-Cook-Time";
import EasyOrderDessertFlavor from "./Easy-Order/Easy-Order-Dessert-Flavor";
import EasyOrderFlavoredRecommend from "./Easy-Order/Easy-Order-Flavored-Recommend";
import EasyOrderMealBalance from "./Easy-Order/Easy-Order-Meal-Balance";
import EasyOrderHowToCook from "./Easy-Order/Easy-Order-How-To-Cook";
import EasyOrderSeasonalOptions from "./Easy-Order/Easy-Order-Seasonal-Options";
import { useAppStore } from "../../store/appStore";

const EasyOrder = () => {
    const step = useAppStore((state) => state.step);
   

        const renderStepMap = {
            0: <EasyOrderBegin />,
            1: <EasyOrderCourse />,
            2: <EasyOrderDietary />,
            3: <EasyOrderHeadCount />,
            4: <EasyOrderEvents />,
            5: <EasyOrderBeverage />,
            6: <EasyOrderCookTime />,
            7: <EasyOrderDessertFlavor />,
            8: <EasyOrderFlavoredRecommend />,
            9: <EasyOrderMealBalance />,
            10: <EasyOrderHowToCook />, 
            11: <EasyOrderSeasonalOptions />, //DONE 
            12: <EasyOrderCulturalOptions/>
        }

        const RenderCompFromStep = renderStepMap[step]

        return (
            <div className="easy-order-container">
                <div className="easy-order-chef-img-container">
                <img className="chef-img" src={flippedchef} alt="Chef" />
                </div>
                <div className="easy-order-chef-bubble-container">
                    {RenderCompFromStep}
                    <div className="easy-order-btn-container">
                        {RenderCompFromStep[step] !== 0 ? <EasyOrderStartOverButton/> : ""}
                        {RenderCompFromStep[step] !== 0 ? <EasyOrderBackButton/> : ""}
                        
                    </div>
                </div>
                <div className="easy-order-user-selection-container">
                <EasyOrderUserSelection />
                </div>
            </div>
        )
    }
export default EasyOrder
