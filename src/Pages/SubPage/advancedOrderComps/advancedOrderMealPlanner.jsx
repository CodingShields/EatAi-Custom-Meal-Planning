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
import DietaryOptionsArray from "../../../assets/dataArrays/Dietary-Options-Array";

const AdvancedOrderMealPlanner = () => {
	const mealPlanner = useAdvancedOrderStore((state) => state.mealPlanner);
	const [selectedDay, setSelectedDay] = useState(null);
	const plannedDays = useAdvancedOrderStore((state) => state.plannedDays);
	const { setMealPlanner } = useAdvancedOrderStoreActions((actions) => actions);

	const [state, setState] = useState({
		loading: false,
		error: false,
		errorMessage: "",
	});

	const handleOnFlavorChange = (value, id) => {
		// Find the day index that contains the meal with the given id
		const dayIndex = mealPlanner.findIndex((day) => day.meals.some((meal) => meal.id === id));

		if (dayIndex !== -1) {
			// Find the meal index within the day's meals array
			const mealIndex = mealPlanner[dayIndex].meals.findIndex((meal) => meal.id === id);

			if (mealIndex !== -1) {
				// Clone the mealPlanner array to avoid mutating state directly
				const newMealPlanner = [...mealPlanner];

				// Get the meal for which you want to update the flavor array
				const mealToUpdate = newMealPlanner[dayIndex].meals[mealIndex];

				// Ensure that the 'flavor' property is initialized as an array if it's not
				if (!Array.isArray(mealToUpdate.flavor)) {
					mealToUpdate.flavor = [];
				}

				// Check if the selected flavor is already in the meal's flavor array
				const flavorIndex = mealToUpdate.flavor.indexOf(value);

				if (flavorIndex === -1) {
					// Remove any previously selected flavor, if any
					mealToUpdate.flavor = [];

					// Add the selected flavor to the meal's flavor array
					mealToUpdate.flavor.push(value);
				}

				// Update the flavorCompleted property
				mealToUpdate.flavorCompleted = mealToUpdate.flavor.length > 0;

				// Update the state with the modified mealPlanner
				setMealPlanner(newMealPlanner);

				console.log(newMealPlanner);
			}
		}
	};

	const handleOnDietaryChange = (value, id) => {
		const updatedMealPlanner = mealPlanner.map((day) => {
			const updatedMeals = day.meals.map((meal) => {
				if (meal.id === id) {
					// Clone the meal to avoid mutating state directly
					const updatedMeal = { ...meal };

					// Check if the selected protein is already in the meal's protein array
					const dietaryIndex = updatedMeal.dietary.indexOf(value);

					if (dietaryIndex === -1 && updatedMeal.dietary.value === "None") {
						updatedMeal.dietary.push("None");
						updatedMeal.dietaryCompleted = false;
					} else if (dietaryIndex === -1 && updatedMeal.dietary.length < 3) {
						// Add the selected protein to the meal's protein array
						updatedMeal.dietary.splice(updatedMeal.dietary.indexOf("None"), 1);
						updatedMeal.dietary.push(value);
						updatedMeal.dietaryCompleted = true;
					} else if (dietaryIndex !== -1) {
						// Remove the selected protein from the meal's protein array
						updatedMeal.dietary.splice(dietaryIndex, 1);
					} else if (updatedMeal.dietary.length === 3) {
						setState({ error: true, errorMessage: "You can only select up to 3 Dietary Options." });
						// You've reached the maximum number of selections (3)
						// You can display a message or handle it in a way that informs the user.
					}

					// Update the proteinCompleted property
					updatedMeal.dietaryCompleted = updatedMeal.dietary.length > 0;

					return updatedMeal;
				}
				return meal;
			});

			return { ...day, meals: updatedMeals };
		});

		// Update the state with the modified mealPlanner
		setMealPlanner(updatedMealPlanner);

		console.log(updatedMealPlanner);
	};

	const handleOnProteinChange = (value, id) => {
		const updatedMealPlanner = mealPlanner.map((day) => {
			const updatedMeals = day.meals.map((meal) => {
				if (meal.id === id) {
					// Clone the meal to avoid mutating state directly
					const updatedMeal = { ...meal };

					// Check if the selected protein is already in the meal's protein array
					const proteinIndex = updatedMeal.protein.indexOf(value);

					if (proteinIndex === -1 && updatedMeal.protein.length < 3) {
						// Add the selected protein to the meal's protein array
						updatedMeal.protein.push(value);
					} else if (proteinIndex !== -1) {
						// Remove the selected protein from the meal's protein array
						updatedMeal.protein.splice(proteinIndex, 1);
					} else if (updatedMeal.protein.length === 3) {
						setState({ error: true, errorMessage: "You can only select up to 3 Proteins." });
						setTimeout(() => {
							setState({ error: false, message: "" });
						}, 2000);
						// You've reached the maximum number of selections (3)
						// You can display a message or handle it in a way that informs the user.
					}

					// Update the proteinCompleted property
					updatedMeal.proteinCompleted = updatedMeal.protein.length > 0;

					return updatedMeal;
				}
				return meal;
			});

			return { ...day, meals: updatedMeals };
		});

		// Update the state with the modified mealPlanner
		setMealPlanner(updatedMealPlanner);

		console.log(updatedMealPlanner);
	};

	const handleCarbChange = (value, id) => {
		const updatedMealPlanner = mealPlanner.map((day) => {
			const updatedMeals = day.meals.map((meal) => {
				if (meal.id === id) {
					// Clone the meal to avoid mutating state directly
					const updatedMeal = { ...meal };

					// Check if the selected protein is already in the meal's protein array
					const carbIndex = updatedMeal.carbs.indexOf(value);

					if (carbIndex === -1 && updatedMeal.carbs.length < 3) {
						// Add the selected protein to the meal's protein array
						updatedMeal.carbs.push(value);
					} else if (carbIndex !== -1) {
						// Remove the selected protein from the meal's protein array
						updatedMeal.carbs.splice(carbIndex, 1);
					} else if (updatedMeal.carbs.length === 3) {
						setState({ error: true, errorMessage: "You can only select up to 3 Carbohydrates." });
						setTimeout(() => {
							setState({ error: false, message: "" });
						}, 2000);
						// You've reached the maximum number of selections (3)
						// You can display a message or handle it in a way that informs the user.
					}

					// Update the proteinCompleted property
					updatedMeal.carbCompleted = updatedMeal.carbs.length > 0;

					return updatedMeal;
				}
				return meal;
			});

			return { ...day, meals: updatedMeals };
		});

		// Update the state with the modified mealPlanner
		setMealPlanner(updatedMealPlanner);

		console.log(updatedMealPlanner);
	};
	const handleFatsChange = (value, id) => {
		const updatedMealPlanner = mealPlanner.map((day) => {
			const updatedMeals = day.meals.map((meal) => {
				if (meal.id === id) {
					// Clone the meal to avoid mutating state directly
					const updatedMeal = { ...meal };

					// Check if the selected protein is already in the meal's protein array
					const fatsIndex = updatedMeal.fats.indexOf(value);

					if (fatsIndex === -1 && updatedMeal.fats.length < 3) {
						// Add the selected protein to the meal's protein array
						updatedMeal.fats.push(value);
					} else if (fatsIndex !== -1) {
						// Remove the selected protein from the meal's protein array
						updatedMeal.fats.splice(fatsIndex, 1);
					} else if (updatedMeal.fats.length === 3) {
						setState({ error: true, errorMessage: "You can only select up to 3 Fats." });
						setTimeout(() => {
							setState({ error: false, message: "" });
						}, 2000);
						// You've reached the maximum number of selections (3)
						// You can display a message or handle it in a way that informs the user.
					}

					// Update the proteinCompleted property
					updatedMeal.fatsCompleted = updatedMeal.fats.length > 0;

					return updatedMeal;
				}
				return meal;
			});

			return { ...day, meals: updatedMeals };
		});

		// Update the state with the modified mealPlanner
		setMealPlanner(updatedMealPlanner);

		console.log(updatedMealPlanner);
	};

	const handleVegChange = (value, id) => {
		const updatedMealPlanner = mealPlanner.map((day) => {
			const updatedMeals = day.meals.map((meal) => {
				if (meal.id === id) {
					// Clone the meal to avoid mutating state directly
					const updatedMeal = { ...meal };

					// Check if the selected protein is already in the meal's protein array
					const vegetablesIndex = updatedMeal.vegetables.indexOf(value);

					if (vegetablesIndex === -1 && updatedMeal.vegetables.length < 6) {
						// Add the selected protein to the meal's protein array
						updatedMeal.vegetables.push(value);
					} else if (vegetablesIndex !== -1) {
						// Remove the selected protein from the meal's protein array
						updatedMeal.vegetables.splice(vegetablesIndex, 1);
					} else if (updatedMeal.vegetables.length === 6) {
						setState({ error: true, errorMessage: "You can only select up to 6 Vegetables." });
						setTimeout(() => {
							setState({ error: false, message: "" });
						}, 2000);
						// You've reached the maximum number of selections (3)
						// You can display a message or handle it in a way that informs the user.
					}

					// Update the proteinCompleted property
					updatedMeal.vegetablesCompleted = updatedMeal.vegetables.length > 0;

					return updatedMeal;
				}
				return meal;
			});

			return { ...day, meals: updatedMeals };
		});

		// Update the state with the modified mealPlanner
		setMealPlanner(updatedMealPlanner);

		console.log(updatedMealPlanner);
	};

	const handleFruitChange = (value, id) => {
		const updatedMealPlanner = mealPlanner.map((day) => {
			const updatedMeals = day.meals.map((meal) => {
				if (meal.id === id) {
					// Clone the meal to avoid mutating state directly
					const updatedMeal = { ...meal };

					// Check if the selected protein is already in the meal's protein array
					const fruitsIndex = updatedMeal.fruits.indexOf(value);

					if (fruitsIndex === -1 && updatedMeal.fruits.length < 6) {
						// Add the selected protein to the meal's protein array
						updatedMeal.fruits.push(value);
					} else if (fruitsIndex !== -1) {
						// Remove the selected protein from the meal's protein array
						updatedMeal.fruits.splice(fruitsIndex, 1);
					} else if (updatedMeal.fruits.length === 6) {
						setState({ error: true, errorMessage: "You can only select up to 4 Fruits." });
						setTimeout(() => {
							setState({ error: false, message: "" });
						}, 2000);
						// You've reached the maximum number of selections (3)
						// You can display a message or handle it in a way that informs the user.
					}

					// Update the proteinCompleted property
					updatedMeal.vegetablesCompleted = updatedMeal.vegetables.length > 0;

					return updatedMeal;
				}
				return meal;
			});

			return { ...day, meals: updatedMeals };
		});

		// Update the state with the modified mealPlanner
		setMealPlanner(updatedMealPlanner);

		console.log(updatedMealPlanner);
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
									<div className='advanced-order-meal-container'>
										<h1 className='advanced-order-meal-item-title'>{meal.name}</h1>
										{/* <div className='advanced-order-completed-container'> */}
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
						<h1 className='advanced-order-day-title-modal'>
							{state.error ? (
								<div className='advanced-order-error-modal-message-container'>
									<p className='advanced-order-error-modal-message'>{state.errorMessage}</p>
								</div>
							) : null}
							{selectedDay.day}
							<button className='close-modal-btn' onClick={closeModal}>
								Close
							</button>
						</h1>
						{selectedDay.meals.map((meal) => (
							<div className='advanced-order-meal-container-modal' key={meal.id}>
								<h2 className='advanced-order-meal-item-title-modal'>{meal.name}</h2>
								<div className='advanced-order-title-container-modal'>
									<p className='advanced-order-meal-item-title'>Flavor: {meal.flavor.length} of 1</p>
									<div className='advanced-order-check-box-container'>
										{meal.flavorCompleted ? (
											<>
												<p className='advanced-order-meal-completed-text'>Completed</p>
												<img className='advanced-order-check-box' src={completedCheckBox} />
											</>
										) : (
											<>
												<p className='advanced-order-meal-incomplete-text'>Incomplete</p>
												<img src={emptyCheckBox} />
											</>
										)}
									</div>
								</div>
								<select
									onChange={(e) => {
										handleOnFlavorChange(e.target.value, meal.id);
									}}
									className='advanced-order-meal-item-modal'
								>
									{FlavorTypeArray.map((flavor) => {
										const isSelected = meal.flavor.includes(flavor.name);

										return (
											<option className={isSelected ? "selected-item" : ""} key={flavor.id} value={flavor.name}>
												{flavor.name}
											</option>
										);
									})}
								</select>

								<div className='advanced-order-title-container-modal'>
									<p className='advanced-order-meal-item-title'>Dietary: {meal.dietary.length} of 3</p>
									<div className='advanced-order-check-box-container'>
										{meal.dietaryCompleted ? (
											<>
												<p className='advanced-order-meal-completed-text'>Completed</p>
												<img className='advanced-order-check-box' src={completedCheckBox} />
											</>
										) : (
											<>
												<p className='advanced-order-meal-incomplete-text'>Incomplete</p>
												<img src={emptyCheckBox} />
											</>
										)}
									</div>
								</div>
								<select
									onChange={(e) => handleOnDietaryChange(e.target.value, meal.id)}
									className='advanced-order-meal-item-modal'
								>
									{DietaryOptionsArray.map((dietary) => {
										const isSelected = meal.dietary.includes(dietary.name);
										const isDisabled = meal.dietary.includes("None");
										return (
											<option
												disable={isDisabled ? "disabled" : ""}
												className={isSelected ? "selected-item" : ""}
												key={dietary.id}
												value={dietary.name}
											>
												{dietary.name}
											</option>
										);
									})}
								</select>
								<div className='advanced-order-title-container-modal'>
									<p className='advanced-order-meal-item-title'>Protein: {meal.protein.length} of 3</p>
									<div className='advanced-order-check-box-container'>
										{meal.proteinCompleted ? (
											<>
												<p className='advanced-order-meal-completed-text'>Completed</p>
												<img className='advanced-order-check-box' src={completedCheckBox} />
											</>
										) : (
											<>
												<p className='advanced-order-meal-incomplete-text'>Incomplete</p>
												<img src={emptyCheckBox} />
											</>
										)}
									</div>
								</div>

								<select
									onChange={(e) => handleOnProteinChange(e.target.value, meal.id)}
									className='advanced-order-meal-item-modal'
								>
									{proteinArray.map((protein) => {
										const isSelected = meal.protein.includes(protein.name); // Check if the protein is selected

										return (
											<option key={protein.id} value={protein.name} className={isSelected ? "selected-item" : ""}>
												{protein.name}
											</option>
										);
									})}
								</select>
								<div className='advanced-order-title-container-modal'>
									<p className='advanced-order-meal-item-title'>
										Carbs:
										<span className='advanced-order-meal-item-title-span'> {meal.carbs.length} of 3</span>
									</p>
									<div className='advanced-order-check-box-container'>
										{meal.carbsCompleted ? (
											<>
												<p className='advanced-order-meal-completed-text'>Completed</p>
												<img className='advanced-order-check-box' src={completedCheckBox} />
											</>
										) : (
											<>
												<p className='advanced-order-meal-incomplete-text'>Incomplete</p>
												<img src={emptyCheckBox} />
											</>
										)}
									</div>
								</div>
								<select
									onChange={(e) => {
										handleCarbChange(e.target.value, meal.id);
									}}
									className='advanced-order-meal-item-modal'
								>
									{carbs.map((carb) => {
										const isSelected = meal.carbs.includes(carb.name);
										return (
											<option className={isSelected ? "selected-item" : ""} key={carb.id} value={carb.name}>
												{carb.name}
											</option>
										);
									})}
								</select>
								<div className='advanced-order-title-container-modal'>
									<p className='advanced-order-meal-item-title'>
										Fats:
										<span className='advanced-order-meal-item-title-span'> {meal.fats.length} of 3</span>
									</p>
									<div className='advanced-order-check-box-container'>
										{meal.fatsCompleted ? (
											<>
												<p className='advanced-order-meal-completed-text'>Completed</p>
												<img className='advanced-order-check-box' src={completedCheckBox} />
											</>
										) : (
											<>
												<p className='advanced-order-meal-incomplete-text'>Incomplete</p>
												<img src={emptyCheckBox} />
											</>
										)}
									</div>
								</div>
								<select
									onChange={(e) => {
										handleFatsChange(e.target.value, meal.id);
									}}
									className='advanced-order-meal-item-modal'
								>
									{healthyFats.map((fat) => {
										const isSelected = meal.fats.includes(fat.name);
										return (
											<option
												className={meal.fats.includes(fat.name) ? "selected-item" : ""}
												key={fat.id}
												value={fat.name}
											>
												{fat.name}
											</option>
										);
									})}
								</select>
								<div className='advanced-order-title-container-modal'>
									<p className='advanced-order-meal-item-title'>
										Veggies:
										<span className='advanced-order-meal-item-title-span'> {meal.vegetables.length} of 6</span>
									</p>
									<div className='advanced-order-check-box-container'>
										{meal.vegetablesCompleted ? (
											<>
												<p className='advanced-order-meal-completed-text'>Completed</p>
												<img className='advanced-order-check-box' src={completedCheckBox} />
											</>
										) : (
											<>
												<p className='advanced-order-meal-incomplete-text'>Incomplete</p>
												<img src={emptyCheckBox} />
											</>
										)}
									</div>
								</div>
								<select
									onChange={(e) => {
										handleVegChange(e.target.value, meal.id);
									}}
									className='advanced-order-meal-item-modal'
								>
									{vegetables.map((veggie) => {
										const isSelected = meal.vegetables.includes(veggie.name);
										return (
											<option
												className={meal.vegetables.includes(veggie.name) ? "selected-item" : ""}
												key={veggie.id}
												value={veggie.name}
											>
												{veggie.name}
											</option>
										);
									})}
								</select>
								<div className='advanced-order-title-container-modal'>
									<p className='advanced-order-meal-item-title'>
										Fruits:
										<span className='advanced-order-meal-item-title-span'> {meal.fruits.length} of 4</span>
									</p>
									<div className='advanced-order-check-box-container'>
										{meal.fruitsCompleted ? (
											<>
												<p className='advanced-order-meal-completed-text'>Completed</p>
												<img className='advanced-order-check-box' src={completedCheckBox} />
											</>
										) : (
											<>
												<p className='advanced-order-meal-incomplete-text'>Incomplete</p>
												<img src={emptyCheckBox} />
											</>
										)}
									</div>
								</div>
								<select
									onChange={(e) => {
										handleFruitChange(e.target.value, meal.id);
									}}
									className='advanced-order-meal-item-modal'
								>
									{fruitsArr.map((fruit) => {
										const isSelected = meal.fruits.includes(fruit.name);
										return (
											<option className={isSelected ? "selected-item" : ""} key={fruit.id} value={fruit.name}>
												{fruit.name}
											</option>
										);
									})}
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
