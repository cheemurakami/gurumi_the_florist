import * as c from "../actions/ActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case c.LOADED_FLOWERS_IN_CART:
      return Object.assign({}, state, {
        flowers: action.flowers,
      });
    case c.ADDED_FLOWER_IN_CART:
      //new to use Array.from to make a new copy of the flowers array so that the component will know the array has changed so it will update.
      let flowers = Array.from(state.flowers);
      flowers.push(action.flower);

      return Object.assign({}, state, {
        flowers: flowers,
      });
    case c.DELETED_FLOWER_IN_CART:
      return Object.assign({}, state, {
        inCart: false,
      });

    default:
      return state;
  }
};
