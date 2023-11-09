import React, { useEffect, useState } from "react";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import "../../../css/easyOrder.css";

const EasyOrderHeadCount = () => {
	const [count, setCount] = useState(0);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const { setHeadCount } = useEasyOrderStoreActions();
	const increaseStep = useRenderStepStore((state) => state.increaseStep);


	const handleHeadCount = (value) => {
		setIsButtonDisabled(true);
		setCount(value);
		setHeadCount(value);
	};

	const handleClick = () => {
		setHeadCount(count);
		increaseStep();
		setIsButtonDisabled(false);
		localStorage.setItem("selectedCount", count);
	};

	useEffect(() => {
		const savedCheckedItem = localStorage.getItem("selectedCount");
		if (savedCheckedItem) {
			setCount(savedCheckedItem);
			setIsButtonDisabled(true);
		}
	}, []);

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
			{isButtonDisabled ? (
				<button className='easy-order-btn' onClick={handleClick}>
					Make Selection
				</button>
			) : (
				""
			)}
		</>
	);
};
export default EasyOrderHeadCount;
