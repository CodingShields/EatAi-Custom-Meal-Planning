import React, { useEffect, useState } from "react";
import { useAdvancedOrderStore } from "../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStoreActions } from "../../../stateStore/AdvancedOrderStore";
import proteinArray from "../../../assets/dataArrays/proteinArray";
import FlavorTypeArray from "../../../assets/dataArrays/Flavor-Type-Array";
import vegetables from "../../../assets/dataArrays/veggieArray";
import carbs from "../../../assets/dataArrays/carbsArray";
import fruitsArr from "../../../assets/dataArrays/fruitsArray";
import emptyCheckBox from "../../../assets/images/emptyCheckBox.svg";
import completedCheckBox from "../../../assets/images/completedCheckBox.svg";
import healthyFats from "../../../assets/dataArrays/fatsArray";

const AdvancedOrderMealPlanner = () => {
	const mealPlanner = useAdvancedOrderStore((state) => state.mealPlanner);
	const [selectedDay, setSelectedDay] = useState(null);
	const plannedDays = useAdvancedOrderStore((state) => state.plannedDays);
	const { setMealPlanner } = useAdvancedOrderStoreActions((actions) => actions);

	const [state, setState] = useState({
		loading: false,
		error: null,
		errorMessage: "",
	});
	

	const handleOnFlavorChange = (value, id) => {
		const dayIndex = mealPlanner.findIndex((item) => item.id === id);
		const mealIndex = mealPlanner[dayIndex].meals.findIndex((item) => item.id === id);
		const newMealPlanner = [...mealPlanner];
		newMealPlanner[dayIndex].meals[mealIndex].flavor = value;
		setMealPlanner(newMealPlanner);
		if (value === "Choose Flavor") {
			const updateFlavor = [...mealPlanner];
			updateFlavor[dayIndex].meals[mealIndex].flavorCompleted = false;
			setMealPlanner(updateFlavor);
		}
		else {
			const updateFlavor = [...mealPlanner];
			updateFlavor[dayIndex].meals[mealIndex].flavorCompleted = true;
			setMealPlanner(updateFlavor);
		}
	};

	const handleOnProteinChange = (value, id) => {
		const dayIndex = mealPlanner.findIndex((item) => item.id === id);
		const mealIndex = mealPlanner[dayIndex].meals.findIndex((item) => item.id === id);
		const newMealPlanner = [...mealPlanner];
		newMealPlanner[dayIndex].meals[mealIndex].protein = value;
		setMealPlanner(newMealPlanner);
		if (value === "Choose Flavor") {
			const updateProtein = [...mealPlanner];
			updateProtein[dayIndex].meals[mealIndex].proteinCompleted = false;
			setMealPlanner(updateFlavor);
		} else {
			const updateProtein= [...mealPlanner];
			updateProtein[dayIndex].meals[mealIndex].proteinCompleted = true;
			setMealPlanner(updateFlavor);
		}
	};

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
									<div className='advanced-order-completed-container'>
										{state.completed ? (
											<p className='advanced-order-meal-container-completed-text'>Completed</p>
										) : (
											<p className='advanced-order-meal-container-completed-text'>Incomplete</p>
										)}
										{state.completed ? <img src={completedCheckBox} /> : <img src={emptyCheckBox} />}
									</div>
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
								<div className='advanced-order-title-container-modal'>
									<p className='advanced-order-meal-item-title'>Meal Flavor</p>
									{meal.flavorCompleted ? (
										<p className='advanced-order-meal-completed-text'>Completed</p>
									) : (
										<p className='advanced-order-meal-incomplete-text'>Incomplete</p>
									)}
									{meal.flavorCompleted ? (
										<img className='advanced-order-check-box' src={completedCheckBox} />
									) : (
										<img src={emptyCheckBox} />
									)}
								</div>
								<select
									onChange={(e) => {
										handleOnFlavorChange(e.target.value, meal.id);
									}}
									className='advanced-order-meal-item-modal'
								>
									{FlavorTypeArray.map((flavor) => (
										<option
											key={flavor.id} value={flavor.name}>
											{flavor.name}
										</option>
									))}
								</select>
								<p className='advanced-order-meal-item-title'>Protein</p>
								<select
									onChange={(e) => handleOnProteinChange(e.target.value, meal.id)}
									className='advanced-order-meal-item-modal'>
									{proteinArray.map((protein) => (
										<option
											key={protein.id}
											value={protein.name}>
											{protein.name}
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
								<p className='advanced-order-meal-item-title'>Fats</p>
								<select className='advanced-order-meal-item-modal'>
									{healthyFats.map((fat) => (
										<option key={fat.id} value={fat.name}>
											{fat.name}
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
