import { SyntheticEvent, useState } from 'react';
import type { BudgetItemType, BudgetLineType } from './api';

type BudgetItemProps = {
  label: BudgetItemType;
  lines: BudgetLineType[];
  onNewLine: (
    label: BudgetItemType,
    newLine: BudgetLineType,
  ) => void;
};

type FormType = {
  desc: { value: string };
  amount: { value: string };
};

const BudgetItem = ({
  label,
  lines,
  onNewLine,
}: BudgetItemProps) => {
  const [addingLine, setAddingLine] = useState(false);

  const addLine = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement =
      event.currentTarget as typeof event.currentTarget &
        FormType;

    // TODO: what if there are other item labels
    const sign = ['expenses', 'debt'].includes(label) ? -1 : 1;

    onNewLine(label, {
      desc: formElement.desc.value,
      amount: sign * Number(formElement.amount.value),
    });

    setAddingLine(false);
  };

  return (
    <div className="budget-item">
      <div className="header">
        <span>{label.toUpperCase()}</span>
        <span>AMOUNT</span>
      </div>
      {lines.map((line) => (
        <div key={line.id} className="line">
          <span>{line.desc}</span>
          <span>{Math.abs(line.amount)}</span>
        </div>
      ))}
      {addingLine ? (
        <div className="footer line">
          <form onSubmit={addLine}>
            <input type="text" name="desc" />
            <input type="number" name="amount" />
            <button>Add</button>
          </form>
        </div>
      ) : (
        <div className="footer line">
          <button onClick={() => setAddingLine(true)}>+</button>
        </div>
      )}
    </div>
  );
};

export { BudgetItem };
