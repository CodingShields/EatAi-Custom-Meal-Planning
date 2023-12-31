import { nanoid } from 'nanoid'


const CoursesArray = [
	{
		id: nanoid(),
		name: "Appetizer",
		description: "A small dish or course served before the main meal to stimulate the appetite.",
	},

	{
		id: nanoid(),
		name: "Main Course",
		description: "The primary dish of the meal, often featuring meat, fish, or a vegetarian option.",
	},
	{
		id: nanoid(),
		name: "Soup",
		description: "This course may include a bowl of soup or a salad.",
	},
	{
		id: nanoid(),
		name: "Dessert",
		description: "Typically, a sweet course served at the end of the meal.",
	},
	{
		id: nanoid(),
		name: "Salad",
		description: "This course may include a bowl of soup or a salad.",
	},
	{
		id: nanoid(),
		name: "Beverages",
		description: "These will include alcoholic and non-alcoholic beverages based on your menu selections.",
	},
];

export default CoursesArray