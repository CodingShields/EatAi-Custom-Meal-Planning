export const yearsFunction = () => {
	const years = [];
	for (let i = 1900; i <= 2023; i++) {
		years.push(i);
	}
	return years;
};

export const daysFunction = () => {
	const days = [];
	for (let i = 1; i <= 31; i++) {
		days.push(i);
	}
	return days;
};

export const months = [
	{ id: 0, name: "Choose One" },
	{ id: 1, name: "January" },
	{ id: 2, name: "February" },
	{ id: 3, name: "March" },
	{ id: 4, name: "April" },
	{ id: 5, name: "May" },
	{ id: 6, name: "June" },
	{ id: 7, name: "July" },
	{ id: 8, name: "August" },
	{ id: 9, name: "September" },
	{ id: 10, name: "October" },
	{ id: 11, name: "November" },
	{ id: 12, name: "December" },
];

export const renderTextWithNewlines = (text) => {
	return text.split("\n").map((line, index) => (
		<React.Fragment key={index}>
			<span>{line}</span>
			<br />
		</React.Fragment>
	));
};

export const feetAndInchesToCm = (feet, inches)=> {
  // 1 foot = 30.48 cm
  const feetToCm = feet * 30.48;

  // 1 inch = 2.54 cm
  const inchesToCm = inches * 2.54;

  // Total centimeters
  const totalCm = feetToCm + inchesToCm;

  return totalCm;
}

export const cmToFeetAndInches = () => {
	// 1 inch = 2.54 cm
	const inches = cm / 2.54;

	// 1 foot = 12 inches
	const feet = Math.floor(inches / 12);

	// Calculate the remaining inches
	const remainingInches = inches % 12;

	return {
		feet: feet,
		inches: remainingInches,
	};
}

export const calculateAge = (year) => {
	const currentYear = new Date().getFullYear();
	const age = currentYear - year;
	return age;
}

export const handlePoundsToKg = (weight) => {
    const kg = weight * 0.45359237;
    return kg;
}

export const handleKgToPounds = (weight) => {
	const pounds = weight * 2.20462262185;
	return pounds;
}