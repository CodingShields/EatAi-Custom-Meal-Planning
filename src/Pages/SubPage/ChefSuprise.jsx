import React, { useState } from "react";
import clipboard from "../../assets/images/clipboard.png";
import MealTypeArray from "../../assets/MealTypeArray";
import FlavorTypeArray from "../../assets/FlavorTypeArray";
import dietaryOptions from "../../assets/Dietary";
import flippedchef from "../../assets/images/flippedchef.png";
import kitchen from "../../assets/images/kitchen.png";
import cooking from "../../assets/images/cooking.svg";
import jsPDF from "jspdf"


// still need to limit certain features of this level for FREE
// Limit Flavors
// Limit Searches 
// Limit DownLoads




export default function ChefSurprise() {
	const [entree, setEntree] = useState("");
	const [headCount, setHeadCount] = useState(1);
	const [selectedFlavor, setSelectedFlavor] = useState("");
	const [flavorDetails, setFlavorDetails] = useState("");
	const [dietaryDetails, setDietaryDetails] = useState("");
	const [chatBotReply, setChatBotReply] = useState("");
    // changes display of the clipboard to display the loading/cooking svg while the call is being made
	const [removeMenu, setRemoveMenu] = useState(false)
	const [loading, setLoading] = useState(false);
	const [renderMenu, setRenderMenu] = useState(false);

	const apiKey = "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";

	async function handleOrder() {
		setLoading(true);
		setRemoveMenu(true);
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
				setLoading(false);
				setRenderMenu(true);
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

	function handleEntree(event) {
		const selectedValue = event.target.value;
		setEntree(selectedValue);
	}
	function handleHeadCount(value) {
		setHeadCount(value);
	}
	function handleFlavorChange(event) {
		const selectedValue = event.target.value;
		setSelectedFlavor(selectedValue);
		const flavorDetails = FlavorTypeArray.find((item) => item.name === selectedValue);
		if (flavorDetails) {
			setFlavorDetails(flavorDetails.details);
		} else {
			setFlavorDetails("");
		}
	}
	function handleDietaryDetails(event) {
		const selectedValue = event.target.value;
		setDietaryDetails(selectedValue);
	}
	function downloadData() {
		if (chatBotReply && typeof chatBotReply === 'string') {
			const doc = new jsPDF({
			orientation: 'portrait',
			unit: 'mm',
			format: 'a4',
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
		doc.text(5, initialY, 'Recipe and Instructions:', { fontWeight: 'bold' });
		initialY += lineHeight; 
		pageLines.forEach((line, index) => {
		const y = initialY + index * lineHeight;
        doc.text(5, y, line);
    });
    }
	doc.save('chatReply.pdf');
		} else {
    console.error('Invalid chatBotReply data.');
		}
	}
	
	function resetData() {
		setRemoveMenu(false)
		setLoading(false);
		setRenderMenu(false)
		setEntree("")
		setHeadCount(1)
		setSelectedFlavor("")
		setFlavorDetails("")
		setDietaryDetails("")
	}
	
	return (
		<div className="kitchen-container">
			<img className="chef-background-img" src={kitchen} alt="Chef Background" />
			<div className="chef-img-div">
				<img className="chef-img" src={flippedchef} alt="Chef" />
			</div>
            <div className="clipboard-div">
                
				<div style={{ display: renderMenu ? "flex" : "none" }}
					className="bot-response-container">
                    <h2 className="bot-response-text">
                        {chatBotReply}
                    </h2>
            </div>
				<img className="clipboard-img"
                    style={{ display: renderMenu ? "none" : "flex" }}
					src={clipboard} alt="Clipboard" />
                <div
                    style={{ display: removeMenu ? "none" : "flex" }}
                    className="menu-title-text-container">
					<h3 className="menu-text">Menu</h3>
				</div>
                <img className="cooking-animation"
                    src={cooking}
					style={{display: loading ? "flex" : "none",}}
                />
                <div
                    className="menu-items-container"
                    style={{ display: removeMenu ? "none" : "flex" }}
                >
					<div className="entree-container">
						<h2 className="menu-item-text">Entree:</h2>
						<select onChange={handleEntree} value={entree} className="menu-list-items">
							{MealTypeArray.map((item) => (
								<option value={item.name} key={item.id}>
									{item.name}
								</option>
							))}
						</select>
					</div>
					<div className="headcount-div">
						<h2 className="menu-item-text"> HeadCount: </h2>
						<h2 className="headcount-text">{headCount}</h2>
						<input
							className="headcount-slider"
							type="range"
							id="volume"
							name="volume"
							min="1"
							max="20"
							step="1"
							value={headCount}
							onChange={(e) => handleHeadCount(e.target.value)}
						/>
					</div>
					<div className="flavor-container">
						<h2 className="menu-item-text">Flavor:</h2>
						<select onChange={handleFlavorChange} value={selectedFlavor} className="menu-list-items">
							{FlavorTypeArray.map((item) => (
								<option value={item.name} key={item.id}>
									{item.name}
								</option>
							))}
						</select>
					</div>
					<div className="flavor-details-container">
						<h3 className="flavor-details-text">{flavorDetails}</h3>
					</div>
					<div className="dietary-container">
						<h2 className="menu-item-text">Focus:</h2>
						<select onChange={handleDietaryDetails} value={dietaryDetails} className="menu-list-items">
							{dietaryOptions.map((item) => (
								<option value={item.name} key={item.id}>
									{item.name}
								</option>
							))}
						</select>
					</div>
					<div className="order-btn-div">
						<button className="order-btn" onClick={handleOrder}>
							Order
                        </button>                   
					</div>
                </div>
				<button
					style={{ display: renderMenu ? "flex" : "none" }}
					className="download-btn"
					onClick={downloadData}
				>
							Download
				</button>
				<button
					style={{ display: renderMenu ? "flex" : "none" }}
					className="reset-btn"
					onClick={resetData}
				>
							Start Over
						</button>
			</div>
		</div>
	);
}
