import React, { useEffect, useState } from "react";
import { useAdvancedOrderStore } from "../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStoreActions } from "../../../stateStore/AdvancedOrderStore";

const AdvancedOrderMealPlanner = () => {
	const [loading, setLoading] = useState(true); // Initially set loading to true
	const mealPlanner = useAdvancedOrderStore((state) => state.mealPlanner);

	return (
		<div className='advanced-order-meal-planner-container'>
			{mealPlanner.map((item) => {
				return (
                    <div
                        className='advanced-order-day-container'
                        key={item.id}
                    >
                        <h1
                            className='advanced-order-day-title'
                        >
                            {item.day}
                            <button
                            className="advanced-order-day-open-btn"
                            >Open Day</button>
                        </h1>
                        {item.meals.map((meal) => {
                            return(
                                <div
                                    className='advanced-order-meal-container'
                                    key={item.id} 
                                >
                                    <h1
                                    className="advanced-order-meal-item-title"
                                    >{meal.name}</h1>
                                </div>
                            )
                        })}
					</div>
				);
			})}
		</div>
	);
};

export default AdvancedOrderMealPlanner;
