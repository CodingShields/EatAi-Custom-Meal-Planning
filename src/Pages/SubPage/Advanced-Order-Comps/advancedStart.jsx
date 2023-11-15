import React, { useState, useEffect } from "react";
// global state
import { useAdvancedOrderStore } from "../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStoreActions } from "../../../stateStore/AdvancedOrderStore";
//buttons
import AdvancedOrderBeginButton from "./beginButton";
//data
import advancedOrderStartQuestions from "../../../assets/dataArrays/advancedOrderStartQuestions";
import helpLinkData from "../../../assets/dataArrays/helpLinkData";
//utilites
import { months, daysFunction, yearsFunction, renderTextWithNewlines } from "../../../utilities/advancedUtilities";
//css
import "../../../css/Advanced-Order-CSS/start.css";

const AdvancedStart = () => {
	const { setTdee, setBmr } = useAdvancedOrderStoreActions((actions) => actions);
	const { tdee } = useAdvancedOrderStore((state) => state);
	const { bmr } = useAdvancedOrderStore((state) => state);


	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		renderHelp: true,
		renderGoal: false,
		renderMeasurement: false,
		renderGender: false,
		renderActivity: false,
		renderResults: false,
		goal: "",
		measurement: "",
		gender: "",
		activity: "",
		activityValue: "",
	});



	
	///need to fix this
	const handleHelpChange = (value) => {
		if (value === "Yes") {
			setState({ ...state, renderGoal: true, renderHelp: false });
		} else {
			setState({ ...state, renderGoal: false });
		}
		console.log("handleHelpChange", value);
	};

	const handleGoalChange = (value) => {
		if (value === "Choose One") {
			setState({ ...state, error: true, errorMessage: "Please Choose A Goal" });
			setTimeout(() => {
				setState({ ...state, error: false, errorMessage: "" });
			}, 1000);
		} else if (value === "Maintain Weight" || value === "Weight Loss" || value === "Weight Gain") {
			setState({ ...state, goal: value, renderGoal: false, renderMeasurement: true });
			console.log(state.renderBmr, "handleGoalChange true");
		}
	};

	const handleMeasurementChange = (value) => {
		console.log(value, "value");
		if (value === "Choose One") {
			setState({ ...state, error: true, errorMessage: "Please Choose A Measurement" });
			setTimeout(() => {
				setState({ ...state, error: false, errorMessage: "" });
			}, 1000);
		} else if (value === "Metric" || value === "Imperial") {
			setState({ ...state, measurement: value, renderGender: true, renderMeasurement: false });
			console.log("handleMeasurementChange true", value);
		}
	};

	const handleGenderChange = (value) => {
		if (value === "Choose One") {
			setState({ ...state, error: true, errorMessage: "Please Select One" });
			setTimeout(() => {
				setState({ ...state, error: false, errorMessage: "" });
			}, 1000);
		} else if (value === "Male" || "Female") {
			setState({ ...state, gender: value, renderActivity: true, renderGender: false });
		}
	};
	0
	
	const handleActivityChange = (value) => {
		
		console.log(value, "value");
		if (newValue === "Choose One") {
			setState({ ...state, error: true, errorMessage: "Please Select One" });
			setTimeout(() => {
				setState({ ...state, error: false, errorMessage: "" });
			}, 1000);
		} else {
			setState({ ...state, activity: newValue, renderActivity: false, renderResults: true });
		}
	};

	// const handleStats = (e) => {
	// };

	const handleHelpClick = (e) => {
		const bmrHelp = helpLinkData[0].message;
		const measureHelp = helpLinkData[1].message;
		if (e === "bmrHelp") {
			setState({ ...state, error: true, errorMessage: renderTextWithNewlines(bmrHelp) });
		} else if (e === "measureHelp") {
			setState({ ...state, error: true, errorMessage: renderTextWithNewlines(measureHelp) });
		}
	};

	const handleCloseModal = () => {
		setState({ ...state, error: false, errorMessage: "" });
	};

	const handleResetBtn = () => {
		setState({
			...state,
			renderHelp: true,
			renderGoal: false,
			renderMeasurement: false,
			renderBmr: false,
			renderGender: false,
			renderActivity: false,
		});
	};

	return (
		<div className='start-main'>
			<h1 className='start-title'>Welcome to the Advanced Order Page!</h1>
			<p>Please Answer the Following Questions:</p>
			{state.error ? (
				<div className='start-error-container-modal'>
					<div className='start-error-content'>
						<button onClick={handleCloseModal} className='start-close-modal-btn'>
							Close X
						</button>
						<p>{state.errorMessage}</p>
					</div>
				</div>
			) : null}
			{state.renderHelp ? (
				<div className='start-container'>
					<p>Do You Need Help With Your Calories?</p>
					<select className='select-list' onChange={(e) => handleHelpChange(e.target.value)}>
						{advancedOrderStartQuestions.help.map((item) => {
							return (
								<option className='select-list' key={item.id} value={item.name}>
									{item.name}
								</option>
							);
						})}
					</select>
				</div>
			) : null}
			{state.renderGoal ? (
				<div className='start-container'>
					<p>What is your goal?</p>
					<select className='select-list' onChange={(e) => handleGoalChange(e.target.value)}>
						{advancedOrderStartQuestions.goal.map((item) => {
							return (
								<option key={item.id} value={item.name}>
									{item.name}
								</option>
							);
						})}
					</select>
				</div>
			) : null}
			{state.renderMeasurement ? (
				<div className='start-container'>
					<p> Next we need to figure our your BMR</p>
					<p>
						Click{" "}
						<span onClick={() => handleHelpClick("bmrHelp")} className='here-link'>
							HERE
						</span>{" "}
						to learn more about BMR
					</p>
					<p>What is your preferred way to Measure?</p>
					<p>
						If you need help, Click
						<span onClick={() => handleHelpClick("measureHelp")} className='here-link' value={"measureHelp"}>
							{" "}
							HERE
						</span>
					</p>
					<select className='select-list' onChange={(e) => handleMeasurementChange(e.target.value)}>
						{advancedOrderStartQuestions.measurements.map((item) => {
							return (
								<option key={item.id} value={item.value}>
									{item.name}
								</option>
							);
						})}
					</select>
				</div>
			) : null}
			{state.renderGender ? (
				<div className='start-container'>
					<p>Are you male or female?</p>
					<select className='select-list' onChange={(e) => handleGenderChange(e.target.value)}>
						{advancedOrderStartQuestions.gender.map((item) => {
							return (
								<>
									<option value={item.name} key={item.id}>
										{item.name}
									</option>
								</>
							);
						})}
					</select>
				</div>
			) : null}
			{state.renderActivity ? (
				<div className='start-container'>
					<p> What is your current level of Activity?</p>
					<select className='select-list' onChange={(e) => handleActivityChange(e.target.value)}>
						{advancedOrderStartQuestions.activity.map((item) => {
							const optionValue = JSON.stringify({ name: item.name, value: item.value });
							return (
								<option key={item.id} value={optionValue}>
									{item.name}
								</option>
							);
						})}
					</select>
					<div className='birthday-container'>
						<div className="birthday-title-container">
							<p className="birthday-title">When is your birthday?</p>
						</div>
						<div className="birthday-select-container-main">
							<div className='birthday-select-container'>
								<p>Month</p>
								<select className='birthday-select-list-month'>
									{months.map((item) => {
										return (
											<option key={item.id} value={item.name}>
												{item.name}
											</option>
										);
									})}
								</select>
							</div>
							<div className='birthday-select-container'>
								<p>Day</p>
								<select className='birthday-select-list-day'>
									{daysFunction().map((item) => {
										return (
											<option key={item} value={item}>
												{item}
											</option>
										);
									})}
								</select>
							</div>
							<div className='birthday-select-container'>
								<p>Year</p>
								<select className='birthday-select-list-year'>
									{yearsFunction().map((item) => {
										return (
											<option key={item} value={item}>
												{item}
											</option>
										);
									})}
								</select>
							</div>
						</div>
					</div>
				</div>
			) : null}
			{state.renderResults ? (
				<div className='start-container'>
					<p>Here is your BMR</p>
					<p>Here is your TDEE</p>
					<p>Save your personal data HERE</p>
					<div className='start-container-modal'>
						<div>
							<p>Personal Data</p>
							<div>Current Profile Data</div>
							<div>
								<p>Profile Loaded</p>
								<img></img>
							</div>
						</div>
						<div>
							<p>Gender</p>
							<input>{state.gender}</input>
							<p>Measurement</p>
							<p>{state.measurement}</p>
							<p>Height</p>

							<p>Weight</p>
							<p>Age</p>
							<p>Birthday</p>
							<button>Save</button>
						</div>
					</div>
				</div>
			) : null}
			<button onClick={handleResetBtn}>Reset</button>
			<AdvancedOrderBeginButton />
		</div>
	);
};

export default AdvancedStart;
