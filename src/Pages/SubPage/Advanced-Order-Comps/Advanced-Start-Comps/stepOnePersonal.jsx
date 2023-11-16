import React, { useState, useEffect } from "react";
//Global State
import { useAdvancedOrderStore } from "../../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStoreActions } from "../../../../stateStore/AdvancedOrderStore";

const StepOnePersonal = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
    });
    
    const [data, setData] = useState({
        goal: "",
        age: "",
        birthDate: "",
        gender: "",
        preferredUnit: "",
        weight: "",
        height: "",
    })

	// const { setGoal } = useAdvancedOrderStoreActions((actions) => actions);
	// const { setAge } = useAdvancedOrderStoreActions((actions) => actions);
	// const { setBirthDate } = useAdvancedOrderStoreActions((actions) => actions);
	// const { setGender } = useAdvancedOrderStoreActions((actions) => actions);
	// const { setPreferredUnit } = useAdvancedOrderStoreActions((actions) => actions);
	// const { setWeight } = useAdvancedOrderStoreActions((actions) => actions);
	// const { setHeight } = useAdvancedOrderStoreActions((actions) => actions);



	return (
		<div>
			<h1> Lets Build Your Profile</h1>
			<form>
				<label>
					Goal:
                        <select defaultValue={0} value={data.goal} onChange={(e) => setData({ goal: e.target.value })}>
						<option value='0'>Choose One</option>
						<option value='1'>Maintain Weight</option>
						<option value='2'>Weight Loss</option>
						<option value='3'>Weight Gain</option>
					</select>
				</label>
				<br />
				<label>
					Measurements:
					<select value={preferredUnit} defaultValue={0} onChange={(e) => setPreferredUnit(e.target.value)}>
						<option value='0'>Choose One</option>
						<option value='1'>Metric</option>
						<option value='2'>Imperial</option>
					</select>
				</label>
				<br />
				<label>
					Weight:
					<input
						type='decimal'
						name='weight'
						min='1'
						max='800'
						step={preferredUnit === "Metric" ? ".01" : "1"}
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
					/>
					{preferredUnit === "Metric" ? <p>kg</p> : <p>lbs</p>}
				</label>
                <br />
                <label>
                    Height:
                    <input
                        type='decimal'
                        name='height'
                        min='1'
                        max='800'
                        step={preferredUnit === "Metric" ? ".01" : "1"}
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    {preferredUnit === "Metric" ? <p>cm</p> : <p>in</p>}
                    
                </label>
				<label>
					Age:
					<input type='number' name='age' min='1' max='120' value={age} onChange={(e) => setAge(e.target.value)} />
				</label>
				<br />
				<label>
					Birth Date:
					<input type='date' name='birthDate' value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
				</label>
				<br />
				<label>
					Gender:
					<select value={gender} defaultValue={0} onChange={(e) => setGender(e.target.value)}>
						<option value='0' defaultValue={0}>
							Choose One
						</option>
						<option value='1'>Male</option>
						<option value='2'>Female</option>
					</select>
				</label>
			</form>
		</div>
	);
};
export default StepOnePersonal;
