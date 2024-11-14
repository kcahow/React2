import { mainReducer } from "./mainReducer";

test("mainReducer", () => {
  const state = { test: "test" };
  const action = { type: "setState", payload: { test: "test" } };
  expect(mainReducer(state, action)).toEqual({ test: "test" });
});
