import { useChefSurpriseStoreActions } from "../../../stateStore/ChefSurpriseStore";
import { useChefSurpriseStore } from "../../../stateStore/ChefSurpriseStore";

const ChefSurpriseHeadCount = () => {
	const headCount = useChefSurpriseStore((state) => state.headCount);
	const { setHeadCount } = useChefSurpriseStoreActions((actions) => actions);

	const handleHeadCount = (value) => {
		setHeadCount(value);
	};

	return (
		<div className='chef-surprise-menu-items-container'>
			<h2 className='chef-surprise-menu-item-text'>HeadCount:</h2>
			<div className='chef-surprise-headcount-container'>
				<h2 className='chef-surprise-headcount-text '>{headCount}</h2>
				<input
					className='chef-surprise-headcount-slider'
					type='range'
					id='volume'
					name='volume'
					min='1'
					max='5'
					step='1'
					value={headCount}
					onChange={(e) => handleHeadCount(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default ChefSurpriseHeadCount;
