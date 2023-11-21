import React, { useState, useEffect } from "react";
import { useAdvancedOrderProfileStore } from "../../../stateStore/AdvancedOrderProfileStore";
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore";

import "../../../css/errorModal.css";
import "../../../css/Advanced-Order-CSS/stepOne.css";

const AgeGender = () => {
	const age = useAdvancedOrderProfileStore((state) => state.age);
	const birthday = useAdvancedOrderProfileStore((state) => state.birthday);
	const gender = useAdvancedOrderProfileStore((state) => state.gender);
	const { setAge } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setBirthday } = useAdvancedOrderProfileStoreActions((actions) => actions);
	const { setGender } = useAdvancedOrderProfileStoreActions((actions) => actions);

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		age: 0,
		birthday: "null",
		gender: "",
	});

	const initialState = () => {
		setState({
			error: false,
			errorMessage: "",
			loading: false,
			age: 0,
			birthday: "",
			gender: "",
		});
	};

	const handleConfirm = () => {
			setAge(state.age);
			setBirthday(state.birthday);
			setGender(state.gender);
		}

	useEffect(() => {
		initialState();
	}, []);

	const closeModalBtn = () => {
		setState({ ...state, errorModal: false, errorMessage: "" });
	};
	return (
		<div className='comp-container'>
			{state.error ? (
				<div className='error-container'>
					<div className='error-content'>
						<p className='error-message'>{state.errorMessage}</p>
						<button className='close-modal-btn' onClick={closeModalBtn()}>
							Close
						</button>
					</div>
				</div>
			) : null}
			<p className='title'>What is your age?</p>
			<input
				className='input'
				type='number'
				value={state.age}
				onChange={(e) => setState({ ...state, age: e.target.value })}
			/>
			<p className='title'>When is your birthday?</p>
			<input
				className='input'
				type='date'
				name='birthDate'
				min={"01/01/1900"}
				value={state.birthday}
				onChange={(e) => setState({ ...state, birthday: e.target.value })}
			/>
			<p className='title'>What is your Gender?</p>
			<select
				className='select-list '
				value={state.gender}
				onChange={(e) => setState({ ...state, gender: e.target.value })}
			>
				<option value='Choose One'>Choose One</option>
				<option value='Male'>Male</option>
				<option value='Female'>Female</option>
			</select>
			<button
				className='adv-order-btn'
				disabled={state.age === 0 && state.gender === "Choose One" && state.birthday === "" ? true : false}
				onClick={handleConfirm}
			>
				Confirm Info
			</button>
		</div>
	);
};
export default AgeGender;
