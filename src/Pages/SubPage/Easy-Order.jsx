import React from "react";
import flippedchef from "../../assets/images/flippedchef.png";
import EasyOrderBegin from "./Easy-Order/Easy-Order-Begin"
import EasyOrderCourse from "./Easy-Order/Easy-Order-Course";
import EasyOrderDietary from "./Easy-Order/Easy-Order-Dietary";
import EasyOrderHeadCount from "./Easy-Order/Easy-Order-Head-Count"; 
import EasyOrderEvents from "./Easy-Order/Easy-Order-Events";
import EasyOrderBeverage from "./Easy-Order/Easy-Order-Beverage";
import EasyOrderCookTime from "./Easy-Order/Easy-Order-Cook-Time";
import EasyOrderDessertFlavor from "./Easy-Order/Easy-Order-Dessert-Flavor";
import EasyOrderMealBalance from "./Easy-Order/Easy-Order-Meal-Balance";
import EasyOrderHowToCook from "./Easy-Order/Easy-Order-How-To-Cook";
import EasyOrderSeasonalOptions from "./Easy-Order/Easy-Order-Seasonal-Options";
import EasyOrderCulturalOptions from "./Easy-Order/Easy-Order-Cultural-Options";
import EasyOrderStartOverButton from "./Easy-Order/Easy-Order-Buttons/Easy-Order-Start-Over-Button"
import EasyOrderBackButton from "./Easy-Order/Easy-Order-Buttons/Easy-Order-Back-Button"
import EasyOrderUserSelection from "./Easy-Order/Easy-Order-User-Selection"
import EasyOrderMeasure from "./Easy-Order/Easy-Order-Measure"
import EasyOrderHowToFlavor from "./Easy-Order/Easy-Order-How-To-Flavor"
import EasyOrderConfirmOrder from "./Easy-Order/Easy-Order-Confirm-Order";
import { useEasyOrderRenderStore } from "../../state-store/RenderStore"

const EasyOrderForm = () => {
    const step = useEasyOrderRenderStore((state) => state.step);


    const renderStepMap = {
            
        0: <EasyOrderBegin />,
        1: <EasyOrderEvents />,
        2: <EasyOrderCulturalOptions />,
        3: <EasyOrderHeadCount />,
        4: <EasyOrderCourse />,
        5: <EasyOrderDietary />,
        6: <EasyOrderHowToFlavor/>,
        7: <EasyOrderMealBalance />,
        8: <EasyOrderCookTime />,
        9: <EasyOrderHowToCook />,
        10: <EasyOrderMeasure />,
        11: <EasyOrderSeasonalOptions />,
        12: <EasyOrderDessertFlavor />,
        13: <EasyOrderBeverage />,
        14: <EasyOrderConfirmOrder />
            
    }
    // need some other variables that are going to setup the questions better
    // get chat gtp to build a prompt for the user input 
    const RenderCompFromStep = renderStepMap[step]
    // in the api call need to add a name summary 
    return (
        <div className="easy-order-container">
            <div className="easy-order-chef-img-container">
                <img className="chef-img" src={flippedchef} alt="Chef" />
            </div>
            <div className="easy-order-chef-bubble-container">
                    
                        {RenderCompFromStep}
                        <div className="easy-order-btn-container">
                            <EasyOrderStartOverButton />
                            <EasyOrderBackButton />
                </div>
            </div>
            <EasyOrderUserSelection />
        </div>
    );
}
export default EasyOrderForm
