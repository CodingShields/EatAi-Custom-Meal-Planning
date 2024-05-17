import MealTypeArray from "../../../assets/dataArrays/Meal-Type-Array";
import { useChefSurpriseStoreActions } from "../../../stateStore/ChefSurpriseStore";
import { useChefSurpriseStore } from "../../../stateStore/ChefSurpriseStore";

const ChefSurpriseEntree = () => {
	const entree = useChefSurpriseStore((state) => state.entree);
	const { setEntree } = useChefSurpriseStoreActions((actions) => actions);

	function handleEntree(event) {
		const selectedValue = event.target.value;
		setEntree(selectedValue);
	}

	return (
		<div className='chef-surprise-menu-items-container'>
			<h2 className='chef-surprise-menu-item-text'>Entree:</h2>
			<select onChange={handleEntree} value={entree} className='chef-surprise-drop-down-text'>
				{MealTypeArray.map((item) => (
					<option value={item.name} key={item.id}>
						{item.name}
					</option>
				))}
			</select>
		</div>
	);
};
export default ChefSurpriseEntree;
