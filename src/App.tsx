import { useState } from 'react';
import './App.css';

import Budget from './Budget';

function App() {
  const [currMonthIndex, setCurrMonthIndex] = useState(
    new Date().getMonth(),
  );

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <>
      <div className="app-header">Budget Planner</div>
      <div className="months">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => setCurrMonthIndex(index)}
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
