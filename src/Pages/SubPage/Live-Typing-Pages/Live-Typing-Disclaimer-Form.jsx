
import React from 'react';
import disclaimerForm from '../../../assets/Docs/disclaimerForm';

const LiveTypingDisclaimerForm = () => {
  const defaultMessage = disclaimerForm[0];

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
        backgroundColor: 'lightgrey',
        fontSize: '16px',
        fontWeight: 'bold',
        width: "600px",
        height: "400px",
        paddingLeft: "10px",
        paddingRight: "10px",
        position: 'relative',
        justifyContent: "start",
        alignContent: "center",
        textAlign: "center",
        flexDirection: "column",
        overflow: "auto",
        marginTop: "40px",
        border: "1px solid black",
        borderRadius: "5px",
        
      }}
    >
      {renderTextWithNewlines(defaultMessage)}
    </div>
  );
};

export default LiveTypingDisclaimerForm;
