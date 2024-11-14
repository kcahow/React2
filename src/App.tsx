import { useState } from "react";
import "./App.css";

import Budget from "./Budget";
import { Clock } from "./Clock";

function App() {
  const [currMonthIndex, setCurrMonthIndex] = useState(new Date().getMonth());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <Clock />
      <div className="app-header">Budget Planner</div>
      <div className="months">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => setCurrMonthIndex(index)}
            style={{
              backgroundColor: currMonthIndex === index ? "black" : "initial",
              color: currMonthIndex === index ? "white" : "initial",
            }}
          >
            {month}
          </button>
        ))}
      </div>
      <Budget monthIndex={currMonthIndex} />
    </>
  );
}

export default App;
