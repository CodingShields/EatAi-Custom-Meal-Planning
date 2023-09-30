import { nanoid } from "nanoid"

const vegArray = [
    {
    id: 0,
    name: "Please Select Veggie",
  },
  {
    id: nanoid(),
    name: "Spinach",
    calories: 23,
    carbs: 3.6,
    protein: 2.9,
    fats: 0.4
  },
  {
    id: nanoid(),
    name: "Broccoli",
    calories: 55,
    carbs: 11.2,
    protein: 3.7,
    fats: 0.6
  },
  {
    id: nanoid(),
    name: "Carrots",
    calories: 41,
    carbs: 10.0,
    protein: 0.9,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Kale",
    calories: 33,
    carbs: 6.7,
    protein: 2.9,
    fats: 0.5
  },
  {
    id: nanoid(),
    name: "Bell peppers (red, green, yellow)",
    calories: 31,
    carbs: 7.0,
    protein: 1.3,
    fats: 0.3
  },
  {
    id: nanoid(),
    name: "Tomatoes",
    calories: 18,
    carbs: 3.9,
    protein: 0.9,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Cauliflower",
    calories: 25,
    carbs: 5.3,
    protein: 2.0,
    fats: 0.3
  },
  {
    id: nanoid(),
    name: "Cucumbers",
    calories: 16,
    carbs: 3.6,
    protein: 0.7,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Zucchini",
    calories: 17,
    carbs: 3.1,
    protein: 1.2,
    fats: 0.3
  },
  {
    id: nanoid(),
    name: "Green beans",
    calories: 31,
    carbs: 7.1,
    protein: 1.8,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Asparagus",
    calories: 20,
    carbs: 3.7,
    protein: 2.2,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Brussels sprouts",
    calories: 43,
    carbs: 9.0,
    protein: 3.4,
    fats: 0.3
  },
  {
    id: nanoid(),
    name: "Peas",
    calories: 81,
    carbs: 14.5,
    protein: 5.4,
    fats: 0.4
  },
  {
    id: nanoid(),
    name: "Eggplant",
    calories: 25,
    carbs: 6.0,
    protein: 1.0,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Radishes",
    calories: 16,
    carbs: 3.4,
    protein: 0.7,
    fats: 0.1
  },
  {
    id: nanoid(),
    name: "Celery",
    calories: 6,
    carbs: 1.2,
    protein: 0.3,
    fats: 0.1
  },
  {
    id: nanoid(),
    name: "Beets",
    calories: 43,
    carbs: 9.6,
    protein: 1.6,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Artichokes",
    calories: 47,
    carbs: 10.5,
    protein: 3.3,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Onions",
    calories: 40,
    carbs: 9.3,
    protein: 1.1,
    fats: 0.1
  },
  {
    id: nanoid(),
    name: "Garlic",
    calories: 149,
    carbs: 33.1,
    protein: 6.3,
    fats: 0.5
  },
  {
    id: nanoid(),
    name: "Mushrooms",
    calories: 22,
    carbs: 3.3,
    protein: 3.1,
    fats: 0.3
  },
  {
    id: nanoid(),
    name: "Butternut squash",
    calories: 45,
    carbs: 12.0,
    protein: 1.0,
    fats: 0.1
  },
  {
    id: nanoid(),
    name: "Cabbage",
    calories: 22,
    carbs: 5.2,
    protein: 1.0,
    fats: 0.1
  },
  {
    id: nanoid(),
    name: "Swiss chard",
    calories: 19,
    carbs: 3.7,
    protein: 1.6,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Bok choy",
    calories: 13,
    carbs: 2.2,
    protein: 1.5,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Collard greens",
    calories: 33,
    carbs: 7.6,
    protein: 2.8,
    fats: 0.5
  },
  {
    id: nanoid(),
    name: "Okra",
    calories: 33,
    carbs: 7.5,
    protein: 1.9,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Leeks",
    calories: 61,
    carbs: 14.2,
    protein: 1.5,
    fats: 0.3
  },
  {
    id: nanoid(),
    name: "Turnips",
    calories: 28,
    carbs: 6.4,
    protein: 0.9,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Arugula",
    calories: 25,
    carbs: 3.7,
    protein: 2.6,
    fats: 0.7
  },
  {
    id: nanoid(),
    name: "Watercress",
    calories: 11,
    carbs: 1.3,
    protein: 2.3,
    fats: 0.1
  },
  {
    id: nanoid(),
    name: "Radicchio",
    calories: 9,
    carbs: 0.9,
    protein: 0.7,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Fennel",
    calories: 31,
    carbs: 7.3,
    protein: 1.2,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Snow peas",
    calories: 42,
    carbs: 8.3,
    protein: 2.8,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Kohlrabi",
    calories: 36,
    carbs: 8.4,
    protein: 1.5,
    fats: 0.3
  },
  {
    id: nanoid(),
    name: "Rutabaga",
    calories: 43,
    carbs: 9.9,
    protein: 1.0,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Parsnips",
    calories: 75,
    carbs: 17.3,
    protein: 1.2,
    fats: 0.3
  },
  {
    id: nanoid(),
    name: "Escarole",
    calories: 17,
    carbs: 3.4,
    protein: 1.3,
    fats: 0.1
  },
  {
    id: nanoid(),
    name: "Endive",
    calories: 7,
    carbs: 1.4,
    protein: 0.5,
    fats: 0.1
  },
  {
    id: nanoid(),
    name: "Mustard greens",
    calories: 27,
    carbs: 4.6,
    protein: 2.9,
    fats: 0.6
  },
  {
    id: nanoid(),
    name: "Daikon radish",
    calories: 18,
    carbs: 4.1,
    protein: 0.6,
    fats: 0.1
  },
  {
    id: nanoid(),
    name: "Chinese cabbage",
    calories: 12,
    carbs: 2.2,
    protein: 1.1,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Sorrel",
    calories: 22,
    carbs: 3.7,
    protein: 2.2,
    fats: 0.5
  },
  {
    id: nanoid(),
    name: "Chicory",
    calories: 23,
    carbs: 4.7,
    protein: 1.7,
    fats: 0.3
  },
  {
    id: nanoid(),
    name: "Hubbard squash",
    calories: 50,
    carbs: 13.6,
    protein: 1.0,
    fats: 0.6
  },
  {
    id: nanoid(),
    name: "Acorn squash",
    calories: 40,
    carbs: 10.6,
    protein: 0.8,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Yellow squash",
    calories: 18,
    carbs: 4.1,
    protein: 0.7,
    fats: 0.2
  },
  {
    id: nanoid(),
    name: "Spaghetti squash",
    calories: 31,
    carbs: 7.5,
    protein: 0.6,
    fats: 0.3
  }
]
export default vegArray