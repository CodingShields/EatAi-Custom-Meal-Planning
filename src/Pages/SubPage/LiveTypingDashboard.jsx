import React, { useState, useEffect } from 'react';

const LiveTypingText = ({ fontSize }) => {
  const [displayedText, setDisplayedText] = useState('');
  const defaultMessage = "Welcome, I am Chef Mike!\nClick Chef Surprise to set Guest Size, Flavor and kind of Meal.\nOrdering made easy coming soon! \nAdvanced ordering with macro nutrients, calories coming soon!";

  useEffect(() => {
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= defaultMessage.length) {
        setDisplayedText(defaultMessage.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust the delay for typing speed

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
        width: "300px",
        height: "400px",
        paddingTop: '50px',
        position: 'relative',
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

export default LiveTypingText;
