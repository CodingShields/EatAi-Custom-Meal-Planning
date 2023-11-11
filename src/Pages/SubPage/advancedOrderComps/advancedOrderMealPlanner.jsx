import React, { useEffect, useState } from "react";
import { useAdvancedOrderStore } from "../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStoreActions } from "../../../stateStore/AdvancedOrderStore";
import proteinArray from "../../../assets/dataArrays/proteinArray";
import FlavorTypeArray from "../../../assets/dataArrays/Flavor-Type-Array";
import vegetables from "../../../assets/dataArrays/veggieArray";
import carbs from "../../../assets/dataArrays/carbsArray";
import fruitsArr from "../../../assets/dataArrays/fruitsArray";

const AdvancedOrderMealPlanner = () => {
	const [loading, setLoading] = useState(true); // Initially set loading to true
	const mealPlanner = useAdvancedOrderStore((state) => state.mealPlanner);
	const [selectedDay, setSelectedDay] = useState(null);

	const openDay = (day) => {
		// Set the selected day when "Open Day" button is clicked
		setSelectedDay(day);
	};

	const closeModal = () => {
		setSelectedDay(null); // Close the modal by resetting selectedDay to null
	};

	return (
		<div className='advanced-order-meal-planner-container'>
			{mealPlanner.map((item) => {
				return (
					<div className='advanced-order-day-container' key={item.id}>
						<h1 className='advanced-order-day-title'>
							{item.day}
							<button className='advanced-order-day-open-btn' onClick={() => openDay(item)}>
								Open Day
							</button>
						</h1>
						{item.meals.map((meal) => {
							return (
								<div className='advanced-order-meal-container' key={meal.id}>
									<h1 className='advanced-order-meal-item-title'>{meal.name}</h1>
								</div>
							);
						})}
					</div>
				);
			})}
			{selectedDay && (
				<div className='modal'>
					<div className='modal-content'>
						{/* Render the details of the selected day here */}
						<h1 className='advanced-order-day-title-modal'>
							{selectedDay.day}
							<button className='close-modal-btn' onClick={closeModal}>
								Close
							</button>
						</h1>
						{/* You can access other properties of the selected day as needed */}
						{selectedDay.meals.map((meal) => (
							<div className='advanced-order-meal-container-modal' key={meal.id}>
								<h2 className='advanced-order-meal-item-title-modal'>{meal.name}</h2>

								<p className='advanced-order-meal-item-title'>Meal Flavor</p>
								<select className='advanced-order-meal-item-modal'>
									{FlavorTypeArray.map((flavor) => (
										<option key={flavor.id} value={flavor.name}>
											{flavor.name}
										</option>
									))}
								</select>
								<p className='advanced-order-meal-item-title'>Protein</p>
								<select className='advanced-order-meal-item-modal'>
									{proteinArray.map((protein) => (
										<option key={protein.id} value={protein.name}>
											{protein.name}
										</option>
									))}
								</select>
								<p className='advanced-order-meal-item-title'>Vegetables</p>
								<select className='advanced-order-meal-item-modal'>
									{vegetables.map((veggie) => (
										<option key={veggie.id} value={veggie.name}>
											{veggie.name}
										</option>
									))}
								</select>
								<p className='advanced-order-meal-item-title'>Carbs</p>
								<select className='advanced-order-meal-item-modal'>
									{carbs.map((carb) => (
										<option key={carb.id} value={carb.name}>
											{carb.name}
										</option>
									))}
								</select>
								<p className='advanced-order-meal-item-title'>Fruit</p>
								<select className='advanced-order-meal-item-modal'>
									{fruitsArr.map((carb) => (
										<option key={carb.id} value={carb.name}>
											{carb.name}
										</option>
									))}
								</select>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default AdvancedOrderMealPlanner;