import React, { useState, useEffect } from "react";
import flippedchef from "../../assets/images/flippedchef.png";
// import kitchen from "../../assets/images/kitchen.png";
import LiveTypingEasyOrder from "./Live-Typing-Pages/Live-Typing-Easy-Order";
import EasyOrderCourse from "./Easy-Order-Pages/Easy-Order-Course";
import EasyOrderDietary from "./Easy-Order-Pages/Easy-Order-Dietary";
import EasyOrderEvents from "./Easy-Order-Pages/Easy-Order-Events"
import EasyOrderHeadCount from "./Easy-Order-Pages/Easy-Order-Head-Count";


export default function EasyOrder() {
    
	// const [removeMenu, setRemoveMenu] = useState(false)
	// const [loading, setLoading] = useState(false);
    // const [renderMenu, setRenderMenu] = useState(false);
    
//     const renderStepMap = {
//         0:EasyOrderCourse,
//         1:EasyOrderDietary,
//         2:EasyOrderHeadCount,
//         3:
//         4:
//         5:
//         6:
//         7:
//         8:
//         9:
//         10:
// }

    const [renderWelcomeMessage, setRenderWelcomeMessage] = useState(false)
    const [renderBeginButton, setRenderBeginButton] = useState(false)
    // First Order
    const [checkedCourseOptions, setCheckedCourseOptions] = useState([])
    const [renderCourseOptions, setRenderCourseOptions] = useState(false)
    const [courseSelectionConfirmed, setCourseSelectionConfirmed] =useState(false)
    //Second Order
    const [checkedDietaryOptions, setCheckedDietaryOptions] = useState([])
    const [renderDietaryOptions, setRenderDietaryOptions] = useState(false)
    const [dietarySelectionConfirmed, setDietarySelectionConfirmed] =useState(false)
    //Third Order
    const [checkedEventOptions, setCheckedEventOptions] = useState([])
    const [renderEventOptions, setRenderEventOptions] = useState(false)
    const [eventSelectionConfirmed, setEventSelectionConfirmed] = useState(false)
    //Fourth Order 
    const [headCountOption, setHeadCountOption] = useState()
    const [renderHeadCount, setRenderHeadCount] = useState(false)
    const [headCountConfirmed, setHeadCountConfirmed] = useState(1)
    //Fifth Order NOT COMPLETED
    const [cookTimeOption, setCookTimeOption] = useState("")
    const [renderCookTime, setRenderCookTime] = useState(false)
    const [cookTimeConfirmed, setCookTimeConfirmed] = useState(false)
    //Sixth Order NOT COMPLETED (Should include what to prep with and also "on the spot, in advance or both")
    const [howToCookOption, setHowToCookOption] = useState("")
    const [renderHowToCook, setRenderHowToCook] = useState(false)
    const [howToCookConfirmed, setHowToCookConfirmed] = useState(false)
    //Seventh Order NOT COMPLETED
    const [foodBalanceOption, setFoodBalanceOption] = useState("")
    const [renderFoodBalance, setRenderFoodBalance] = useState(false)
    const [foodBalanceConfirmed, setFoodBalanceConfirmed] = useState(false)
    //Eigth Order NOT COMPLETED
    const [dessertFlavorOption, setDesserFlavorOption] = useState("")
    const [renderDessertFlavor, setRenderDessertFlavor] = useState(false)
    const [dessertFlavorConfirmed, setDessertFlavorConfirmed] = useState(false)
    //Nineth Order NOT COMPLETED
    const [beveragesOption, setBeveragesOption] = useState("")
    const [renderBeverages, setRenderBeverages] = useState(false)
    const [BeveragesConfirmed, setBeveragesConfirmed] = useState(false)
    //Tenth Order NOT COMPLETED
    const [seasonalOption, setSeasonalOption] = useState("")
    const [renderSeasonal, setSeasonal] = useState(false)
    const [seasonalConfirmed, setSeasonalConfirmed] = useState(false)
    //Eleventh Order NOT COMPLETED
    const [flavoredDishesOption, setFlavoredDishesOption] = useState("")
    const [renderflavoredDishes, setFlavoredDishes] = useState(false)
    const [flavoredDishesConfirmed, setFlavoredDishesConfirmed] = useState(false)

    const handleCourseSelectionConfirmed = () => {
        setCourseSelectionConfirmed(true);
        setRenderDietaryOptions(true);
        setRenderCourseOptions(false);
    };
    const handleDietarySelectionConfirmed = () => {
        setRenderDietaryOptions(true);
        setDietarySelectionConfirmed(true)
        setRenderHeadCount(true)
    };

    const [people, setPeople] = useState(1);

    const handleHeadCountSelection = (value) => {
        setHeadCountOption(value);
        setHeadCountConfirmed(value); 
        
};
    const handleEventSelectionConfirmed = () => {
        setRenderEventOptions(true);
        setEventSelectionConfirmed(true);
};


    useEffect(() => {
        const timer = setTimeout(() => {
            setRenderBeginButton(true);
        }, 6000);
        return () => clearTimeout(timer);
    }, []);

    function handleBeginBtn() {
        setRenderWelcomeMessage(true)
        setRenderCourseOptions(true)
    }
    function handleCourseModify() {
        setRenderCourseOptions(true)
        setRenderDietaryOptions(false)
        setRenderHeadCount(false)
    }
    function handleDietaryModify() {
        setRenderCourseOptions(false)
        setRenderDietaryOptions(true)
    }
    function handleHeadCountModify() {
        setRenderCourseOptions(false)
        setRenderDietaryOptions(false)
        setRenderHeadCount(true)
    }

    return (
        <div className="easy-order-container">
				<img className="chef-img" src={flippedchef} alt="Chef" />
            <div
                style={{ display: renderWelcomeMessage ? "none" : "flex" }}
                className="chef-bubble-div">
                <div
                    className="easy-order-live-text-div">
                    <LiveTypingEasyOrder
                        fontSize="28px"    
                    />
                    <button
                        onClick={handleBeginBtn}
                        style={{ display: renderWelcomeMessage ? "none" : "flex" }}
                        className="easy-order-begin-btn">
                        Begin    
                    </button>
                </div>
            </div>
                
            {renderCourseOptions ?
                (<EasyOrderCourse
                    checkedCourseOptions={checkedCourseOptions}
                    setCheckedCourseOptions={setCheckedCourseOptions}
                    setCourseSelectionConfirmed={handleCourseSelectionConfirmed}
                />) : ""}
            {renderDietaryOptions ?
                (<EasyOrderDietary
                    checkedDietaryOptions={checkedDietaryOptions}
                    setCheckedDietaryOptions={setCheckedDietaryOptions}
                    setDietarySelectionConfirmed={handleDietarySelectionConfirmed}
                />) : ""}
            {renderEventOptions ?
                (<EasyOrderEvents
                    checkedEventOptions={checkedEventOptions}
                    setCheckedEventOptions={setCheckedEventOptions}
                    setEventSelectionConfirmed={handleEventSelectionConfirmed}
                />) : ""}
            {renderHeadCount ?
                (<EasyOrderHeadCount
                    headCountOption={headCountOption}
                    setHeadCountOption={setHeadCountOption}
                    setHeadCountSelectionConfirmed={handleHeadCountSelection}

                />) : ""}
            <div
                className="easy-order-selections-container"
                style={{display: renderWelcomeMessage ? "flex" : "none"}}
                >
                <h2 className="easy-order-selection-text">Course Selection</h2>
                {checkedCourseOptions.map((item) => (
                    <h2 className="confirmed-selection-text">{item}</h2>
                ))}
                <button
                    className="easy-order-modify-btn"
                    onClick={handleCourseModify}
                >Modify</button>
            </div>
            <div
                className="easy-order-selections-container"
                style={{display: renderDietaryOptions? "flex" : "none"}}
            >
                <h2 className="easy-order-selection-text">Dietary Selection</h2>
                {checkedDietaryOptions.map((item) => (
                    <h2 className="confirmed-selection-text">{item}</h2>
                ))}
                <button
                    className="easy-order-modify-btn"
                    onClick = {handleDietaryModify}
                >Modify</button>
            </div>
            <div
                className="easy-order-selections-container"
                style={{display: renderHeadCount ? "flex" : "none"}}
            >
            <h2 className="easy-order-selection-text">Head Count</h2>
                <h2 className="head-count-data-text">
                    {headCountOption}
                </h2>
                    <h2 className="confirmed-selection-text">
                        {headCountOption !== 1 ? "people" : "person"}
                    </h2>
                <button
                    className="easy-order-modify-btn"
                    onClick = {handleHeadCountModify}
                >Modify</button>
            </div>
        </div>
    )
}