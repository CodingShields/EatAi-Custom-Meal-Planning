import React, { useState } from "react";
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore";
import { useEasyOrderStoreActions } from "../../../state-store/easyOrderStore";

const EasyOrderHeadCount = () => {
    const [count, setCount] = useState(1)
    const { setHeadCount } = useEasyOrderStoreActions()
    const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);
 
    const handleHeadCount = (value) => {
        setCount(value)
        setHeadCount(value)
        
    }

 const handleClick = () => {
    setHeadCount(count);
     increaseStep();
     setIsButtonDisabled(false);
  }

    return (
    <>
        <h2 className="easy-order-menu-text">How many guests will you be serving?</h2>
        <input
            className="easy-order-headcount-slider"
            type="range"
            id="head-count-volume"
            name="volume"
            min="1"
            max="50"
            step="1"
            value={count}
            onChange={(e) => handleHeadCount(e.target.value)}
        />
        <div className="head-count-container">
            <p className="head-count-title-text">
                HeadCount:{" "}<span className="head-count-data-text">{count}</span> {count != 1 ? "people" : "person"}
                </p>
            </div>
            <button className="easy-order-make-selection-btn" onClick={handleClick}
      >Make Selection
    </button>
    </>
    );
}
export default EasyOrderHeadCount;
