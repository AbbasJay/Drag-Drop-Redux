import React, { Component } from "react";
import { placeItem, removeItem, addDraggableItem } from "../../Actions/action";
import { connect } from "react-redux";
import "./asset.styles.css";

export class Asset extends Component {
  dragStartHandler = () => {
    this.props.addDraggableItem(this.props.index);
  };
  handleClick = () => {
    const { index, placeItem, isSelectedItem } = this.props;
    if (!isSelectedItem) {
      placeItem(index);
    }
  };
  render() {
    const { item, index, isSelectedItem, removeItem } = this.props;
    return (
      item && (
        <li
          className={"asset type-" + item.type}
          onClick={this.handleClick}
          draggable
          onDragStart={() => this.dragStartHandler()}
        >
          <h2>{item.name}</h2>
          <p>
            <span className="info">
              {item.duration + " "}
              {item.durationType && item.durationType}
            </span>
            <span className="info">{item.type}</span>
          </p>
          {isSelectedItem && (
            <button
              onClick={() => {
                removeItem(index);
              }}
              className="remove-asset"
            >
              x
            </button>
          )}
        </li>
      )
    );
  }
}

const mapActionsToProps = dispatch => {
  return {
    placeItem: index => dispatch(placeItem(index)),
    removeItem: index => dispatch(removeItem(index)),
    addDraggableItem: index => dispatch(addDraggableItem(index))
  };
};

export default connect(
  null,
  mapActionsToProps
)(Asset);
