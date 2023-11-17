import React from "react";

 const renderTextWithNewlines = (text) => {
	return text.split("\n").map((line, index) => (
		<React.Fragment key={index}>
			<span>{line}</span>
			<br />
		</React.Fragment>
	));
};

export default renderTextWithNewlines;