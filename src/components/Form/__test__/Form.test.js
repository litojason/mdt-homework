import React from "react";
import renderer from "react-test-renderer";
// import { shallow, mount } from "enzyme";
// import "jest-enzyme";
import "jest-styled-components";

import {
  Form,
  InputContainer,
  Label,
  Input,
  Selection,
  TextArea,
} from "../index";

describe("Component: Form", () => {
  it("should render Form", () => {
    const component = <Form />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render InputContainer", () => {
    const component = <InputContainer />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Label", () => {
    const component = <Label />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Input", () => {
    const component = <Input />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render Selection", () => {
    const component = <Selection />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render TextArea", () => {
    const component = <TextArea />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
