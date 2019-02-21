import React from "react";
import { App } from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const appProps = {
  setItems: () => {}
};

Enzyme.configure({ adapter: new Adapter() });

describe("app component", () => {
  it("renders", () => {
    const div = shallow(<App {...appProps} />);
    expect(div).toMatchSnapshot();
  });
});
