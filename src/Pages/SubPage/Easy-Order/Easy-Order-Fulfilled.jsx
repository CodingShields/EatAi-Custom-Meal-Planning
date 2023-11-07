import React, { useState, useEffect } from "react"
import { useEasyOrderStore } from "../../../state-store/easyOrderStore";
import cooking from "../../../assets/images/cooking.svg"
import { nanoid } from "nanoid"
import { db, auth } from "../../../Firebase/fireBaseConfig"
import { doc, getDoc, query, collection, onSnapshot } from "firebase/firestore";
import { UserAuth } from "../../../Context/AuthContext"
// import OpenAI from "openai";


const EasyOrderFulfilled = () => {

    const [botResponse, setBotResponse] = useState({
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
    const measure = useEasyOrderStore((state) => state.Measure);
    const user = UserAuth();

    
    
    
    useEffect(() => {
        const apiKey = "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"
        const personaPrompt = "I want you to think like a 5 star chef" 
        const titlePrompt = `I want you to create a menu based of the user input ${flavor} flavor. It should have a Title and a Summary.`
        const eventPrompt = `This menu is for a ${event}.`
        const culturePrompt = `There is culture preference of ${culture}.` 
        const coursesPrompt = `The menu should include a ${courses}.` 
        const mealBalancePrompt = `The menu should have ${mealBalance}.`
        const dietaryPrompt = `The menu should have a dietary preference of ${dietary}.`
        const groceryPrompt = `Grocery: should be a detailed grocery list on quantities  and amounts of foods and ingredients needed  to cook for ${headcount} people.`
        const instructionsPrompt = `Instructions: should include detailed step by step instructions on how to cook, how long to cook, what temps to cook, how to prepare all food prior to cooking, and how to serve. All instructions should be in ${measure} measurement.`    
        const promptsToInclude = [];

        if (culturePrompt !== "none") {
        } else {
            promptsToInclude.push(culturePrompt);
        }
        
        if (coursesPrompt) {
            promptsToInclude.push(coursesPrompt);
        }
        
        if (eventPrompt !== "none") {
        } else {
            promptsToInclude.push(eventPrompt);
        }

        if (mealBalancePrompt !== "none") {
        } else {
            promptsToInclude.push(mealBalancePrompt);
        }

        if (dietaryPrompt !== "none") {
        } else {
            promptsToInclude.push(dietaryPrompt);
        }


        const fetchData = async () => {
            
        const data = {
            model: "gpt-3.5-turbo",
            messages: [
                
                { role: "user", content: personaPrompt },
                { role: "user", content: titlePrompt},
                { role: "user", content: promptsToInclude.join(" ") },
                { role: "user", content: instructionsPrompt },
                { role: "user", content: groceryPrompt },
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
            console.log("result", result);
             if (response.ok) {
                const messageContent = result.choices[0].message.content;

                // Use regular expressions to extract information
                const titleMatch = messageContent.match(/Title:/s);
                const summaryMatch = messageContent.match(/Summary:/s);
                const menuMatch = messageContent.match(/Menu:/s);
                const groceryListMatch = messageContent.match(/Grocery:/s);
                const instructionsMatch = messageContent.match(/Instructions:/s);

                // Extract the matched content and trim whitespace
                const titleResponse = titleMatch[1].trim() 
                const summaryResponse = summaryMatch[1].trim() 
                const menuResponse = menuMatch[1].trim() 
                const groceryListResponse = groceryListMatch[1].trim() 
                const instructionsResponse = instructionsMatch[1].trim() 

                setBotResponse({...botResponse,
                    title: titleResponse,
                    summary: summaryResponse,
                    menu: menuResponse,
                    groceryList: groceryListResponse,
                    instructions: instructionsResponse,
                });
                console.log(botResponse);
                console.log(messageContent);
                // setLoading(false);
            } else {
                console.error(result);
            }
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, []);
   console.log(botResponse);
    
    
            
          
//     const handleSave = async () => {
//         const userDocRef = doc(db, "users", user.user.uid);
//         const unsubscribe = onSnapshot(userDocRef, (doc) => {
//             console.log("Current data: ", doc.data());
//         });

//         console.log(userDocRef);
//             console.log(user.user.uid);
// }

    return (
        <>
            <h1> test </h1>
            {/* {loading? <img src={cooking} className="cooking-image" /> : ""} */}
            {/* <button onClick={handleSave}> Save To Pantry</button> */}

        </>       
    )
}

export default EasyOrderFulfilled