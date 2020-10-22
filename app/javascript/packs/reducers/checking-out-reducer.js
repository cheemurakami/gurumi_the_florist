import * as c from "../actions/ActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case c.CHECKING_OUT:
      return Object.assign({}, state, {
        cartItems: action.cartItems,
      });
    default:
      return state;
  }
};
