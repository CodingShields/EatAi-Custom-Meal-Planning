import React, { useState, useEffect } from "react"
import { useEasyOrderStore } from "../../../state-store/easyOrderStore";
import newCooking from "../../../assets/images/newCooking.svg"
import { db, auth } from "../../../Firebase/fireBaseConfig"
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { UserAuth } from "../../../Context/AuthContext"
import { nanoid } from 'nanoid'

const EasyOrderFulfilled = () => {

    const [botResponse, setBotResponse] = useState({
        id: "",
        title: "",
        summary: "",
        menu: "",
        groceryList: "",
        data:"",
    })
    const [loading, setLoading] = useState({
        cooking: false,
        saveBtn: false,
    })

    const userStateData = useEasyOrderStore((state) => state)
    const promptData = {
        flavor: userStateData.Flavor,
        culture: userStateData.Culture,
        event: userStateData.Event,
        headCount: userStateData.HeadCount,
        courses: userStateData.Courses,
        mealBalance: userStateData.Balance,
        dietary: userStateData.Dietary,
        measure: userStateData.Measure,
    }
    const user = UserAuth();
    
    useEffect(() => {

        setLoading(true)
        const apiKey = "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"
        const personaPrompt = "I want you to think like a 5 star chef and fulfill the following order and user requests." 
        const titlePrompt = `Create a 'Title:" of a menu based of the user input ${promptData.flavor} flavor.`
        const summaryPrompt = `Create a "Summary:" that should be a short description of the menu.`
        const eventPrompt = `This menu is for a ${promptData.event}.`
        const culturePrompt = `When creating the menu, it should reflect and respect ${promptData.culture} culture.` 
        const coursesPrompt = `The menu should include a ${promptData.courses}.}` 
        const mealBalancePrompt = `The menu should have a ${promptData.balance} balance of food.`
        const dietaryPrompt = `The menu should have a dietary preference of ${promptData.dietary}.`
        const headcountPrompt = `Create a "Grocery List:" Needs to be detailed in how much food and ingredients based on the menu to feed ${promptData.headCount} people attending.`
        const instructionsPrompt = `Create "Menu Guide" should list each course with step by step instructions on cook temperatures, time and list all food and ingredient measurements in ${promptData.measure}.`    
        const endingPrompt = `Create a "Ending:" that states the user should check with all guests about food allergies and dietary restrictions.`
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
        if (headcountPrompt) {
            promptsToInclude.push(headcountPrompt);
        }

        const fetchData = async () => {

        const data = {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: personaPrompt },
                { role: "user", content: titlePrompt },
                { role: "user", content: summaryPrompt },
                { role: "user", content: promptsToInclude.join(" ") },
                { role: "user", content: instructionsPrompt },
                { role: "user", content: endingPrompt },
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
                const messageContent = result.choices[0].message.content;
                console.log("messageContent", messageContent);
                // Use regular expressions to extract information
                const titleMatch = messageContent.match(/Title:(.*?)Summary:/s);
                const summaryMatch = messageContent.match(/Summary:(.*?)Grocery List:/s);
                const groceryListMatch = messageContent.match(/Grocery List:(.*?)Menu Guide:/s);
                const menuMatch = messageContent.match(/Menu Guide:(.*?)Ending:/s);

                // Extract the matched content and trim whitespace
                const titleResponse = titleMatch ? titleMatch[1].trim() : "";
                const summaryResponse = summaryMatch ? summaryMatch[1].trim() : "";
                const menuResponse = menuMatch ? menuMatch[1].trim() : "";
                const groceryListResponse = groceryListMatch ? groceryListMatch[1].trim() : "";
                // console.log(result.choices[0].message.content);
                setLoading({cooking: false})
                setBotResponse((prevResponse) => ({
                    ...prevResponse,
                    title: titleResponse,
                    summary: summaryResponse,
                    menu: menuResponse,
                    groceryList: groceryListResponse,
                    score: 0,
                    data: result.choices[0].message.content,
                }));
                console.log(botResponse);
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
    const handleSave = async () => {
    try {
        // Create a reference to the user's document
        const userDocRef = doc(db, "users", user.user.uid);
        
        const newIdValue = nanoid();

        const easyOrderItem = {
            id: newIdValue,
            date: new Date().toLocaleString(),
            title: botResponse.title,
            summary: botResponse.summary,
            menu: botResponse.menu,
            groceryList: botResponse.groceryList,
            score: 0,
            data: botResponse.data,
        }
        
        await updateDoc(userDocRef, {
            "pantry.easyOrder": arrayUnion(easyOrderItem),
        });

        console.log("Document successfully updated!");
    } catch (error) {
        console.error("Error updating document:", error);
    }
};


    return (
        <>
            <h1> test </h1>
            <h1> need to setup state to control the save to pantry button when it is successfully added</h1>
            {loading? <img src={newCooking} className="cooking-image" /> : ""}
            {loading({ saveButton: true })
                ?
                <button
                    className="easy-order-begin-btn"
                    onClick={handleSave}
                >
                    Save To Pantry
                </button>
                :
                null}
            <p>{botResponse.title}</p>
            <p>{botResponse.summary}</p>
            <p>{botResponse.menu}</p>
            <p>{botResponse.groceryList}</p>
        </>       
    )
}

export default EasyOrderFulfilled