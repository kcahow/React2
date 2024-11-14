import type { BudgetItemType, BudgetLineType } from "./api";
import { BudgetItemAdd } from "./BudgetItemAdd";

export type BudgetItemProps = {
  label: BudgetItemType;
  lines: BudgetLineType[];
  onNewLine: (label: BudgetItemType, newLine: BudgetLineType) => void;
};

const BudgetItem = ({ label, lines, onNewLine }: BudgetItemProps) => {
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
      <BudgetItemAdd label={label} onNewLine={onNewLine} lines={[]} />
    </div>
  );
};

export { BudgetItem };
