import React,{useState, useEffect} from "react";
//global state
import { useAdvancedOrderStoreActions } from "../../../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStore } from "../../../../../stateStore/AdvancedOrderStore";


const AgeGender = () => {
	//global state actions
	const { setAge } = useAdvancedOrderStoreActions((actions) => actions);
	const { setBirthDate } = useAdvancedOrderStoreActions((actions) => actions);
	const { setGender } = useAdvancedOrderStoreActions((actions) => actions);
	//global state

	//state
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		age: 0,
		birthday: "",
		gender: "",
	});

	const handleConfirm = () => {
	}


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
			<button onClick={handleConfirm}>Confirm Info</button>
		</div>
	);
}
export default AgeGender;