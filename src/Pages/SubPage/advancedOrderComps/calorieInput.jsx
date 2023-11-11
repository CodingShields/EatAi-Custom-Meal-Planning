import React, { useEffect, useState } from "react";
import { useAdvancedOrderStoreActions } from "../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStore } from "../../../stateStore/AdvancedOrderStore";

const AdvancedOrderCalorieInput = () => {
	// State
	const { caloriesPerDay } = useAdvancedOrderStore((state) => state);
	const { calorieBreakdown } = useAdvancedOrderStore((state) => state);

	//error
	const [error, setError] = useState({
		calorieTotalError: false,
		caloriePerDayError: false,
		highProteinError: false,
		highCarbError: false,
		highFatError: false,
	});
	const [errorMessage, setErrorMessage] = useState("");

	// Actions
	const { setCaloriesPerDay } = useAdvancedOrderStoreActions((actions) => actions);
	const { setCalorieBreakdown } = useAdvancedOrderStoreActions((actions) => actions);

	const proteinPercentage = calorieBreakdown[0].percentage;
	const proteinMacro = (Math.floor(caloriesPerDay * (proteinPercentage / 100) / 4)+ " grams");
	const carbPercentage = calorieBreakdown[1].percentage;
	const carbMacro = (Math.floor((caloriesPerDay * (carbPercentage / 100)) / 4)+ " grams");
	const fatPercentage = calorieBreakdown[2].percentage;
	const fatMacro =( Math.floor((caloriesPerDay * (fatPercentage / 100)) / 9)+ " grams");

	const totalPercentage = proteinPercentage + carbPercentage + fatPercentage;

	useEffect(() => {
		if (totalPercentage > 100) {
			setError({ calorieTotalError: true });
			setErrorMessage("Total Percentage cannot be greater than 100%. Please reduce one of the percentages.");
			setTimeout(() => {
				setError({ calorieTotalError: false });
			}, 3000);
		}
		else if (caloriesPerDay === 0) {
			setError({ caloriePerDayError: true });
			setErrorMessage("Please Set a Calorie Goal");
			setTimeout(() => {
				setError({ caloriePerDayError: false });
			}, 3500);
		}
		else if (proteinPercentage > 50) {
			setError({ highProteinError: true });
			setErrorMessage("High Protein Intake Can Lead To Health and Digestion Issues");
			setTimeout(() => {
				setError({ highProteinError: false });
			}, 3500);
		}
	}, [totalPercentage, caloriesPerDay, proteinPercentage]);

	const onChangeUserInput = (e) => {
		const value = e.target.value;
		setCaloriesPerDay(value);
		console.log(value, "value");
	};

console.log(proteinPercentage, "proteinPercentage");

	const handleOnClickSub = (itemId) => {
		// Find the index of the item with the given itemId in calorieBreakdown
		const itemIndex = calorieBreakdown.findIndex((item) => item.id === itemId);

		if (itemIndex !== -1) {
			// Clone the existing calorieBreakdown array
			const updatedCalorieBreakdown = [...calorieBreakdown];

			// Decrease the percentage of the item at itemIndex by 5
			updatedCalorieBreakdown[itemIndex].percentage -= 5;

			// Update the state with the modified array
			setCalorieBreakdown(updatedCalorieBreakdown);
		}
	};

	const handleOnClickAdd = (itemId) => {
		const itemIndex = calorieBreakdown.findIndex((item) => item.id === itemId);

		if (itemIndex !== -1) {
			// Clone the existing calorieBreakdown array
			const updatedCalorieBreakdown = [...calorieBreakdown];

			// Decrease the percentage of the item at itemIndex by 5
			updatedCalorieBreakdown[itemIndex].percentage += 5;

			// Update the state with the modified array
			setCalorieBreakdown(updatedCalorieBreakdown);
		}
	};

	return (
		<div className='advanced-order-calorie-container'>
			<p
				className='advanced-order-calorie-input-title-text'>Daily Calorie Goal</p>
			<input
				value={caloriesPerDay}
				onChange={(e) => onChangeUserInput(e)}
				className='advanced-order-calorie-user-input'
				required
				placeholder='0 Calories'
				type='text'
			/>
			<p className='advanced-order-calorie-input-title-text'>Percentage Total:</p>
			{error.calorieTotalError ||
			error.caloriePerDayError ||
			error.highCarbError ||
			error.highFatError ||
			error.highProteinError ? (
				<div className='advanced-order-error-modal-container'>
					<h3 className='advanced-order-error-modal-content'>{errorMessage}</h3>
				</div>
			) : null}
			<p
				style={{
					backgroundColor: totalPercentage > 100 ? "red" : "white",
					fontSize: totalPercentage > 100 ? "30px" : "20px",
					fontWeight: totalPercentage > 100 ? "700" : "none",
					color: totalPercentage > 100 ? "white" : "black",
					padding: totalPercentage > 100 ? "30px" : "20px",
				}}
				className='advanced-order-calorie-input-title-text-result'
			>
				{totalPercentage}%
			</p>
			{calorieBreakdown.map((item) => {
				return (
					<div className='advanced-order-calorie-input-container' key={item.id}>
						<div className='advanced-order-calorie-input-title-text-container'>
							<p className='advanced-order-calorie-input-title-text'>{item.name}</p>
						</div>
						<div className='advanced-order-calorie-input-button-container'>
							<button
								disabled={
									error.caloriePerDayError === 0 || totalPercentage === 0 || item.percentage === 0 ? true : false
								}
								className='advanced-order-calorie-input-button-sub'
								onClick={() => handleOnClickSub(item.id)}
							>
								-
							</button>
							<div className='advanced-order-calorie-percentage-input-read-only'>{item.percentage}%</div>
								
							<button
								disabled={caloriesPerDay === 0 || totalPercentage === 105 ? true : false}
								className='advanced-order-calorie-input-button-add'
								onClick={() => handleOnClickAdd(item.id)}
							>
								+
							</button>
							
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default AdvancedOrderCalorieInput;
