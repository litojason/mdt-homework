import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Screen from "../index";

describe("Component: Screen", () => {
  it("should render Screen", () => {
    const component = <Screen />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Screen with Navbar", () => {
    const component = <Screen hasNavbar />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
