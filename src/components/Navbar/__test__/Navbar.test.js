import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Navbar from "../index";

describe("Component: Navbar", () => {
  it("should render Navbar", () => {
    const component = <Navbar />;
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
