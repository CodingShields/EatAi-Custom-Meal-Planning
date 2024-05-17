import React, { useState, useEffect } from "react";
import { useEasyOrderStore } from "../../../stateStore/easyOrderStore";
import { useEasyOrderStoreActions } from "../../../stateStore/easyOrderStore";
import forgetToSaveAnimatedBounce from "../../.././assets/images/forgetToSaveAnimatedBounce.svg";
import preparingOrderAnimatedFade from "../../.././assets/images/preparingOrderAnimatedFade.svg";
import savedAnimatedFade from "../../.././assets/images/savedAnimatedFade.svg";
import windowCloseBtn from "../../../assets/images/windowCloseBtn.svg";
import { db } from "../../../Firebase/fireBaseConfig";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { UserAuth } from "../../../Context/AuthContext";
import { nanoid } from "nanoid";


const EasyOrderFulfilled = () => {
	const apiKey = import.meta.env.VITE_API_KEY;
	const [botResponse, setBotResponse] = useState("");
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		cookingOrder: false,
		orderResponse: false,
		saveBtnVisible: false,
		successOrderSave: false,
		viewOrderModal: false,
	});

	const userStateData = useEasyOrderStore((state) => state);
	const flavor = userStateData.Flavor;
	const culture = userStateData.Culture;
	const event = userStateData.Event;
	const headCount = userStateData.HeadCount;
	const courses = userStateData.Courses;
	const mealBalance = userStateData.Balance;
	const dietary = userStateData.Dietary;
	const measure = userStateData.Measure;

	const user = UserAuth();

	const { resetForm } = useEasyOrderStoreActions((actions) => actions);

	const newPrompt = `Design a gourmet menu for a special event titled '[Menu Title]' with the following details:

							Flavor preference: ${flavor}
							Type of event: ${event}
							Cultural preferences to consider: ${culture}
							Number of guests: ${headCount}
							Courses to include: ${courses}
							Desired balance of protein, carbs, and fats: ${mealBalance}
							Dietary preferences: ${dietary}
							Create a menu title and provide a brief summary of the meal. List the groceries needed based on the headcount, and explain how to prepare each course, including prep time, prep steps that include measurements for all ingredients in ${measure}, also cooking temps, cooking times, and serving suggestions.

							Menu Title: [Title]
							Summary: [Brief summary of the meal]
							Grocery List for [Number of Guests] people]:

							[Grocery item 1 (quantity)]
							[Grocery item 2 (quantity)]
							...repeat for each grocery item
							[Detailed grocery list and quantities for each item]
							Course 1: [Course 1 title]

							Prep Time: [Prep time]
							Prep Steps: [List of prep steps]
							Cooking Temperature: [Cooking temp]
							Cooking Time: [Cooking time]
							Serving Suggestions: [Serving suggestions]
							Course 2: [Course 2 title]

							Prep Time: [Prep time]
							Prep Steps: [List of prep steps]
							Cooking Temperature: [Cooking temp]
							Cooking Time: [Cooking time]
							Serving Suggestions: [Serving suggestions]
							[Repeat for each course]`;

	useEffect(() => {
		setState({
			cookingOrder: true,
			error: false,
			errorMessage: "",
			orderResponse: false,
			saveBtnVisible: false,
			successOrderSave: false,
			viewOrderModal: false,
		});
		const fetchData = async () => {
			const data = {
				model: "gpt-3.5-turbo",
				messages: [{ role: "system", content: newPrompt }],
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
				console.log(result);
				if (response.ok) {
					const linesArray = result.choices[0].message.content
					console.log(linesArray);
					const titleSplit = linesArray.split("\n\n")
					const title = titleSplit[0]
					const summary = titleSplit[1]
					const menu = titleSplit[2]
					const groceryList = titleSplit[3]
					const appetizer = titleSplit[4]
					const salad = titleSplit[5]
					const soup = titleSplit[6]
					const mainCourse = titleSplit[7]
					const sideDishes = titleSplit[8]
					const dessert = titleSplit[9]
					const beverages = titleSplit[10]
		
					setBotResponse({
						id: nanoid(),
						date: new Date().toLocaleString(),
						title: title,
						summary: summary,
						menu: menu,
						groceryList: groceryList,
						appetizer: appetizer,
						salad: salad,
						soup: soup,
						mainCourse: mainCourse,
						sideDishes: sideDishes,
						dessert: dessert,
						beverages: beverages,
					});
					setState({ cookingOrder: false, saveBtnVisible: true, orderResponse: true });
				} else {
					console.error(result);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);;
	const handleSave = async () => {
		try {
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
			};
			await updateDoc(userDocRef, {
				"pantry.easyOrder": arrayUnion(easyOrderItem),
			});
			resetForm();
			setState({ saveBtn: false, renderSaved: true, successOrderSave: true });
			console.log("Document successfully updated!");
		} catch (error) {
			console.error("Error updating document:", error);
		}
	};

	return (
		<>
			<h1 className='easy-order-bot-title'></h1>
			<img src={state.orderResponse ? forgetToSaveAnimatedBounce : ""} />
			{state.successOrderSave ? <img src={savedAnimatedFade} /> : ""}
			{state.cookingOrder ? <img src={preparingOrderAnimatedFade} className='cooking-image' /> : ""}
			<div className='easy-order-btn-container'>
				{state.saveBtnVisible ? (
					<button className='easy-order-btn' onClick={handleSave}>
						Save To Pantry
					</button>
				) : null}
				{state.orderResponse ? (
					<button onClick={() => setState({ ...state, viewOrderModal: true })}> View Menu Order</button>
				) : (
					""
				)}
			</div>
			{state.viewOrderModal ? (
				<div className='error-container'>
					<div className='error-content'>
						<img
							src={windowCloseBtn}
							onClick={() => setState({ ...state, viewOrderModal: false })}
							className='error-btn'
						/>
						<div className='easy-order-bot-response-container'>
							<p className='easy-order-bot-response-data'>{botResponse.title}</p>
							<p className='easy-order-bot-response-data'>{botResponse.summary}</p>
							<p className='easy-order-bot-response-data'>{botResponse.menu}</p>
							<p className='easy-order-bot-response-data'>{botResponse.groceryList}</p>
							<p className='easy-order-bot-response-data'>{botResponse.data}</p>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default EasyOrderFulfilled;
