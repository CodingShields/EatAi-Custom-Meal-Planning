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
import EasyOrderFlavoredRecommend from "./Easy-Order/Easy-Order-Flavored-Recommend";
import EasyOrderMealBalance from "./Easy-Order/Easy-Order-Meal-Balance";
import EasyOrderHowToCook from "./Easy-Order/Easy-Order-How-To-Cook";
import EasyOrderSeasonalOptions from "./Easy-Order/Easy-Order-Seasonal-Options";
import EasyOrderCulturalOptions from "./Easy-Order/Easy-Order-Cultural-Options";
import EasyOrderStartOverButton from "./Easy-Order/Easy-Order-Comps/Easy-Order-Start-Over-Button"
import EasyOrderBackButton from "./Easy-Order/Easy-Order-Comps/Easy-Order-Back-Button";
import EasyOrderUserSelection from "./Easy-Order/Easy-Order-Comps/Easy-Order-User-Selection";
import { useEasyOrderRenderStore } from "../../state-store/RenderStore";

const EasyOrderForm = () => {
    const step = useEasyOrderRenderStore((state) => state.step);
   

        const renderStepMap = {
            0: <EasyOrderBegin />,
            1: <EasyOrderEvents />,
            2: <EasyOrderCulturalOptions/>,
            3: <EasyOrderHeadCount />,
            4: <EasyOrderCourse />,
            5: <EasyOrderDietary />,
            6: <EasyOrderMealBalance />,
            7: <EasyOrderCookTime />,
            8: <EasyOrderHowToCook />, 
            9: <EasyOrderFlavoredRecommend />,
            10: <EasyOrderDessertFlavor />,
            11: <EasyOrderSeasonalOptions />, 
<<<<<<< HEAD
            12: <EasyOrderCulturalOptions/>
    }
    // need a "How to Measure" component
    // need some other variables that are going to setup the questions better
    // get chat gtp to build a prompt for the user input 
=======
            12: <EasyOrderBeverage />,
        }
>>>>>>> fb43b9231bef98f6c15b40ab7addf103549ec38c

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
export default EasyOrderForm
