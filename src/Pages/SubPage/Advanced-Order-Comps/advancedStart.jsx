import React, { useState, useEffect } from "react";
// global state
import { useAdvancedOrderStore } from "../../../stateStore/AdvancedOrderStore";
import { useAdvancedOrderStoreActions } from "../../../stateStore/AdvancedOrderStore";
//buttons
import AdvancedOrderBeginButton from "./beginButton";
//data
import advancedOrderStartQuestions from "../../../assets/dataArrays/advancedOrderStartQuestions";
//utilities
import {
	months,
	daysFunction,
	yearsFunction,
	feetAndInchesToCm,
	cmToFeetAndInches,
	calculateAge,
	handlePoundsToKg,
} from "../../../utilities/advancedUtilities";

const AdvancedStart = () => {


	const year = state.year
	///need to fix this
	const handleHelpChange = (value) => {
		if (value === "Yes") {
			setState({ ...state, renderGoal: true, renderHelp: false, resetBtn: true });
		} else if (value === "No") {
			setState({ ...state, help: value });
		} else if (value === "Choose One") {
			setState({ ...state, error: true, errorMessage: "Please Choose One" });
			setTimeout(() => {
				setState({ ...state, error: false, errorMessage: "" });
			}, 1000);
		}
	};

	const handleGoalChange = (value) => {
		if (value === "Choose One") {
			setState({ ...state, error: true, errorMessage: "Please Choose A Goal" });
			setTimeout(() => {
				setState({ ...state, error: false, errorMessage: "" });
			}, 1000);
		} else if (value === "Maintain Weight" || value === "Weight Loss" || value === "Weight Gain") {
			setState({ ...state, goal: value, renderGoal: false, renderMeasurement: true });
		}
	};

	const handleMeasurementChange = (value) => {
		if (value === "Choose One") {
			setState({ ...state, error: true, errorMessage: "Please Choose A Measurement" });
			setTimeout(() => {
				setState({ ...state, error: false, errorMessage: "" });
			}, 1000);
		} else if (value === "Metric") {
			setState({ ...state, measurement: value, renderStats: true, renderMeasurement: false });
			console.log("handleMeasurementChange true", value);
			console.log(state.renderStats, "renderStats");
		} else if (value === "Imperial") {
			setState({ ...state, measurement: value, renderStats: true, renderMeasurement: false });
			console.log("handleMeasurementChange true", value);
			console.log(state.renderStats, "renderStats");
		}
	};

	const handleWeightChange = (value) => {
		console.log(value, "value");
		if (!state.weightDisable) {
			setState({ ...state, weight: value });
		}
	};

	const handleWeightConfirm = () => {
		setState({ ...state, weightDisable: true });
	};

	const handleHeightChange = (value) => {
		const metric = state.measurement === "Metric";
		const imperial = state.measurement === "Imperial";
		if (metric) {
			setState({ ...state, heightCm: value });
		} else if (imperial && value.length === 1) {
			setState({ ...state, feet: value });	
		} else if (imperial && value.length === 2) {
			setState({ ...state, inches: value });
		}
		}
	

	const handleConfirmHeight = () => {
		setState({ ...state, renderStats: false, renderGender: true });
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

	const handleActivityChange = (value) => {
		if (value === "Choose One") {
			setState({ ...state, error: true, errorMessage: "Please Select One" });
			setTimeout(() => {
				setState({ ...state, error: false, errorMessage: "" });
			}, 1000);
		} else {
			setState({ ...state, activity: value, renderActivity: false, renderResults: true });
		}
	};



	const handleBirthdayChange = (value) => {
		console.log(value);
		const date = {
			month: "",
			day: 0,
			year: 0,
		};
		if (typeof value === "string") {
			const parts = value.split("/");
			if (parts.length === 3) {
				const newMonth = parseInt(parts[0]);
				date.month += newMonth;
			}
		} else if (value.length === 1 || value.length === 2) {
			const newDay = parseInt(parts[1]);
			date.day += newDay;
		} else if (value.length === 4) {
			const newYear = parseInt(parts[2]);
			date.year += newYear;
		}
		console.log(date);
	};

	const handleCloseModal = () => {
		setState({ ...state, error: false, errorMessage: "" });
	};

	const handleResetBtn = () => {
		setState({
			error: false,
			errorMessage: "",
			help: "",
			renderHelp: true,
			renderGoal: false,
			renderMeasurement: false,
			renderStats: false,
			weightDisable: false,
			renderGender: false,
			renderActivity: false,
			renderResults: false,
			goal: "",
			measurement: "",
			height: "",
			feet: 0,
			inches: 0,
			weight: 0,
			gender: "",
			activity: "",
			activityValue: "",
			birthday: "",
			age: 0,
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
					
					<p className='start-container-title-bmr'>What is your preferred way to Measure?</p>
					
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
			{state.renderStats ? (
				<div className='personal-stats-container'>
					<div className='weight-container'>
						<p className='stats-title'> What is your Current Weight?</p>
						<input
							type='number'
							min={0}
							max={1000}
							maxLength={4}
							className='weight-input'
							value={state.weight}
							onChange={(e) => handleWeightChange(e.target.value)}
						/>
						<button onClick={handleWeightConfirm} disabled={state.weightDisable}>
							Confirm Weight
						</button>
						{state.weightDisable ? <p className='stats-title'> What is your Current Height?</p> : null}
					</div>

					{state.measurement === "Metric" && state.weightDisable ? (
						<div className='height-input-container'>
							<input
								type='number'
								placeholder='cm'
								className='height-input-cm'
								min={0}
								value={state.height}
								onChange={(e) => handleHeightChange(e.target.value)}
							/>
							<p className='height-text-cm'>cm</p>
						</div>
					) : null}
					{state.measurement === "Imperial" && state.weightDisable ? (
						<div className='height-input-container'>
							<p className='height-text-left'>'</p>
							<input
								type='number'
								placeholder='ft'
								class='height-input-left'
								min={0}
								max={7}
								value={state.height}
								onChange={(e) => handleHeightChange(e.target.value)}
							/>
							<p className='height-text-right'>"</p>
							<input
								type='number'
								placeholder='in'
								class='height-input-right'
								min={0}
								max={11}
								value={state.height}
								onChange={(e) => handleStatsChange(e.target.value)}
							/>
						</div>
					) : null}
					{state.weightDisable ? (
						<button className='confirm-stats-btn' onClick={handleConfirmHeight}>
							Confirm Height
						</button>
					) : null}
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
						<div className='birthday-title-container'>
							<p className='birthday-title'>When is your birthday?</p>
						</div>
						<div className='birthday-select-container-main'>
							<div className='birthday-select-container'>
								<p className='birthday-select-list-title'>Month</p>
								<select onChange={(e) => handleBirthdayChange(e.target.value)} className='birthday-select-list-month'>
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
								<p className='birthday-select-list-title'>Day</p>
								<select className='birthday-select-list-day' onChange={(e) => handleBirthdayChange(e.target.value)}>
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
								<p className='birthday-select-list-title'>Year</p>
								<select className='birthday-select-list-year' onChange={(e) => handleBirthdayChange(e.target.value)}>
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
					{/* Men BMR */}
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
							<p>{state.gender}</p>
							<p>Measurement</p>
							<p>{state.measurement}</p>
							<p>Height</p>
							{state.height}
							<p>Weight</p>
							<button>Change</button>

							<p>Age</p>
							{calculateAge(year)}
							<p>Birthday</p>

							<button>Save</button>
						</div>
					</div>
				</div>
			) : null}
			{!state.renderHelp ? <button onClick={handleResetBtn}>Start Over</button> : null}
			{state.renderHelp ? <AdvancedOrderBeginButton /> : null}
		</div>
	);
};

export default AdvancedStart;
