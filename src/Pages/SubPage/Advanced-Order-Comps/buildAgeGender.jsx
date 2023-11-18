import React, { useState, useEffect } from "react";
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore";

const AgeGender = () => {
	const { setAge } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setBirthDate } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setGender } = useAdvancedOrderProfileStoreActions((actions) => actions);

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		age: 0,
		birthday: "",
		gender: "",
	});

	const handleConfirm = () => {
		setAge(state.age);
		setBirthDate(state.birthday);
		setGender(state.gender);
	};

	useEffect(() => {
		setState({ ...state, errorModal: false, errorMessage: "" });
	}, []);

	return (
		<div className='step-container'>
			<h4>What is your age?</h4>
			<input
				type='number'
				name='age'
				min={1}
				max={120}
				defaultValue={0}
				value={state.age}
				onChange={(e) => setState({ ...state, age: e.target.value })}
			/>

			<p>When is your birthday?</p>
			<input
				type='date'
				name='birthDate'
				defaultValue={"mm/dd/yyyy"}
				value={state.birthday}
				onChange={(e) => setState({ ...state, birthday: e.target.value })}
			/>

			<p>What is your Gender?</p>
			<select value={state.gender} defaultValue={0} onChange={(e) => setState({ ...state, gender: e.target.value })}>
				<option value='Choose One'>Choose One</option>
				<option value='Male'>Male</option>
				<option value='Female'>Female</option>
			</select>
			<button onClick={handleConfirm()}>Confirm Info</button>
		</div>
	);
};
export default AgeGender;
