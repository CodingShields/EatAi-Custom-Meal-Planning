import { useEffect, useState } from "react";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import CoursesArray from "../../../assets/dataArrays/Courses-Array";
import "../../../css/easyOrder.css";

const EasyOrderCourses = () => {
	const [checkedCourseOptions, setCheckedCourseOptions] = useState("");
	const { setCourses } = useEasyOrderStoreActions();

	const handleCheckboxChange = (item) => {
		if (checkedCourseOptions.includes(item)) {
			setCheckedCourseOptions(checkedCourseOptions.filter((checkedItem) => checkedItem !== item));
			setCourses(checkedCourseOptions.filter((checkedItem) => checkedItem !== item));
		} else {
			setCheckedCourseOptions([...checkedCourseOptions, item]);
			setCourses([...checkedCourseOptions, item]);
		}
	};
	return (
		<>
			<div className='easy-order-menu-title-container'>
				<h2 className='easy-order-menu-text'> Please Pick As Many Courses As You Want</h2>
			</div>
			<ul className='easy-order-list-two-col'>
				{CoursesArray.map((item) => (
					<li  key={item.id}>
						<input
							type='checkbox'
							value={item.name}
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
