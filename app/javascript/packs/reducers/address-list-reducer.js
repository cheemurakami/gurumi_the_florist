import * as c from "../actions/ActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case c.ADDED_ADDRESS:
      return Object.assign({}, state, {
        showMsg: true,
      });
    default:
      return state;
  }
};
