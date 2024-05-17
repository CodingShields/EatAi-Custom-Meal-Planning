import React, { useState, useEffect } from "react";
//global state
import { useAdvancedOrderStore } from "../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStoreActions } from "../../../stateStore/AdvancedOrderStore";
//Buttons
import ResetButton from "./startOverButton.jsx";
import PreviousButton from "./previousButton.jsx";
import ConfirmSelectionButton from "./confirmSelectionStepButton.jsx";


const AdvancedOrderMacroInput = () => {
	const { setProtein, setCarbohydrate, setFat} = useAdvancedOrderStoreActions();
    const protein = useAdvancedOrderStore((state) => state.protein);
    const carbohydrate = useAdvancedOrderStore((state) => state.carbohydrate);
    const fat = useAdvancedOrderStore((state) => state.fat);

	const [state, setState] = useState({
		error: false,
        errorMessage: "",
        protein: true,
        carbohydrate: true,
        fat: true,
        renderBtn: false,
    });
    
    useEffect(() => {
        if (protein === 0) {
            setState({ ...state, protein: false });
        } else if (carbohydrate === 0) {
            setState({ ...state, carbohydrate: false });
        } else if (fat === 0) {
            setState({ ...state, fat: false });
        } else if (protein && carbohydrate  && fat ) {
            setState({ ...state, renderBtn: true });
        }
    }, [protein, carbohydrate, fat]);
    
	const handleProteinChange = (value) => {
        setProtein(value);
        setState({ ...state, protein});
    };
    const handleCarbChange = (value) => {
        setCarbohydrate(value);
        setState({ ...state, userInput: + 1 });
    }
    const handleFatChange = (value) => {
        setFat(value);
        setState({ ...state, userInput: + 1});
    }
	return (
		<div className='macro-input-main-container'>
			<p className='macro-input-title'> Lets Set Your Macros</p>
			<div className='macro-container'>
				<div className='macro-input-container-left'>
					<p className='macro-title'>Macro</p>
					<p className='macro-title'> Protein</p>
					<p className='macro-title'> Carbs</p>
					<p className='macro-title'> Fats</p>
				</div>
				<div className='macro-input-container-middle'>
					<p className='macro-title'> Calories</p>
					<input
						type='text'
						placeHolder='0 Calories'
						className='calorie-result'
						disabled
						value={protein * 4 + " Calories"}
					/>
					<input
						type='text'
						placeHolder='0 Calories'
						className='calorie-result'
						disabled
						value={carbohydrate * 4 + " Calories"}
					/>
					<input
						type='text'
						placeHolder='0 Calories'
						className='calorie-result'
						disabled
						value={fat * 9 + " Calories"}
					/>
				</div>
				<div className='macro-input-container-right'>
					<p className='macro-title'>Macro Input</p>
					<input
						type='text'
						placeHolder='0 Calories'
						className='macro-input'
						value={protein}
						onChange={(e) => handleProteinChange(e.target.value)}
						maxLength={3}
					/>
					<input
						type='text'
						placeHolder='0 Macros'
						className='macro-input'
						value={carbohydrate}
						onChange={(e) => handleCarbChange(e.target.value)}
						maxLength={3}
					/>
					<input
						type='text'
						className='macro-input'
						value={fat}
						onChange={(e) => handleFatChange(e.target.value)}
						maxLength={3}
					/>
				</div>
			</div>
			<div className='total-calorie-container'>
				<p className='macro-title'> Total Calories</p>
				<input
					type='text'
					className='calorie-result'
					disabled
					value={protein * 4 + carbohydrate * 4 + fat * 9 + " Calories"}
				/>
			</div>
			<div className='btn-container'>
				<ResetButton />
				<PreviousButton />
				{state.renderBtn ? <ConfirmSelectionButton /> : null}
			</div>
		</div>
	);
};

export default AdvancedOrderMacroInput;
