import React from "react";
import { useAdvancedOrderStore } from "../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStoreActions } from "../../../stateStore/AdvancedOrderStore";
import ConfirmSelectionButton from "./confirmSelectionStepButton";


const AdvancedOrderMealSetup = () => {
	const plannedDays = useAdvancedOrderStore((state) => state.plannedDays);
	const plannedMeals = useAdvancedOrderStore((state) => state.plannedMeals);
	const { setPlannedDays } = useAdvancedOrderStoreActions((actions) => actions.setPlannedDays);
	const { setPlannedMeals } = useAdvancedOrderStoreActions((actions) => actions.setPlannedMeals);
	const { setMealPlanner } = useAdvancedOrderStoreActions((actions) => actions.setMealPlanner);
	const mealPlanner = useAdvancedOrderStore((state) => state.mealPlanner);

	console.log(mealPlanner, "mealPlanner");

	const dayValues = {
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday",
		7: "Sunday",
	};

	const mealValues = {
		1: "Meal #1",
		2: "Meal #2",
		3: "Meal #3",
		4: "Meal #4",
		5: "Meal #5",
		6: "Meal #6",
		7: "Meal #7",
		8: "Meal #8",
		9: "Meal #9",
		10: "Meal #10",
	};

	const handleDaysOnChange = (value) => {
		setPlannedDays(value);

		// Wait for this operation to complete
		// Additional logic you want to execute after setMealPlanner
	};

	const handleMealsOnChange = async (value) => {
		const newMealPlanner = [];

		for (let i = 0; i < plannedDays; i++) {
			const dayMeals = [];
			for (let j = 1; j <= value; j++) {
				dayMeals.push({
					id: j,
					name: mealValues[j],
					protein: 0,
					carb: 0,
					fat:0,
					calories: 0,
					dayCompleted: false,
					error: false,
					errorMessage: "",
					flavor: "",
					flavorCompleted: false,
					protein: [],
					proteinCompleted: false,
					vegetables: [],
					vegetablesCompleted: false,
					carbs: [],
					carbsCompleted: false,
					fats: [],
					fatsCompleted: false,
					fruits: [],
					fruitsCompleted: false,
					dietary: [],
					dietaryCompleted: false,
					dietaryDetails: "",
				});
			}
			newMealPlanner.push({
				id: i + 1,
				day: dayValues[i + 1],
				meals: dayMeals,
			});
		}

		await Promise.all([setPlannedMeals(value), setMealPlanner(newMealPlanner)]);

		// Additional logic you want to execute after setMealPlanner
	};

	return (
		<div className='advanced-order-comp-container'>
			<h1>Advanced Order Meal Setup</h1>
			<p> How Many Days Are We Prepping For?</p>
			<input
				required
				type='number'
				value={plannedDays}
				min={1}
				max={7}
				placeholder='Number of Days'
				className='advanced-order-meal-setup-input'
				onChange={(e) => handleDaysOnChange(e.target.value)}
			/>
			<p> How Meals/Snacks Each Day?</p>
			<input
				required
				type='number'
				min={1}
				max={6}
				value={plannedMeals}
				placeholder='Number of Meals/Snacks Per Day'
				className='advanced-order-meal-setup-input'
				onChange={(e) => handleMealsOnChange(e.target.value)}
			/>
			<ConfirmSelectionButton />
		</div>
	);
};

export default AdvancedOrderMealSetup;
