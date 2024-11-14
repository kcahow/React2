export function mainReducer(
  state: { [x: string]: any },
  action: { type?: any; payload: any; label?: any }
) {
  switch (action.type) {
    case "setState":
      return action.payload;
    case "addBudgetLine": {
      const { label, payload: newLine } = action;
      newLine.id = Math.random().toString(16);
      return {
        ...state,
        [label]: [...state[label], newLine],
      };
    }
    default:
      return {};
  }
}
