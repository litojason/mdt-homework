import React from "react";
import renderer from "react-test-renderer";
// import { shallow, mount } from "enzyme";
// import "jest-enzyme";
import "jest-styled-components";

import Modal from "../index";

describe("Component: Modal", () => {
  it("should render when modal is true", () => {
    const component = <Modal />;

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
