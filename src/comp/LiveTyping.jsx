import React, { useState, useEffect } from "react";

const LiveTypingAboutPage = ({ message, speed }) => {
	const [displayedText, setDisplayedText] = useState(message);
	console.log(message);

	useEffect(() => {
		let charIndex = 0;
		const typingInterval = setInterval(() => {
			if (charIndex <= displayedText.length) {
				setDisplayedText(displayedText.substring(0, charIndex));
				charIndex++;
			} else {
				clearInterval(typingInterval);
			}
		}, 50); // Adjust the delay for typing speed

		return () => {
			clearInterval(typingInterval);
		};
	}, [message, speed]);

	const renderTextWithNewlines = (text) => {
		return text.split("\n").map((line, index) => (
			<React.Fragment key={index}>
				<span>{line}</span>
				<br />
			</React.Fragment>
		));
	};

	return <>{renderTextWithNewlines(displayedText)}</>;
};

export default LiveTypingAboutPage;
