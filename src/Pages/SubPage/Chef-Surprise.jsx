import { useState, useEffect } from "react";
import { useChefSurpriseStoreActions } from "../../stateStore/ChefSurpriseStore";
import { useChefSurpriseStore } from "../../stateStore/ChefSurpriseStore";
import ChefSurpriseEntree from "./Chef-Surprise-Comps/chefSurpriseEntree";
import ChefSurpriseHeadCount from "./Chef-Surprise-Comps/chefSurpriseHeadCount";
import ChefSurpriseFlavor from "./Chef-Surprise-Comps/chefSurpriseFlavor";
import ChefSurpriseDietary from "./Chef-Surprise-Comps/chefSurpriseDietary";
import preparingOrderAnimatedFade from "../../assets/images/preparingOrderAnimatedFade.svg";
// import flippedChef from "../../assets/images/flippedChef.png";
import windowCloseBtn from "../../assets/images/windowCloseBtn.svg";
import jsPDF from "jspdf";

const ChefSurprise = () => {
	const entree = useChefSurpriseStore((state) => state.entree);
	const headCount = useChefSurpriseStore((state) => state.headCount);
	const flavor = useChefSurpriseStore((state) => state.selectedFlavor);
	const dietary = useChefSurpriseStore((state) => state.dietary);
	const { resetForm } = useChefSurpriseStoreActions();
	const [chatBotReply, setChatBotReply] = useState("");
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		cookingOrderImage: false,
		renderMenuSelection: true,
		renderBotResponseOrder: false,
	});
	const apiKey = import.meta.env.VITE_API_KEY;

	// useEffect(() => {
	// 	setState({ loading: true, renderMenuSelection: true, renderBotResponseOrder: false, cookingOrderImage: false });
	// }, []);

	const handleOrder = async () => {
		if (entree === "" || headCount === 0 || flavor === "" || dietary === "") {
			setState({ error: true, errorMessage: "Please fill out all fields." });
			return;
		} else {
			setState({ loading: true, renderMenuSelection: false, cookingOrderImage: true });
			const test = `I'd like to order an ${entree} with a title for ${
				headCount !== 1 ? "people" : "person"
			}, that has a ${flavor} and it should have a dietary restriction of ${dietary}. Can you also give me a specific grocery list, cook time, and a detailed summary of how to prepare the meal. Have the response start by saying the title of the dish generated, and not like it is a conversation.`;
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
				console.log(result, "result");
				if (response.ok) {
					setChatBotReply(result.choices[0].message.content);
					setState({ loading: false, renderBotResponseOrder: true, cookingOrder: false });
				} else {
					console.error(result);
				}
			} catch (error) {
				console.error(error);
			}
		}
	};

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

	const resetData = () => {
		setState({ loading: false, renderMenuSelection: true, renderBotResponseOrder: false, cookingOrderImage: false });
		setChatBotReply("");
		resetForm();
	};

	const handleModal = () => {
		setState({ error: false, errorMessage: "", renderMenuSelection: true });
	};

	return (
		<div className='chef-surprise-container-main'>
			<div className='chef-surprise-container'>
				{/* <img className='chef-surprise-chef-img' src={flippedChef} /> */}
				<div
					style={{
						display: state.error ? "flex" : "none",
					}}
					className='error-container'
				>
					<div className='error-content'>
						<p className='error-message'>Cannot place order:{state.errorMessage}</p>
						<img src={windowCloseBtn} className='error-btn' onClick={handleModal} />
					</div>
				</div>

				<div className='chef-surprise-menu-container'>
					{state.cookingOrderImage ? <img className='cooking-img' src={preparingOrderAnimatedFade} /> : ""}
					{state.renderBotResponseOrder ? (
						<div className='bot-response-container-main'>
							{/* <div className='bot-response-btn-container'> */}

							{/* </div> */}
							<div className='bot-response-container'>
								<h2 className='bot-response-text'>{chatBotReply}</h2>
								<img
									src={windowCloseBtn}
									className='close-btn'
									onClick={() => setState({ renderBotResponseOrder: false, renderMenuSelection: true })}
								/>
							</div>
						</div>
					) : (
						""
					)}
					<div className='chef-surprise-menu-title-text-container'>
						{state.renderMenuSelection ? <h3 className='chef-surprise-menu-title-text'>Menu</h3> : ""}
					</div>
					{state.renderMenuSelection ? (
						<>
							<ChefSurpriseEntree />
							<ChefSurpriseHeadCount />
							<ChefSurpriseFlavor />
							<ChefSurpriseDietary />
						</>
					) : null}
					<div
						style={{
							display: state.cookingOrderImage ? "none" : "flex",
						}}
						className='chef-surprise-btn-container'
					>
						<button className='order-btn' onClick={handleOrder}>
							Order
						</button>
						<button disabled={!chatBotReply} className='download-btn' onClick={downloadData}>
							Download
						</button>
						<button className='reset-btn' onClick={resetData}>
							Reset Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChefSurprise;
