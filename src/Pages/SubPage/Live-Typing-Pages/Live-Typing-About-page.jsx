import React, { useState, useEffect } from 'react';

const LiveTypingAboutPage = ({ fontSize }) => {
  const [displayedText, setDisplayedText] = useState('');
  const defaultMessage = 'Here at the ChefAi Kitchen we have many options for you.\n We offer a "Chef Surprise" where you can quickly get a Menu and Grocery list on quick notice.\n We have "Easy Ordering" which will ask more detailed questions to get you a more personalized menu and grocery list.\n We also have "Advanced Order" where we can balance a menu down the exact gram of nutrient you need!'

  useEffect(() => {
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= defaultMessage.length) {
        setDisplayedText(defaultMessage.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Adjust the delay for typing speed

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  const renderTextWithNewlines = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        <span>{line}</span>
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div
      className="live-text-container"
      style={{
        display: "flex",
        fontSize: fontSize || '24px',
        fontWeight: 'bold',
        width: "500px",
        paddingTop: '50px',
        justifyContent: "start",
        alignContent: "center",
        textAlign: "center",
        flexDirection:"column",
      }}
    >
      {renderTextWithNewlines(displayedText)}
    </div>
  );
};

export default LiveTypingAboutPage;
