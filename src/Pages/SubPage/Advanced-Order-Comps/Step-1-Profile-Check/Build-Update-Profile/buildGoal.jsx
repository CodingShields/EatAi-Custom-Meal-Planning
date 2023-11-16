import React, {useState, useEffect} from "react";
//global state
import { useAdvancedOrderStoreActions } from "../../../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStore } from "../../../../../stateStore/AdvancedOrderStore";


const Goal = () => {
    //global state actions
    const { setGoal } = useAdvancedOrderStoreActions((actions) => actions);
    //global state
    const goal = useAdvancedOrderStore((state) => state.goal);
    //state
    const [state, setState] = useState({ 
        error: false,
        errorMessage: "",
        loading: false,
        goal: "",
    });

    const handleConfirm = () => {
    }
    console.log(state.goal, 'state.goal');
    return (
        <div className='step-container'>
					<p>What is your current goal?</p>
					<select required value={state.goal} onChange={(e) => setState({ ...state, goal: e.target.value })}>
						<option value='chooseOne'>Choose One</option>
						<option value='maintainWeight'>Maintain Weight</option>
						<option value='weightLoss'>Weight Loss</option>
						<option value='weightGain'>Weight Gain</option>
            </select>
            <button onClick={handleConfirm}>Confirm Info</button>   
        </div>
    )
}
export default Goal;