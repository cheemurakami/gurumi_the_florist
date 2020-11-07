import * as c from "../actions/ActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case c.SELECTED_ADDRESS_STATE:
      return Object.assign({}, state, {
        address: action.address,
      });
    default:
      return state;
  }
};
