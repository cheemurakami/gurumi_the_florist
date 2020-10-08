import * as c from "../actions/ActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case c.ADDED_ADDRESS:
      return Object.assign({}, state, {
        showMsg: "Address Added!",
      });
    case c.DELETED_ADDRESS:
      return Object.assign({}, state, {
        showMsg: "Address Deleted!",
      });
    case c.UPDATED_ADDRESS:
      return Object.assign({}, state, {
        showMsg: "Address Updated",
      });
    case c.RESET_MESSAGE:
      return Object.assign({}, state, {});
    case c.CHANGED_ADDRESSES_STATE:
      return Object.assign({}, state, {
        addresses: action.addresses,
      });
    default:
      return state;
  }
};
