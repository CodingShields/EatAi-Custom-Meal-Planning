import React, { useState, useEffect } from "react";
//Global State
import { useAdvancedOrderStore } from "../../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStoreActions } from "../../../../stateStore/AdvancedOrderStore";

const StepOnePersonal = () => {

    const [state, setState] = useState({
        error: false,
        errorMessage: "",
        loading: false,
    })

    const { setGoal, setAge, setBirthDate, setGender, setPreferredUnit, setWeightImperial, setWeightMetric, setHeightImperial, setHeightMetric} = useAdvancedOrderStoreActions((actions) => actions);
    const { goal, age, birthDate, gender, preferredUnit, weightImperial, weightMetric, heightImperial, heightMetric } = useAdvancedOrderStore((state) => state);
   



    return (
        <div>
            <h1> Lets Build Your Profile</h1>
            <form>
                
					<label>
						Goal:
                        <select value={goal} defaultValue={0} onChange={(e) => setGoal(e.target.value)}>
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
                    Age:
                    <input type='number' name='age' min='1' max='120' value={age} onChange={(e)=> setAge(e.target.value)}/>
                </label>
                <br />
                <label>
                    Birth Date:
                    <input type='date' name='birthDate' value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
                </label>
                <br />
                <label>
                    Gender:
                    <select value={gender} defaultValue={0} onChange={(e) => setGender(e.target.value)}>
                        <option value='0' defaultValue={0}>Choose One</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </label>
				</form>
			</div>
		);
}
export default StepOnePersonal;