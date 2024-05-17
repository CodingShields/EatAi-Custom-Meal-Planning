import { useState } from "react";
import Measure from "../../../assets/dataArrays/Measure-Options";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";

const EasyOrderMeasure = () => {
	const { setMeasure } = useEasyOrderStoreActions();
	const [checkedItems, setCheckedItems] = useState([]);

	const handleChange = (itemName) => {
		setMeasure(itemName);
		setCheckedItems([itemName]);	};

	return (
		<>
			<div className='easy-order-menu-title-container'>
				<h1 className='easy-order-menu-text'>How Would You Like Your Measurements?</h1>
			</div>
			<ul className='easy-order-list-single-col'>
				{Measure.map((item) => (
					<li key={item.id}>
						<label>
							<input
								type='radio'
								name='measure'
								value={item.name}
								checked={checkedItems.includes(item.name)}
								onChange={() => handleChange(item.name)}
							/>
							<span className='easy-order-menu-text'>{item.name}</span>
						</label>
						<p>{item.data}</p>
					</li>
				))}
			</ul>
		</>
	);
};

export default EasyOrderMeasure;
