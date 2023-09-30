import React, { useEffect, useState } from "react";
import flippedchef from "../assets/images/flippedchef.png";
import flippedbubble from "../assets/images/flippedbubble.png";
import LiveTypingText from "./DashBoard/LiveTypingDashboard";
import kitchen from "../assets/images/kitchen.png"
export default function DashBoard({ tabName }) {
  const defaultMessage = "Welcome, I am Chef Mike, hover over the tabs to learn more.";

    const tabMessages = {
    "ChefSurprise": "Click Chef Surprise to set Guest Size, Flavor and kind of Meal.",
    "EasyOrder": "Ordering made easy!",
    "AdvancedOrder": "Advanced ordering with macro nutrients, calories coming soon!",
  };

  const currentMessage = tabMessages[tabName] || defaultMessage;
  return (
      <div className="dashboard-container">
      <img className="chef-background-img" src={kitchen} alt="Chef Background" />
      <img className="chef-bubble-img" src={flippedbubble} alt="Bubble" />
      <img className="chef-img" src={flippedchef} alt="Chef" />
      <div className="live-text-container">
        <LiveTypingText
          messages={[currentMessage]}
          fontSize="20px"
        />
      </div>
    </div>
  );
}
