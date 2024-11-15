import React from "react";
import renderer from "react-test-renderer";
import { Clock } from "./Clock"; // Adjust the import path as necessary
import { Budget } from "./Budget"; // Adjust the import path as necessary
import { BudgetSummary } from "./BudgetSummary"; // Adjust the import path as necessary
import { BudgetItemDataType } from "./api";

test("Clock component snapshot", () => {
  const component = renderer.create(<Clock />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Budget component snapshot", () => {
  const component = renderer.create(<Budget monthIndex={11} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("BudgetSummary component snapshot", () => {
  type BudgetLineType = {
    id?: string;
    desc: string;
    amount: number;
  };

  type BudgetItemType = "income" | "expenses" | "debt";

  const mockData: Record<BudgetItemType, BudgetLineType[]> = {
    income: [],
    expenses: [],
    debt: [],
  };
  const component = renderer.create(<BudgetSummary data={mockData} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
