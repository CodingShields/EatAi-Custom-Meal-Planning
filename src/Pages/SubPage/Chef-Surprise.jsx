import React, { useState } from "react";
import flippedChef from "../../assets/images/flippedChef.png";
import ChefSurpriseEntree from "./Chef-Surprise-Comps/chefSurpriseEntree";
import ChefSurpriseHeadCount from "./Chef-Surprise-Comps/chefSurpriseHeadCount";
import ChefSurpriseFlavor from "./Chef-Surprise-Comps/chefSurpriseFlavor";
import ChefSurpriseDietary from "./Chef-Surprise-Comps/chefSurpriseDietary";
import { useChefSurpriseStoreActions } from "../../stateStore/ChefSurpriseStore";
import { useChefSurpriseStore } from "../../stateStore/ChefSurpriseStore";
import jsPDF from "jspdf";
import "../../css/chefSurprise.css";

export default function ChefSurprise() {
	const { entree, headCount, selectedFlavor, dietaryDetails } = useChefSurpriseStore();

	const { resetForm } = useChefSurpriseStoreActions();

	const clearLocalStorage = () => {
		localStorage.clear();
	};

	const [mainState, setMainState] = useState({
		loading: false,
		renderMenu: false,
		removeMenu: false,
	});

	const [chatBotReply, setChatBotReply] = useState("");

	async function handleOrder() {
		setMainState({ loading: true, renderMenu: true, removeMenu: true });
		const test = `I'd like to order an ${entree} for ${
			headCount !== 1 ? "people" : "person"
		}, that has a ${selectedFlavor} and it should have a dietary restriction of ${dietaryDetails}. Can you also give me a specific grocery list, cook time, and a detailed summary of how to prepare the meal. Have the reponse start by saying the title of the dish generated, and not like it is a conversation.`;
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
				// console.log("Response object:", result)
				setMainState({ loading: false, renderMenu: true });
				setChatBotReply(result.choices[0].message.content);
				// console.log(result.choices[0].message.content);
			} else {
				console.error(result);
			}
		} catch (error) {
			console.error(error);
		}
	}
	console.log(chatBotReply);

	function downloadData() {
		if (chatBotReply && typeof chatBotReply === "string") {
			const doc = new jsPDF({
				orientation: "portrait",
				unit: "mm",
				format: "a4",
				marginLeft: 10,
				marginRight: 10,
				marginTop: 10,
				marginBottom: 10,
			});
			const fontSize = 12;
			const textWidth = 180;
			const lines = doc.splitTextToSize(chatBotReply, textWidth);
			const lineHeight = fontSize * 1.5;
			const pageHeight = doc.internal.pageSize.height - 20;
			const maxLinesPerPage = Math.floor(pageHeight / lineHeight);
			const numPages = Math.ceil(lines.length / maxLinesPerPage);
			doc.setFontSize(fontSize);

			for (let pageNum = 0; pageNum < numPages; pageNum++) {
				if (pageNum > 0) {
					doc.addPage();
				}
				const startIndex = pageNum * maxLinesPerPage;
				const endIndex = (pageNum + 1) * maxLinesPerPage;
				const pageLines = lines.slice(startIndex, endIndex);

				let initialY = 20;

				if (pageNum === 0) {
					const remainingLines = maxLinesPerPage - pageLines.length;
					initialY += (remainingLines * lineHeight) / 2;
				}
				doc.text(5, initialY, "Recipe and Instructions:", { fontWeight: "bold" });
				initialY += lineHeight;
				pageLines.forEach((line, index) => {
					const y = initialY + index * lineHeight;
					doc.text(5, y, line);
				});
			}
			doc.save("chatReply.pdf");
		} else {
			console.error("Invalid chatBotReply data.");
		}
	}

	function resetData() {
		setMainState({ loading: false, renderMenu: false, removeMenu: false });
		clearLocalStorage();
		resetForm();
	}

	return (
		<div className='chef-surprise-container-main'>
			<img className='chef-surprise-chef-img' src={flippedChef} />
			<div className='chef-surprise-menu-container'>
				<div style={{ display: mainState.renderMenu ? "flex" : "none" }} className='bot-response-container'>
					<h2 className='bot-response-text'>{chatBotReply}</h2>
				</div>
				<div className='chef-surprise-menu-title-text-container'>
					<h3 className='chef-surprise-menu-title-text'>Menu</h3>
				</div>
				{mainState.removeMenu ? (
					<>
						<ChefSurpriseEntree />
						<ChefSurpriseHeadCount />
						<ChefSurpriseFlavor />
						<ChefSurpriseDietary />
					</>
				) : null}
				<div className='order-btn-div'>
					<button className='order-btn' onClick={handleOrder}>
						Order
					</button>
				</div>
				<button
					style={{ display: mainState.renderMenu ? "flex" : "none" }}
					className='download-btn'
					onClick={downloadData}
				>
					Download
				</button>
				<button style={{ display: mainState.renderMenu ? "flex" : "none" }} className='reset-btn' onClick={resetData}>
					Start Over
				</button>
			</div>
		</div>
	);
}
