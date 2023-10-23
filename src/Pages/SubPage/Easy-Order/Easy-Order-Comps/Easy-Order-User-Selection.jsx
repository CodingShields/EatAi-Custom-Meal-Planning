import React from "react";
import { useEasyOrderStore } from "../../../../state-store/easyOrderStore";

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

  const formatSelectedOptions = () => {
    if (Array.isArray(courses)) {
      // Join the selected options into a comma-separated string
      return courses.join(", ");
    } else {
      return ""; // or some other default value if courses is not an array
    }
  };
  console.log("eventData", event);
  
  return (
    <>
      <h1 className="easy-order-selection-title">Current Selections</h1>
      <div className="user-selection-container">
          <h2 className="confirmed-selection-text">Event: <span className="user-input-text">{event}</span></h2>
          <h2 className="confirmed-selection-text">Cultural: <span className="user-input-text">{culture}</span></h2>
          <h2 className="confirmed-selection-text">HeadCount: <span className="user-input-text">{headcount} </span></h2>
          <h2 className="confirmed-selection-text">Courses: <span className="user-input-text">{formatSelectedOptions()}</span></h2>
          <h2 className="confirmed-selection-text">Dietary: <span className="user-input-text">{dietary}</span></h2>
          <h2 className="confirmed-selection-text">Meal Balance: <span className="user-input-text">{mealBalance}</span></h2>
          <h2 className="confirmed-selection-text">Cook Time: <span className="user-input-text">{cookTime}</span></h2>
          <h2 className="confirmed-selection-text">How To Cook: <span className="user-input-text">{howToCook}</span></h2>
          <h2 className="confirmed-selection-text">Seasonal: <span className="user-input-text">{seasonal}</span></h2>
          <h2 className="confirmed-selection-text">Dessert: <span className="user-input-text">{dessert}</span></h2>
          <h2 className="confirmed-selection-text">Beverages: <span className="user-input-text">{beverage}</span></h2>

      </div>
      
    </>
  );
}
export default EasyOrderUserSelection;