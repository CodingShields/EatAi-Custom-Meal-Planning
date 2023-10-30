import React, {useState, useEffect} from "react";
// import LiveTypingAdvancedOrder from "./Live-Typing-Pages/Live-Typing-Advanced-Order";
import flippedchef from "../../assets/images/flippedchef.png";
// import AdvancedStart from "./Advanced-Order-Pages/Advanced-Start";


export default function AdvancedOrder() {
    // const [renderLiveTyping, setRenderLiveTyping] = useState(true)
    // const [renderAdvancedStart, setRenderAdvancedStart] = useState(false)
    // const [renderBeginBtn, setRenderBeginBtn] = useState(false)

    // function handleBeginBtn() {  
    //     setRenderAdvancedStart(true)
    //     setRenderLiveTyping(false)
    // }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setRenderBeginBtn(true);
    //     }, 8000);
    //     return () => clearTimeout(timer);
    // }, []);

    return(
        <div className="advanced-order-container">
				<img className="chef-img" src={flippedchef} alt="Chef" />
            <div className="chef-bubble-div">
                {/* <div
                    className="advanced-order-live-container"
                    style={{ display: renderLiveTyping ? "flex" : "none"}}
                > */}
                    {/* <LiveTypingAdvancedOrder
                    fontSize="28px"
                    /> */}
                    {/* <button
                        onClick={handleBeginBtn}
                        style={{ display: renderBeginBtn ? "flex" : "none" }}
                        className="easy-order-begin-btn">
                        Begin    
                    </button> */}
                    {/* </div> */}
                        {/* {renderAdvancedStart ? (<AdvancedStart />) : ""} */}
                
            </div>
        </div>
    )
}