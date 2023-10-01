import React from "react";

export default function People() {
  const [people, setPeople] = React.useState(1);

  function handleChange(value) {
    setPeople(value);
  }

  return (
    <div className="options-container">
      <label htmlFor="volume">How Many People?:</label>
      <input
        type="range"
        id="volume"
        name="volume"
        min="1"
        max="20"
        step="1"
        value={people}
        onChange={(e) => handleChange(e.target.value)}
      />
      <p className="option-title">
        Number Of People:{" "}
        <span>
          {people} {people != 1 ? "people" : "person"}
        </span>
      </p>
    </div>
  );
}
