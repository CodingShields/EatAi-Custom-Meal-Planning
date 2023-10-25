import React, { useState, useEffect } from 'react';

const LiveDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the current date every 1 second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Format the current date as you like
  const formattedDate = currentDate.toLocaleString();

  return (
    <div className='live-date-container'>
      <p className='live-date-text'>{formattedDate}</p>
    </div>
  );
}

export default LiveDate;
