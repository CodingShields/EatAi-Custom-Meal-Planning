import React from "react";
import { useEasyOrderStore } from "../../../state-store/easyOrderStore";
import Measure from "../../../assets/dataArrays/Measure-Options";

const EasyOrderUserSelection = () => {
  const culture = useEasyOrderStore((state) => state.Culture);
  const event = useEasyOrderStore((state) => state.Event);
  const headcount  = useEasyOrderStore((state) => state.HeadCount);
  const courses = useEasyOrderStore((state) => state.Courses);
  const dietary = useEasyOrderStore((state) => state.Dietary);
  const mealBalance = useEasyOrderStore((state) => state.Balance);
  const cookTime = useEasyOrderStore((state) => state.CookTime);
  const howToCook = useEasyOrderStore((state) => state.HowToCook);
  const dessert = useEasyOrderStore((state) => state.Dessert);
  const seasonal = useEasyOrderStore((state) => state.Seasonal);
  const beverage = useEasyOrderStore((state) => state.Beverage);
  const measure = useEasyOrderStore((state) => state.Measure);
  // const state = useEasyOrderStore(state => state)
  const formatCoursesOptions = () => {
    if (Array.isArray(courses)) {
      // Join the selected options into a comma-separated string
      return courses.join(", ");
    } else {
      return ""; // or some other default value if courses is not an array
    }
  };
  const formatDietaryOptions = () => {
    if (Array.isArray(dietary)) {
      // Join the selected options into a comma-separated string
      return dietary.join(", ");
    } else {
      return ""; // or some other default value if courses is not an array
    }
  };
  console.log("eventData", event);
  
  return (
    <>
      <h1 className="easy-order-selection-title">Current Selections</h1>
      <div className="user-selection-container">
        <h2 className="confirmed-selection-text">Event:</h2>
          <>
          <span className="user-input-text">{event}</span>
          </>
        <h2 className="confirmed-selection-text">Cultural:</h2>
        <>
          <span className="user-input-text">{culture}</span>
        </>
        <h2 className="confirmed-selection-text">HeadCount:</h2>
        <>
        <span className="user-input-text">{headcount} </span>
        </>
        <h2 className="confirmed-selection-text">Courses:</h2>
        <>
        <span className="user-input-text">{formatCoursesOptions()}</span>
        </>
        <h2 className="confirmed-selection-text">Dietary:</h2>
        <>
        <span className="user-input-text">{formatDietaryOptions()}</span>
        </>
        <h2 className="confirmed-selection-text">Meal Balance:</h2>
        <>
        <span className="user-input-text">{mealBalance}</span>
        </>
        <h2 className="confirmed-selection-text">Cook Time:</h2> 
        <>
        <span className="user-input-text">{cookTime}</span>
        </>
        <h2 className="confirmed-selection-text">How To Cook:</h2>
        <>
        <span className="user-input-text">{howToCook}</span>
        </>
        <h2 className="confirmed-selection-text">Measurement:</h2>
        <>
        <span className="user-input-text">{measure}</span>
        </>
        <h2 className="confirmed-selection-text">Seasonal:</h2>
        <>
        <span className="user-input-text">{seasonal}</span>
        </>
        <h2 className="confirmed-selection-text">Dessert:</h2>
        <>
        <span className="user-input-text">{dessert}</span>
        </>
        <h2 className="confirmed-selection-text">Beverages:</h2>
        <>
        <span className="user-input-text">{beverage}</span>
        </>
      </div>
      
    </>
  );
}
export default EasyOrderUserSelection;