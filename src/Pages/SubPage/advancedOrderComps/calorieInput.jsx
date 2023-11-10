import React, { useEffect, useState } from "react";
import { useAdvancedOrderStoreActions } from "../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStore } from "../../../stateStore/AdvancedOrderStore";

const AdvancedOrderCalorieInput = () => {
    // State
    const { caloriesPerDay } = useAdvancedOrderStore((state) => state);
    const { calorieBreakdown } = useAdvancedOrderStore((state) => state);
    const [calorieError, setCalorieError] = useState(false);

    // Actions
    const { setCaloriesPerDay } = useAdvancedOrderStoreActions((actions) => actions);
    const { setCalorieBreakdown } = useAdvancedOrderStoreActions((actions) => actions);

    const proteinPercentage = calorieBreakdown[0].percentage;
    const carbPercentage = calorieBreakdown[1].percentage;
    const fatPercentage = calorieBreakdown[2].percentage;

    const totalPercentage = ((proteinPercentage + carbPercentage + fatPercentage) + "%")
    const maxPercentage = 100;

    useEffect(() => {
        if (totalPercentage > maxPercentage) {
                console.log(calorieError, "calorieError");
				setCalorieError(true);
			}
		}, [{calorieBreakdown}]);




	const onChangeUserInput = (e) => {
		const value = e.target.value;
		setCaloriesPerDay(value);
		console.log(value, "value");
	};

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
		<>
			<p className='advanced-order-calorie-input-title-text'>Daily Calorie Goal</p>
			<input
				value={caloriesPerDay}
				onChange={(e) => onChangeUserInput(e)}
				className='advanced-order-calorie-user-input'
				required
				placeholder='Daily Calorie Goal'
				type='text'
			/>
			<p className='advanced-order-calorie-input-title-text'>Percentage Total:</p>
            <p
                style=
                {{
                    backgroundColor: calorieError ? "red" : "white",
                    fontSize: calorieError ? "60px" : "20px",
                    fontWeight: calorieError ? "700" : "none",
                    color: calorieError ? "red" : "black",
                }}
                className='advanced-order-calorie-input-title-text-result'>{totalPercentage}</p>
			{calorieBreakdown.map((item) => {
				return (
					<div className='advanced-order-calorie-input-container' key={item.id}>
						<div className='advanced-order-calorie-input-title-text-container'>
                            <p className='advanced-order-calorie-input-title-text'>{item.name}</p>
						</div>
						<div className='advanced-order-calorie-input-button-container'>
							<button className='advanced-order-calorie-input-button-sub' onClick={() => handleOnClickSub(item.id)}>
								-
							</button>
							<div className='advanced-order-calorie-percentage-input-read-only'>{item.percentage}%</div>
							<button className='advanced-order-calorie-input-button-add' onClick={() => handleOnClickAdd(item.id)}>
								+
							</button>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default AdvancedOrderCalorieInput;
