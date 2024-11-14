import React, { useState, useEffect } from "react";

export const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <div>Current Time</div>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};
