export type BudgetLineType = {
  id?: string;
  desc: string;
  amount: number;
};

export type BudgetItemType = 'income' | 'expenses' | 'debt';

export type BudgetItemDataType = {
  [key in BudgetItemType]: BudgetLineType[];
};

const data: (BudgetItemDataType | undefined)[] = [
  { income: [], expenses: [], debt: [] },
  { income: [], expenses: [], debt: [] },
  { income: [], expenses: [], debt: [] },
  { income: [], expenses: [], debt: [] },
  { income: [], expenses: [], debt: [] },
  { income: [], expenses: [], debt: [] },
  { income: [], expenses: [], debt: [] },
  { income: [], expenses: [], debt: [] },
  { income: [], expenses: [], debt: [] },
  {
    income: [
      { id: '1', desc: 'oct-income 1', amount: 50 },
      { id: '2', desc: 'line 2', amount: 60 },
      { id: '3', desc: 'line 3', amount: 90 },
    ],
    debt: [
      { id: '1', desc: 'line 1', amount: -1 },
      { id: '2', desc: 'line 2', amount: -5 },
    ],
    expenses: [
      { id: '1', desc: 'line 1', amount: -4 },
      { id: '3', desc: 'line 2', amount: -9 },
    ],
  },
  {
    income: [
      { id: '1', desc: 'nov-income 1', amount: 40 },
      { id: '2', desc: 'line 2', amount: 60 },
      { id: '3', desc: 'line 3', amount: 40 },
    ],
    debt: [{ id: '1', desc: 'line 1', amount: -1 }],
    expenses: [
      { id: '1', desc: 'line 1', amount: -14 },
      { id: '2', desc: 'line 2', amount: -6 },
      { id: '3', desc: 'line 3', amount: -19 },
    ],
  },
  {
    income: [
      { id: '1', desc: 'desc-income 1', amount: 40 },
      { id: '2', desc: 'desc-income 1', amount: 60 },
    ],
    debt: [{ id: '1', desc: 'dec-debt 1', amount: -1 }],
    expenses: [{ id: '1', desc: 'desc-expense 1', amount: -4 }],
  },
];

const getBudget = async (monthIndex: number) => {
  return data[monthIndex];
};

export { getBudget };
