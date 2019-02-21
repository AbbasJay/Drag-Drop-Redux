export const SET_ITEMS = "SET_ITEMS";
export const PLACE_ITEM = "PLACE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADD_COUNTER = "ADD_COUNTER";
export const REMOVE_COUNTER = "REMOVE_COUNTER";
export const ADD_DRAGGABLE_ITEM = "ADD_DRAGGABLE_ITEM";
export const ITEM_DROPPED = "ITEM_DROPPED";

export const setItems = items => {
  return {
    type: SET_ITEMS,
    items
  };
};
export const placeItem = index => {
  return {
    type: PLACE_ITEM,
    index
  };
};
export const removeItem = index => {
  return {
    type: REMOVE_ITEM,
    index
  };
};
export const addCounter = Items => {
  return {
    type: ADD_COUNTER,
    Items
  };
};
export const removeCounter = Items => {
  return {
    type: REMOVE_COUNTER,
    Items
  };
};
export const addDraggableItem = index => {
  return {
    type: ADD_DRAGGABLE_ITEM,
    index
  };
};
export const itemDropped = () => {
  return {
    type: ITEM_DROPPED
  };
};
