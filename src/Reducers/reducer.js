import {
  SET_ITEMS,
  PLACE_ITEM,
  REMOVE_ITEM,
  ADD_DRAGGABLE_ITEM,
  ITEM_DROPPED
} from "../Actions/action";

export default (
  state = {
    items: []
  },
  action
) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.items,
        selectedItems: []
      };

    case PLACE_ITEM: {
      let addSelectedItems;
      addSelectedItems = [...state.selectedItems, state.items[action.index]];
      return {
        ...state,
        selectedItems: addSelectedItems
      };
    }
    case ADD_DRAGGABLE_ITEM: {
      return {
        ...state,
        dragged: action.index
      };
    }
    case ITEM_DROPPED: {
      if (state.dragged !== null) {
        let newSelectedItems = [...state.selectedItems];
        newSelectedItems.push(state.items[state.dragged]);
        return {
          ...state,
          dragged: null,
          selectedItems: newSelectedItems
        };
      }
      return state;
    }
    case REMOVE_ITEM: {
      let removeSelectedItems = [...state.selectedItems];
      removeSelectedItems.splice(action.index, 1);
      return {
        ...state,
        selectedItems: removeSelectedItems
      };
    }
    default:
      return state;
  }
};
