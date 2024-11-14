import { useEffect, useReducer } from 'react';

import {
  BudgetItemType,
  BudgetLineType,
  getBudget,
} from './api';

import { BudgetItem } from './BudgetItem';
import { BudgetSummary } from './BudgetSummary';

import { mainReducer } from './mainReducer';

function Budget({ monthIndex }) {
  const [state, dispatch] = useReducer(mainReducer, {});

  useEffect(() => {
    (async function main() {
      const data = await getBudget(monthIndex);
      dispatch({ type: 'setState', payload: data });
    })();
  }, [monthIndex]);

  const addNewLine = (
    label: BudgetItemType,
    newLine: BudgetLineType,
  ) => {
    dispatch({ type: 'addBudgetLine', label, payload: newLine });
  };

  return (
    <div className="budget">
      {Object.keys(state).map((label) => (
        <BudgetItem
          key={label}
          label={label}
          lines={state[label] ?? []}
          onNewLine={addNewLine}
        />
      ))}
      <BudgetSummary data={state} />
    </div>
  );
}

export default Budget;
