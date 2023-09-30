import React, { useState, useEffect } from 'react';

const LiveTypingText = ({ messages, fontSize }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const currentMessage = messages[messageIndex];

  useEffect(() => {
    if (!currentMessage) {
      // No message to display, return early
      return;
    }

    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentMessage.length) {
        setDisplayedText(currentMessage.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          // Clear the text and switch to the next message after a 2-second delay
          setDisplayedText('');
          setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 5000); // Delay between messages (2 seconds)
      }
    }, 50); // Adjust the delay for typing speed

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentMessage, messages]);

  return (
    <div
      className="live-text-container"
      style={{
        display:"flex",
        fontSize: fontSize || '24px',
        fontWeight: 'bold',
        width: '200px',
        height: '150px',
        paddingTop: '20px',
        display: 'inline-block',
        // verticalAlign: 'middle',
        position: 'relative',
        justifyContent: "center",
        alignContent:"center",
        left: "160px",
          top: '30px',
        textAlign:"center",
      }}
    >
      {displayedText}
    </div>
  );
};

export default LiveTypingText;
