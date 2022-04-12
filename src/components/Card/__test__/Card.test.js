import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { Card, Row } from "../index";

describe("Component: Card", () => {
  it("should render Card", () => {
    const component = <Card />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Row", () => {
    const component = <Row />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
