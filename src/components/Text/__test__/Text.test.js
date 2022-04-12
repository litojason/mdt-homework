import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { Text } from "../index";

describe("Component: Text", () => {
  it("should render Text", () => {
    const component = <Text />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
