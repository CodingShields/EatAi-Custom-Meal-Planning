import React, { useState, useEffect } from "react";
import { useDisclaimerStore } from "../state-store/DisclaimerStore";
import LiveTypingDisClaimerForm from "../Pages/SubPage/Live-Typing-Pages/Live-Typing-Dislaimer-Form";
import LiveDate from "./liveDate";
import { useNavigate } from "react-router-dom";
import { useDisclaimerStoreActions } from "../state-store/DisclaimerStore";


const Disclaimer = () => {
    const [renderDisclaimer, setRenderDisclaimer] = useState(false);
    const [renderLiveTyping, setRenderLiveTyping] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [date, setDate] = useState(new Date());
    const {setDisclaimer} = useDisclaimerStoreActions()
    const disclaimerState = useDisclaimerStore((state) => state.Disclaimer)


    
    const handleOnClick =  () => {
        setDisclaimer(true);
            setRenderDisclaimer(true);
        setRenderLiveTyping(false);
        console.log("disclaimerStateclicked", disclaimerState)
    };
    console.log("disclaimerState", disclaimerState)

  const handleOnChange = (e) => {
      setIsChecked(e.target.checked);
  };

  useEffect(() => {
      setRenderLiveTyping(true);
  }, []);

    return (
      
      <div
          style={(renderDisclaimer) ? { display: "none" } : { display: "flex" }}
          className="disclaimer-container">
      <LiveTypingDisClaimerForm />
      <LiveDate />

      <input
        className="disclaimer-checkbox"
        onChange={(e) => handleOnChange(e)}
        checked={isChecked}
        type="checkbox"
      />
      <p className="disclaimer-footer-text">Check This Box If You Agree to and Understand The Disclaimer</p>
      <button
        className="disclaimer-btn"
        onClick={handleOnClick}
        disabled={!isChecked}
      >
        Submit Disclaimer
      </button>
    </div>
  );
};

export default Disclaimer;
