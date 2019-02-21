import React from "react";
import { Asset } from "./asset.component";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const removeItemFn = jest.fn();
const placeItemFn = jest.fn();
const addDraggableItemFn = jest.fn();
const assetProps = {
  placeItem: placeItemFn,
  removeItem: removeItemFn,
  addDraggableItem: addDraggableItemFn,
  isSelectedItem: true,
  item: {},
  index: 0
};

Enzyme.configure({ adapter: new Adapter() });

describe("asset component", () => {
  it("renders", () => {
    const div = shallow(<Asset {...assetProps} />);
    expect(div).toMatchSnapshot();
  });

  it("renders x when isSelected is true", () => {
    const wrapper = shallow(<Asset {...assetProps} />);
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("when x is clicked it should call removeItem()", () => {
    const wrapper = shallow(<Asset {...assetProps} />);
    const xButton = wrapper.find("button");
    xButton.simulate("click");
    expect(removeItemFn).toHaveBeenCalledWith(0);
  });

  it("does not render x when isSelected is false", () => {
    const renderedAsset = shallow(<Asset {...assetProps} />);
    renderedAsset.setProps({ isSelectedItem: false });
    expect(renderedAsset.find("button")).toHaveLength(0);
  });

  it("when element is clicked expect placeItem() to be called", () => {
    const renderedAsset = shallow(<Asset {...assetProps} />);
    renderedAsset.setProps({ isSelectedItem: false });
    renderedAsset.simulate("click");
    expect(placeItemFn).toHaveBeenCalledWith(0);
  });

  it("when element is dragged addDraggableItem() to be called", () => {
    const renderedAsset = shallow(<Asset {...assetProps} />);
    renderedAsset.setProps({ isSelectedItem: false });
    renderedAsset.simulate("dragStart");
    expect(addDraggableItemFn).toHaveBeenCalledWith(0);
  });
});
