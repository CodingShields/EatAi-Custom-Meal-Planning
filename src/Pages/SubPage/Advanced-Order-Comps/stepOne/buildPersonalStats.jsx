import React, { useEffect, useState } from "react";
import BuildWeight from "./buildWeight";
import BuildHeight from "./buildHeight";
import "../../../../css/Advanced-Order-CSS/stepOne.css";

const PersonalStats = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,

	});
	const [showHeight, setShowHeight] = useState(true);
	const [showWeight, setShowWeight] = useState(false)
	
	
  const handleConfirmHeight = () => {
	  setShowHeight(true)
	  setShowWeight(false)
	};

	const handleConfirmWeight = () => {
		setShowWeight(true)
		setShowHeight(false)
	}

	return (
		<div className='step-container'>
			<p className='build-stats-title'>Let's get started with some basic information</p>
			
				{showWeight ? <BuildWeight onConfirm={handleConfirmHeight}/> : ""}
				{showHeight ? <BuildHeight onConfirm={handleConfirmWeight}/> : ""}
		</div>
	);
};

export default PersonalStats;
