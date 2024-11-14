import React, { useState } from "react";
import { BudgetItemProps } from "./BudgetItem";

interface BudgetItem {
  name: string;
  amount: number;
}

export const BudgetItemAdd = ({ label, onNewLine }: BudgetItemProps) => {
  const [addingLine, setAddingLine] = useState(false);

  const [budgetItem, setBudgetItem] = useState<BudgetItem>({
    name: "",
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBudgetItem({
      ...budgetItem,
      [name]: name === "amount" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Budget Item Added:", budgetItem);

    const sign = ["expenses", "debt"].includes(label) ? -1 : 1;

    onNewLine(label, {
      desc: budgetItem.name,
      amount: sign * budgetItem.amount,
    });

    setBudgetItem({ name: "", amount: 0 });
    setAddingLine(false);
  };

  return (
    <>
      {addingLine ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={budgetItem.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={budgetItem.amount}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Add Item</button>
        </form>
      ) : (
        <div className="footer line">
          <button onClick={() => setAddingLine(true)}>+</button>
        </div>
      )}
    </>
  );
};
