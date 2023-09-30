import React from "react"
import proteinArray from "../assets/protein"
import fruitsArray from "../assets/fruits"
import carbsArray from "../assets/carb"
import vegArray from "../assets/veg"
import fatsArray from "../assets/fat"
import { nanoid } from "nanoid"

const foodArray = [
    {
        category: 'Protein',
        maxSelect:3,
        items: proteinArray.map(item => ({
            id: item.id,
            name: item.name,
        }))
    },
    {
        category: 'Fruits',
        maxSelect:4,
        items: fruitsArray.map(item => ({
            id: item.id,
            name: item.name,
        }))
    },
    {
        category: 'Carbs',
        maxSelect:3,
        items: carbsArray.map(item => ({
            id: item.id,
            name: item.name,
        }))
    },
    {
        category: 'Veg',
        maxSelect:3,
        items: vegArray.map(item => ({
            id: item.id,
            name: item.name,
        }))
    },
    {
        category: 'Fats',
        maxSelect:3,
        items: fatsArray.map(item => ({
            id: item.id,
            name: item.name,
         }))
    },
];

export default foodArray