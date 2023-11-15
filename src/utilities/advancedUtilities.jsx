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
