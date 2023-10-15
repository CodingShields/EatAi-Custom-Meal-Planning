import React, { useState, useEffect } from 'react';

const LiveTypingHomePage = ({ fontSize }) => {
  const [displayedText, setDisplayedText] = useState('');
  const defaultMessage = "Welcome, I am your Chef!\n I am the World's 1st and Best Menu Chef!\n Come explore cook with me to learn NEW and TASTY foods locally and from all over the World!"

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
        fontSize: fontSize || '36px',
        fontWeight: 'bold',
        width: "500px",
        height: "450px",
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

export default LiveTypingHomePage;
