import React, { useState } from "react";
import foodArray from "../assets/foodArray";
import MealType from "./SubPages/MealType";
import Flavor from "./SubPages/FlavorType"
import People from "./SubPages/People"
import deleteIMG from "../assets/images/deleteIMG.png";
import './menu.css';

export default function MealBuilder() {
    const [numberOfPeople, setNumberofPeople] = useState("");
    const [selectedFoods, setSelectedFoods] = useState([]);
    const [currentSelections, setCurrentSelections] = useState({});
    const [currentFoodList, setCurrentFoodList] = useState(true)
    const [selectedFlavor, setSelectedFlavor] = useState([])
 

    
    function handleSelectChange(e, category) {
        setCurrentSelections(prevSelections => ({
            ...prevSelections,
            [category]: e.target.value
        }));
    }
    
    function isFoodAlreadySelected(foodName, category) {
    const selectedCategoryFoods = selectedFoods[category] || [];
    return selectedCategoryFoods.some(item => item.name === foodName);
}

function handleAdd(category) {
    const selectedFoodItem = foodArray.find(food => food.category === category).items.find(item => item.name === currentSelections[category]);
    
    if (selectedFoodItem) {
        setSelectedFoods(prev => ({
            ...prev,
            [category]: [...(prev[category] || []), selectedFoodItem]
        }));
    }
    setCurrentSelections(prevSelections => ({
        ...prevSelections,
        [category]: foodArray.find(food => food.category === category).items[0].name
    }));
    }
    
    return (
    <div className="meal-builder-container">
        <div className="menu-container">
            <h1 className="menu-title">Place Your Order</h1>
            <MealType />
            <Flavor />
            <People />
        </div>        
            <div className="your-order-container">
                <h2 className="menu-title">Your Order</h2>
            </div>
            <div className="response-container">
                <h2 className="menu-title">Your Order</h2>
            </div>
            {/* <div className="food-list-selection-container">
                {foodArray.map((food) => (
                    <div key={food.category}>
                        <h2 className="food-title">{food.category}</h2>
                        <select
                            className="item-list"
                            value={currentSelections[food.category] || ""}
                            onChange={(e) => handleSelectChange(e, food.category)}
                        >
                            {food.items.map(item => (
                                <option 
                                    key={item.id} 
                                    value={item.name}
                                    disabled={isFoodAlreadySelected(item.name, food.category)}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <button className="confirm-selections-btn" onClick={() => handleAdd(food.category)}>
                            Add
                        </button>
                                {selectedFoods[food.category] && selectedFoods[food.category].map((item) => (
                                    <h1
                                        key={item.id}
                                        className="selected-items-text">
                                        {item.name}
                                        <img className="delete-btn" onClick={()=>handleDelete(food.category, item.id)} src={deleteIMG} ></img>
                                    </h1>
                                ))}
                            </div>
                        ))}
                    </div> */}
            
    </div>
    );
}
