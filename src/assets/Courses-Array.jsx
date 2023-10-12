import { nanoid } from 'nanoid'


const courses = [  
    {
        id: nanoid(),
        name: "Appetizer",
        description: "A small dish or course served before the main meal to stimulate the appetite."
    },
    {
        id: nanoid(),
        name: "Salad",
        description: "This course may include a bowl of soup or a salad."
    },
    {
        id: nanoid(),
        name: "Soup",
        description: "This course may include a bowl of soup or a salad."
    },
    {
        id: nanoid(),
        name: "Main Course",
        description: "The primary dish of the meal, often featuring meat, fish, or a vegetarian option."
    },
    {
        id: nanoid(),
        name: "Side Dishes",
        description: "These can include vegetables, grains, or other accompaniments served alongside the main course."
    },
    {
        id: nanoid(),
        name: "Dessert",
        description: "Typically, a sweet course served at the end of the meal."
    }
];

export default courses