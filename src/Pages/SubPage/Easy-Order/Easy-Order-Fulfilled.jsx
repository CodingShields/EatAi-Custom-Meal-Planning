import React, { useState, useEffect } from "react"
import { useEasyOrderStore } from "../../../state-store/easyOrderStore";
import cooking from "../../../assets/images/cooking.svg"
import {nanoid} from "nanoid"

const EasyOrderFulfilled = () => {

    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(true)
    const state = useEasyOrderStore(state => state)

    const culture = useEasyOrderStore((state) => state.Culture);
    const event = useEasyOrderStore((state) => state.Event);
    const headcount  = useEasyOrderStore((state) => state.HeadCount);
    const courses = useEasyOrderStore((state) => state.Courses);
    const dietary = useEasyOrderStore((state) => state.Dietary);
    const flavor = useEasyOrderStore((state) => state.HowToFlavor);
    const mealBalance = useEasyOrderStore((state) => state.Balance);
    const cookTime = useEasyOrderStore((state) => state.CookTime);
    const howToCook = useEasyOrderStore((state) => state.HowToCook);
    const dessert = useEasyOrderStore((state) => state.Dessert);
    const seasonal = useEasyOrderStore((state) => state.Seasonal);
    const beverage = useEasyOrderStore((state) => state.Beverage);
    const measure = useEasyOrderStore((state) => state.Measure);

    const apiKey = "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"
    
    useEffect(() => {
    const fetchData = async () => {
        const test = ` I want you to think like a 5 star chef cooking for ${event} event with the ${culture} thoughts to the menu. There will be ${headcount} guests with these courses to think about ${courses}. 
                        There are Dietary preferences of ${dietary}. The menu you should reflect the dietary preference in the ${courses}.
                        The main course if listed should have a ${flavor} twist and the meal should be have a layout of ${mealBalance}.
                        Each menu item would like a desired cook time of ${cookTime}.
                        The preferred way to cook would be ${howToCook}.
                        The dessert should have a flavor of ${dessert}
                        All courses should have ${seasonal} seasonal twist.
                        There should be ${beverage}.
                        There should be directions on how to cook as desired with instructions of measurement in ${measure} format.
                        The cooking instructions should be in a step by step format for each dish on preparation and cooking for temperature, time and measurement of each ingredient.
                        There should be a grocery list should reflect the exact quantity of food needed to buy to match ${headcount} guests.
                        Your response should be a "Title" for the menu, with a very short summary of the menu.
                        `;
        const data = {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: test }],
            temperature: 0.7,
        };
        
        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            
            if (response.ok) {
                setLoading(false);
                setResponse(result.choices[0].message.content);
            } else {
                console.error(result);
            }
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, []);

    console.log(response)


    return (
        <>
            <h1> test </h1>
            {loading? <img src={cooking} className="cooking-image" /> : ""}
            <button> Save To Pantry</button>
            <h1 style={{
                fontSize: "20px",
            }}>{response}</h1>
        </>       
    )
}

export default EasyOrderFulfilled