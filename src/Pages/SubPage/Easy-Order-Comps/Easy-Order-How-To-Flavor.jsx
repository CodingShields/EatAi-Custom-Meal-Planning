import React, { useState, useEffect } from "react";
import FlavorTypeArray from "../../../assets/dataArrays/Flavor-Type-Array";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import "../../../css/easyOrder.css";

const HowToFlavor = () => {
	const { setFlavor } = useEasyOrderStoreActions();
	const [selectedOption, setSelectedOption] = useState("");
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [flavorDetails, setFlavorDetails] = useState("");
	const increaseStep = useRenderStepStore((state) => state.increaseStep);

	// Function to handle the selection change
	const handleSelectChange = (e) => {
		const selectedValue = e.target.value;
		setSelectedOption(selectedValue);
		setIsButtonDisabled(true);
		const flavorDetails = FlavorTypeArray.find((item) => item.name === selectedValue);
		if (flavorDetails) {
			setFlavorDetails(flavorDetails.details);
		} else {
			setFlavorDetails("");
		}
	};

	const handleClick = () => {
		setFlavor(selectedOption);
		increaseStep();
		setIsButtonDisabled(false);
		localStorage.setItem("selectedFlavor", selectedOption);
	};

	useEffect(() => {
		const savedSelectedOption = localStorage.getItem("selectedFlavor");
		if (savedSelectedOption) {
			setSelectedOption(savedSelectedOption);
			setIsButtonDisabled(true);
		}
	}, []);

	return (
		<>
			<h2
				style={{
					marginTop: "30px",
					textAlign: "center",
				}}
			>
				How would you like to flavor your food meal?
			</h2>
			<select
				className='easy-order-list'
				style={{
					marginTop: "10px",
					textAlign: "center",
				}}
				value={selectedOption}
				onChange={handleSelectChange}
			>
				<option> Select your option </option>
				{FlavorTypeArray.map((item) => {
					return (
						<option key={item.id} value={item.name}>
							{item.name}
						</option>
					);
				})}
			</select>
			<h2
				style={{
					marginTop: "60px",
					textAlign: "center",
				}}
			>
				{" "}
				Flavor Description{" "}
			</h2>
			<p
				style={{
					marginTop: "0px",
					textAlign: "center",
				}}
				className='easy-order-list'
			>
				{flavorDetails}
			</p>
			{isButtonDisabled ? (
				<button className='easy-order-btn' onClick={handleClick}>
					Make Selection
				</button>
			) : (
				""
			)}
		</>
	);
};

export default HowToFlavor;
