import * as c from "../actions/ActionType";
//import { createReducer } from '@reduxjs/toolkit'

export default (state = {}, action) => {
  switch (action.type) {
    case c.LOADED_FAV_FLOWERS:
      return Object.assign({}, state, {
        flowers: action.flowers,
      });
    case c.ADDED_FLOWER_IN_CART:
      let updatedFlower = action.flower;
      let updatedFlowersArray = updateObjectInArray(
        state.flowers,
        updatedFlower
      );
      return Object.assign({}, state, {
        flowers: updatedFlowersArray,
      });
    case c.DELETED_FLOWER_IN_CART:
      let updatedFlowerId = action.id;
      let updatedFakeFlower = {
        id: updatedFlowerId,
        is_in_cart: false,
      };
      let updatedFlowersArray2 = updateObjectInArray(
        state.flowers,
        updatedFakeFlower
      );
      return Object.assign({}, state, {
        flowers: updatedFlowersArray2,
      });
    default:
      return state;
  }
};

function updateObjectInArray(favFlowersArray, updatedFlower) {
  return favFlowersArray.map((flower) => {
    if (flower.id !== updatedFlower.id) {
      // This isn't the item we care about - keep it as-is
      return flower;
    }
    // Otherwise, this is the one we want - return an updated value
    return {
      ...flower,
      ...updatedFlower,
    };
  });
}

// const reducer = createReducer({ }, {
//   [c.LOADED_FAV_FLOWERS]: (state, action) => {
//     state.flowers = action.flowers
//   }
// })
//export default reducer;