import React from "react";
import renderer from "react-test-renderer";
import { Clock } from "./Clock"; // Adjust the import path as necessary

test("Clock component snapshot", () => {
  const component = renderer.create(<Clock />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
