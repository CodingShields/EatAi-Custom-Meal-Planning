import React, { useState, useEffect } from "react";
import flippedchef from "../../assets/images/flippedchef.png";
// import kitchen from "../../assets/images/kitchen.png";
import LiveTypingEasyOrder from "./LiveTypingEasyOrder";
import EasyOrderCourse from "./EasyOrderCourse";
import EasyOrderDietary from "./EasyOrderDietary";


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
    



    const handleCourseSelectionConfirmed = () => {
        setCourseSelectionConfirmed(true);
        setRenderDietaryOptions(true);
        setRenderCourseOptions(false);
    };
    const handleDietarySelectionConfirmed = () => {
        setRenderDietaryOptions(true);
        setDietarySelectionConfirmed(true)
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
    console.log(checkedDietaryOptions);
    console.log(checkedCourseOptions)
    return (
        <div className="easy-order-container">
            <div className="chef-img-container">
				<img className="chef-img" src={flippedchef} alt="Chef" />
            </div>
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
            <div
                className="easy-order-selections-container"
                style={{display: renderWelcomeMessage ? "flex" : "none"}}
                >
                <h2 className="easy-order-selection-text">Course Selection</h2>
                {checkedCourseOptions.map((item) => (
                    <h2 className="checked-course-options-text">{item}</h2>
                ))}
                <h2 className="easy-order-selection-text"></h2>
            </div>
            <div
                className="easy-order-selections-container"
                style={{display: renderDietaryOptions ? "flex" : "none"}}
            >
                <h2 className="easy-order-selection-text">Dietary Selection</h2>
                {checkedDietaryOptions.map((item) => (
                    <h2 className="checked-course-options-text">{item}</h2>
                ))}
                <h2 className="easy-order-selection-text"></h2>
            </div>
        </div>
    )
}