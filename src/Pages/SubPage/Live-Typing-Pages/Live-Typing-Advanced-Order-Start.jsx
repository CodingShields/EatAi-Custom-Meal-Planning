import React, { useState, useEffect } from 'react';

const LiveTypingAdvancedOrderStart = () => {
  const [displayedText, setDisplayedText] = useState('');
  const defaultMessage = 'Welcome!\n How would you like to get started today?' ;

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
        fontSize: "28px",
        fontWeight: 'bold',
        width: "500px",
        height: "225px",
        paddingTop: '50px',
        position: 'relative',
        justifyContent: "flexStart",
        alignContent: "center",
        textAlign: "center",
        flexDirection:"column",
      }}
    >
      {renderTextWithNewlines(displayedText)}

    </div>
  );
};

export default LiveTypingAdvancedOrderStart;
