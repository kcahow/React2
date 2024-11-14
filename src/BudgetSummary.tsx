import { useMemo } from "react";
import { BudgetItemDataType } from "./api";

type Props = {
  data: BudgetItemDataType;
};

const BudgetSummary = ({ data }: Props) => {
  const totalSum = Object.values(data).reduce((acc, curr) => {
    return acc + curr.reduce((a, b) => a + b.amount, 0);
  }, 0);
  return (
    <div className="budget-summary">
      <div className="header">
        <span>SUMMARY</span>
        <span>AMOUNT</span>
      </div>
      {Object.entries(data).map(([label, lines]) => {
        const sum = lines.reduce((acc, curr) => {
          return acc + curr.amount;
        }, 0);
        return (
          <div key={label} className="line">
            <span>{label.toUpperCase()}</span>
            <span>{Math.abs(sum)}</span>
          </div>
        );
      })}
      <div className="footer line">
        <span>{useMemo(() => totalSum, [totalSum])}</span>
      </div>
    </div>
  );
};

export { BudgetSummary };
