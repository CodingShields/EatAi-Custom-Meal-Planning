import React, { useState, useEffect } from "react";
import flippedchef from "../../assets/images/flippedchef.png";
// import kitchen from "../../assets/images/kitchen.png";
import LiveTypingEasyOrder from "./Live-Typing-Pages/Live-Typing-Easy-Order";
import EasyOrderCourse from "./Easy-Order-Pages/Easy-Order-Course";
import EasyOrderDietary from "./Easy-Order-Pages/Easy-Order-Dietary";
import EasyOrderEvents from "./Easy-Order-Pages/Easy-Order-Events"
import HeadCount from "./Easy-Order-Pages/Easy-Order-Head-Count";


export default function EasyOrder() {

    // changes display of the clipboard to display the loading/cooking svg while the call is being made
	// const [removeMenu, setRemoveMenu] = useState(false)
	// const [loading, setLoading] = useState(false);
	// const [renderMenu, setRenderMenu] = useState(false);
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
    //Fourth Order NOT COMPLETED
    const [headCountOption, setheadCountOption] = useState()
    const [renderHeadCount, setRenderHeadCount] = useState(false)
    const [headCountConfirmed, setHeadCountConfirmed] = useState(false)
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
    };
      const handleEventSelectionConfirmed = () => {
        setRenderEventOptions(true);
        setEventSelectionConfirmed(true)
  };

    useEffect(() => {
        // Use a setTimeout to simulate text being typed and then display the button.
        const timer = setTimeout(() => {
            setRenderBeginButton(true);
        }, 6000); // Adjust the delay (in milliseconds) as needed.

        // Clear the timer when the component unmounts.
        return () => clearTimeout(timer);
    }, []);

    function handleBeginBtn() {
        setRenderWelcomeMessage(true)
        setRenderCourseOptions(true)
    }
    function handleCourseModify() {
        setRenderCourseOptions(true)
        setRenderDietaryOptions(false)
    }
    function handleDietaryModify() {
        setRenderCourseOptions(false)
        setRenderDietaryOptions(true)
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
            <HeadCount />
            <div
                className="easy-order-selections-container"
                style={{display: renderWelcomeMessage ? "flex" : "none"}}
                >
                <h2 className="easy-order-selection-text">Course Selection</h2>
                {checkedCourseOptions.map((item) => (
                    <h2 className="checked-course-options-text">{item}</h2>
                ))}
                <button
                    className="easy-order-modify-btn"
                    onClick={handleCourseModify}
                >Modify</button>
            </div>
            <div
                className="easy-order-selections-container"
                style={{display: renderDietaryOptions ? "flex" : "none"}}
            >
                <h2 className="easy-order-selection-text">Dietary Selection</h2>
                {checkedDietaryOptions.map((item) => (
                    <h2 className="checked-course-options-text">{item}</h2>
                ))}
                <button
                    className="easy-order-modify-btn"
                    onClick = {handleDietaryModify}
                >Modify</button>
            </div>
        </div>
    )
}