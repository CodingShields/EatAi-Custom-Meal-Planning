import React, { useState, useEffect } from "react";
import flippedchef from "../../assets/images/flippedchef.png";
// import kitchen from "../../assets/images/kitchen.png";
import LiveTypingEasyOrder from "./LiveTypingEasyOrder";
import EasyOrderCourse from "./EasyOrderCourse";
import EasyOrderDietary from "./EasyOrderDietary";


export default function EasyOrder() {
    // const [easyOrderCourse, setEasyOrderCourse] = useState(false)
    // const [easyOrderDietary, setEasyOrderDietary] = useState(false)




        // changes display of the clipboard to display the loading/cooking svg while the call is being made
	// const [removeMenu, setRemoveMenu] = useState(false)
	// const [loading, setLoading] = useState(false);
	// const [renderMenu, setRenderMenu] = useState(false);
    const [renderWelcomeMessage, setRenderWelcomeMessage] = useState(false)
    const [renderBeginButton, setRenderBeginButton] = useState(false)
    const [checkedCourseOptions, setCheckedCourseOptions] = useState([])
    const [checkedDietaryOptions, setCheckedDietaryOptions] = useState([])


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
    }
console.log(checkedDietaryOptions);
    return (
        <div className="easy-order-dashboard-container">
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
                        className="advanced-order-begin-btn">
                        Begin    
                    </button>
                </div>
            </div>
            <div className="easy-order-menu-container">
                
                {/* <EasyOrderCourse
                    checkedCourseOptions={checkedCourseOptions}
                    setCheckedCourseOptions={setCheckedCourseOptions}
                /> */}
                <EasyOrderDietary
                    checkedDietaryOptions={checkedDietaryOptions}
                    setCheckedDietaryOptions={setCheckedDietaryOptions}
                />
       
            </div>
            <div className="easy-order-selections-container">
                <h2 className="easy-order-selection-text"> Course/s Chosen</h2>
                <button className="easy-order-selection-change-btn">Change Course</button>
                <h2 className="easy-order-selection-text"> Dietary Option/s</h2>
                {checkedDietaryOptions}
                <button className="easy-order-selection-change-btn">Change Dietary</button>
                <h2 className="easy-order-selection-text"> Flavor Option</h2>
                <button className="easy-order-selection-change-btn">Change Flavor</button>

            </div>
        </div>
    )
}