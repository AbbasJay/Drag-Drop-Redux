import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setItems,
  removeItem,
  removeCounter,
  itemDropped
} from "./Actions/action";
import "./App.css";
import Items from "./assets";
import Asset from "./Components/asset/asset.component";

export class App extends Component {
  componentDidMount() {
    this.props.setItems(Items);
  }

  itemChoices = Items => {
    return Items.map((item, index) => {
      return <Asset item={item} index={index} key={item.id} />;
    });
  };

  getSelectedselected = () => {
    const { selectedItems } = this.props;
    if (selectedItems) {
      return selectedItems.map((item, index) => {
        return (
          <Asset item={item} index={index} key={index} isSelectedItem={true} />
        );
      });
    }
  };
  onDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  countArticle = type => {
    let itemCounter = 0;
    this.props.selectedItems &&
      this.props.selectedItems.forEach(item => {
        if (item.type === type) {
          itemCounter = itemCounter + 1;
        }
      });
    return itemCounter;
  };

  render() {
    return (
      <div className="wrapper">
        <div className="asset-summary">
          <div className="container">
            <div className="row">
              <div className="col-6 asset-summary-left">
                <span>{Items.length + " assets"}</span>
              </div>
              <div className="col-6 asset-summary-right">
                {this.countArticle("article")}
                <span className="info">Articles,</span>
                {this.countArticle("document")}
                <span className="info">Documents,</span>
                {this.countArticle("video")}
                <span className="info">Videos</span>
                {this.countArticle("online-course")}
                <span className="info">Online Courses</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container asset-builder">
          <div className="row">
            <div className="col-4">
              <ul className="asset-picker">
                {Items && (
                  <div className="asset type-video">
                    {this.itemChoices(Items)}
                  </div>
                )}
              </ul>
            </div>
            <div
              className="col-8 "
              onDragOver={this.onDragOver}
              onDrop={this.props.itemDropped}
            >
              <h2>Learning Assets Preview</h2>
              <ul className="asset-preview">
                {this.props.selectedItems && (
                  <div className="asset type-video">
                    {this.getSelectedselected()}
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    selectedItems: state.selectedItems,
    articleCounter: state.articleCounter,
    videoCounter: state.videoCounter,
    documentCounter: state.documentCounter,
    onlineCounter: state.onlineCounter
  };
};

const mapActionsToProps = dispatch => {
  return {
    setItems: items => dispatch(setItems(items)),
    removeItem: index => dispatch(removeItem(index)),
    removeCounter: Items => dispatch(removeCounter(Items)),
    itemDropped: () => dispatch(itemDropped())
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
