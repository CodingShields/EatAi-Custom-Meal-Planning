import { useEffect, useState } from "react";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import CoursesArray from "../../../assets/dataArrays/Courses-Array";

import windowCloseBtn from "../../../assets/images/windowCloseBtn.svg";

const EasyOrderCourses = () => {
	const [checkedCourseOptions, setCheckedCourseOptions] = useState([]);
	const { setCourses } = useEasyOrderStoreActions();

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		soupSelected: false,
		saladSelected: false,
	});

	const appCheckedMessage = "You checked Appetizer, make sure to select either Soup or Salad. You may select both.";
	const appUncheckedMessage = "You unchecked Appetizer, both soup and salad will be unchecked.";

	const handleCheckboxChange = (item) => {
		if (item === "Appetizer") {
			setState({ ...state, soupSelected: true, saladSelected: true });

			if (checkedCourseOptions.includes(item)) {
				// If "Appetizer" is already selected, deselect it
				setCheckedCourseOptions(checkedCourseOptions.filter((app) => app !== item));
				setState({ ...state, soupSelected: false, error: true, errorMessage: appUncheckedMessage, saladSelected: false });
			} else {
				setCheckedCourseOptions([...checkedCourseOptions, item]);
				setState({ ...state, error: true, errorMessage: appCheckedMessage, soupSelected: true, saladSelected: true });
			}
		} else {
			// Handle other items here if needed
			if (checkedCourseOptions.includes(item) && item !== "Appetizer") {
				setCheckedCourseOptions((prevOptions) => prevOptions.filter((app) => app !== item));
				setCourses(checkedCourseOptions);
			} else {
				setCheckedCourseOptions((prevOptions) => [...prevOptions, item]);
				setCourses(checkedCourseOptions);
			}
		}
	};

	useEffect(() => {
		if (!state.soupSelected || !state.saladSelected) {
			setCourses(checkedCourseOptions.filter((app) => app !== "Soup" && app !== "Salad"));
			setCheckedCourseOptions(checkedCourseOptions.filter((app) => app !== "Salad" && app !== "Soup"));
		}
	}, [state.soupSelected, state.saladSelected]);

	return (
		<>
			<div className='easy-order-menu-title-container'>
				<h2 className='easy-order-menu-text'>Please Pick As Many Courses As You Want</h2>
			</div>
			{state.error ? (
				<div className='error-container'>
					<div className='error-content'>
						<p className='error-message'>{state.errorMessage}</p>
						<img src={windowCloseBtn} onClick={() => setState({ ...state, error: false })} className='error-btn' />
					</div>
				</div>
			) : (
				""
			)}
			<ul className='easy-order-list-two-col'>
				{CoursesArray.map((item) => (
					<li key={item.id}>
						<input
							type='checkbox'
							value={item.name}
							disabled={
								(item.name === "Soup" && !state.soupSelected) || (item.name === "Salad" && !state.saladSelected)
									? true
									: false
							}
							checked={checkedCourseOptions.includes(item.name)}
							onChange={() => handleCheckboxChange(item.name)}
						/>
						{item.name}
					</li>
				))}
			</ul>
		</>
	);
};

export default EasyOrderCourses;
