import React, { useState, useEffect } from 'react';

const LiveTypingEasyOrder = () => {
  const [displayedText, setDisplayedText] = useState('');
  const defaultMessage = 'Welcome to Easy Ordering!\n I am ChefAi!\n To Place and Order,\n just click the "Start" button \n and follow the menu guide.';

  useEffect(() => {
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= defaultMessage.length) {
        setDisplayedText(defaultMessage.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 35); // Adjust the delay for typing speed

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
      className="easy-order-live-text-container"
      style={{
        display: "flex",
        fontSize: '24px',
        fontWeight: 'bold',
        width: "auto",
        height: "425px",
        paddingTop: '10px',
        position: 'relative',
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        flexDirection: "column",
        marginBottom: "0px",
        paddingBottom: "0px"
      }}
    >
      {renderTextWithNewlines(displayedText)}
    </div>
  );
};

export default LiveTypingEasyOrder;
