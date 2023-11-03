import React, { useState, useEffect } from "react"
import { useEasyOrderStore } from "../../../state-store/easyOrderStore";
// import cooking from "../../../assets/images/cooking.svg"
import { nanoid } from "nanoid"
import { db, auth } from "../../../Firebase/fireBaseConfig"
import { doc, getDoc, query, collection, onSnapshot } from "firebase/firestore";
import {UserAuth} from "../../../Context/AuthContext"
const EasyOrderFulfilled = () => {

    const [response, setResponse] = useState({
        title: "",
        summary: "",
        menu: "",
        groceryList: "",
        instructions: "",
    })
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
    const user = UserAuth();
    const apiKey = "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"
    
    useEffect(() => {
        const fetchData = async () => {
        const persona = "I want you to think like a 5 Star Chef and create a menu for me."
        const title = `I need you to title the menu based on the flavor ${flavor} and dietary preferences ${dietary}.`
        const menu = `Create the menu based on the ${courses} courses.`
        const summary = `Create a summary of the menu in less than 20 words`
        const groceryList = `Create a grocery list for the menu based on ${headcount} people.`
        const instructions = `Create instructions on food preparation and cooking for the menu based on ${cookTime} minutes, ${mealBalance} and ${measure} measurements`

        const data = {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: persona },
                { role: "user", content: title },
                { role: "user", content: menu },
                { role: "user", content: summary },
                { role: "user", content: groceryList },
                { role: "user", content: instructions },
            ],
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
                
                // setLoading(false);
                setResponse(result.choices[0].message.content);
                console.log(data);
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

    const handleSave = async () => {
        const userDocRef = doc(db, "users", user.user.uid);
        const unsubscribe = onSnapshot(userDocRef, (doc) => {
            console.log("Current data: ", doc.data());
        });

        console.log(userDocRef);
            console.log(user.user.uid);
}

    return (
        <>
            <h1> test </h1>
            {/* {loading? <img src={cooking} className="cooking-image" /> : ""} */}
            <button onClick={handleSave}> Save To Pantry</button>
            <h1 style={{
                fontSize: "20px",
            }}>{response}</h1>
        </>       
    )
}

export default EasyOrderFulfilled