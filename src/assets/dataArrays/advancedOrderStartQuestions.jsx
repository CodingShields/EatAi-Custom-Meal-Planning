const advancedOrderStartQuestions = {
	help: [
		{ id: 0, name: "Choose One" },
		{ id: 1, name: "Yes" },
		{ id: 2, name: "No" },
	],
	goal: [
		{ id: 0, name: "Choose One" },
		{ id: 2, name: "Maintain Weight" },
		{ id: 3, name: "Weight Loss" },
		{ id: 4, name: "Weight Gain" },
	],
	activity: [
		{ id: 0, name: "Sedentary (little or no exercise)", value: 1.2 },
		{ id: 1, name: "Lightly active (light exercise or sports 1-3 days a week)", value: 1.375 },
		{ id: 2, name: "Moderately active (moderate exercise or sports 3-5 days a week)", value: 1.55 },
		{ id: 3, name: "Very active (hard exercise or sports 6-7 days a week)", value: 1.725 },
		{ id: 4, name: "Super active (very hard exercise, physical job, or training twice a day)", value: 1.9 },
	],
	gender: [
		{ id: 0, name: "Choose One"},
		{ id: 1, name: "Male" },
		{ id: 2, name: "Female" },
	],
	measurements: [
		{ id: 0, name: "Choose One" },
		{ id: 1, name: "Metric" },
		{ id: 2, name: "Imperial" },
	],
	stats: [
		{ id: 0, name: "What is your age?", value:"age"},
		{ id: 1, name: "What is your current height?", value:"height" },
		{ id: 2, name: "Current Weight", value:"weight"},
	],
};     
    export default advancedOrderStartQuestions;