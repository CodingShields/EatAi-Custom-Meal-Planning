import React, { useEffect, useState } from "react";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";

const EasyOrderHeadCount = () => {
	const [count, setCount] = useState(0);
	const { setHeadCount } = useEasyOrderStoreActions();

	const handleHeadCount = (value) => {
		setCount(value);
		setHeadCount(value);
	};

	return (
		<>
			<h2 className='easy-order-menu-text'>How many guests will you be serving?</h2>
			<input
				className='easy-order-headcount-slider'
				type='range'
				id='head-count-volume'
				name='volume'
				min='1'
				max='50'
				step='1'
				value={count}
				onChange={(e) => handleHeadCount(e.target.value)}
			/>
			<div className='head-count-container'>
				<p className='head-count-title-text'>
					HeadCount: <span className='head-count-data-text'>{count}</span>
				</p>
			</div>
		</>
	);
};
export default EasyOrderHeadCount;
