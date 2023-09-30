import React, { useState } from "react";
import clipboard from "../assets/images/clipboard.png";
import MealTypeArray from "./SubPages/MealTypeArray";
import FlavorTypeArray from "./SubPages/FlavorTypeArray";
import dietaryOptions from "./SubPages/Dietary";
import * as openai from 'openai'; // Import OpenAI library
import { process } from "/env";

export default function ChefSurprise() {
  const [entree, setEntree] = useState("");
  const [headCount, setHeadCount] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [flavorDetails, setFlavorDetails] = useState("");
  const [dietaryDetails, setDietaryDetails] = useState("");
  const [chatBotReply, setChatBotReply] = useState("");

  const apiKey = process.env.OPENAI_API_KEY;

  // No need to create an instance, you can use openai directly
  async function handleOrder() {
    const test = `I'd like to order an ${entree} for ${
      headCount !== 1 ? 'people' : 'person'
    }, that has a ${selectedFlavor} and it should have a dietary restriction of ${dietaryDetails}. Can you also give me a specific grocery list, cook time, and a detailed summary of how to prepare the meal.`;

    try {
      const response = await openai.Completions.call({
        model: "gpt-3.5-turbo-instruct",
        messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: test }],
      });

      // Check the response structure and access the data
      if (response.choices && response.choices.length > 0) {
        const chatBotReply = response.choices[0].message.content;
        setChatBotReply(chatBotReply);
      } else {
        console.error("Invalid response structure from OpenAI API");
      }
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
    }
  }




    
    function handleEntree(event) {
        const selectedValue = event.target.value
            setEntree(selectedValue)
    }
    function handleHeadCount(value) {
        setHeadCount(value);
        }
    function handleFlavorChange(event) {
        const selectedValue = event.target.value;
            setSelectedFlavor(selectedValue);
        const flavorDetails = FlavorTypeArray.find((item) => item.name === selectedValue);
            if (flavorDetails) {
                setFlavorDetails(flavorDetails.details);
            } else {
                setFlavorDetails("");
            }
    }
    function handleDietaryDetails(event) {
        const selectedValue = event.target.value
            setDietaryDetails(selectedValue)
    }
    console.log(chatBotReply)
return (
    <div className="chef-surprise-div">
        <img className="clipboard-img"
            src={clipboard} alt="Clipboard"
        />
                <h3 className="menu-text">Menu</h3>
                    <div className="menu-div">
                        <h2 className="menu-item-text">Entree:</h2>
                            <select
                                onChange={handleEntree}
                                value={entree}
                                className="menu-list-items"
                                >
                                {MealTypeArray.map((item) => (
                                    <option
                                        value={item.name}
                                        key={item.id}
                                        >
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        <h2 className="menu-item-text">
                                HeadCount: <span className="headcount-text">{headCount} </span> {headCount != 1 ? "people" : "person"}
                        </h2>
                            <input
                                className="headcount-slider"
                                type="range"
                                id="volume"
                                name="volume"
                                min="1"
                                max="20"
                                step="1"
                                value={headCount}
                                onChange={(e) => handleHeadCount(e.target.value)}
                            />
                        <h2 className="menu-item-text">Flavor:</h2>
                            <select
                                onChange={handleFlavorChange}
                                value={selectedFlavor}
                                className="menu-list-items"
                                >
                                {FlavorTypeArray.map((item) => (
                                    <option
                                        value={item.name}
                                        key={item.id}
                                        >
                                        {item.name}
                                    </option>
                                ))}
              </select>
            <h3 className="flavor-details-text">{flavorDetails}</h3>
            <h2 className="menu-item-text">Dietary Preference:</h2>
                            <select
                                onChange={handleDietaryDetails}
                                value={dietaryDetails}
                                className="menu-list-items"
                                >
                                {dietaryOptions.map((item) => (
                                    <option
                                        value={item.name}
                                        key={item.id}
                                        >
                                        {item.name}
                                    </option>
                                ))}
            </select>
          
        </div>
         <div className="button-div">
                <button className="order-btn" onClick={handleOrder}>Send Order To Kitchen</button>
            </div>  
        </div>
    );
}
