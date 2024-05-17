import { useState } from "react";
import MealBalance from "../../../assets/dataArrays/Meal-Balance-Array";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";

const EasyOrderMealBalance = () => {
	const [selectedBalance, setSelectedBalance] = useState("");
	const { setBalance } = useEasyOrderStoreActions();

	const handleChange = (item) => {
		setSelectedBalance(item);
		setBalance(item);
	};

	return (
		<>
			<div className='easy-order-menu-title-container'>
				<h1 className='easy-order-menu-text'>How would you like your Meal Balanced?</h1>
			</div>
			<div className='easy-order-options-container-big'>
				<ul className='easy-order-list-single-col'>
					{MealBalance.map((item) => (
						<li key={item.id}>
							<label>
								<input
									type='radio'
									value={item.name}
									checked={selectedBalance.includes(item.name)}
									onChange={() => handleChange(item.name)}
								/>
								{item.name}
							</label>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default EasyOrderMealBalance;
