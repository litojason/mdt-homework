import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Button from "../index";
import { LoadingSpinner } from "../styles";

describe("Component: Button", () => {
  it("should render Button", () => {
    const component = <Button />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Button loading", () => {
    const component = <Button loading={true} />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render LoadingSpinner", () => {
    const component = <LoadingSpinner />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
