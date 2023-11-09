import React, { useState } from "react";
import FlavoredDishes from "../../../assets/dataArrays/Flavor-Dishes-Array";
import "../../.././css/EasyOrder.css"; 

export default function EasyOrderFlavoredRecommend() {
    const initialRegion = 'Italian'; // You can set the default region here
    const [selectedRegion, setSelectedRegion] = useState(initialRegion);
    const [selectedDish, setSelectedDish] = useState('');

    const handleRegion = (event) => {
        const selectedRegion = event.target.value;
        setSelectedRegion(selectedRegion);
        setSelectedDish(''); 
    };

    const handleDish = (event) => {
        const selectedDish = event.target.value;
        setSelectedDish(selectedDish);
    };

return (
        <>
        <h1>Flavored Recommend</h1>
        <select onChange={handleRegion} value={selectedRegion} className="flavor-recommend-list-items">
            {Object.keys(FlavoredDishes).map((region) => (
            <option value={region} key={region}>
                {region}
            </option>
            ))}
        </select>

        <select onChange={handleDish} value={selectedDish} className="flavor-recommend-list-items">
            <option value="">Select a dish</option>
            {FlavoredDishes[selectedRegion].map((dish) => (
            <option value={dish.description} key={dish.id}>
                {dish.name}
            </option>
            ))}
        </select>
        {selectedDish && (
            <div>
            <h2>Selected Dish:</h2>
            <p>{selectedDish}</p>
            </div>
            )}
        </>
        );
        }

