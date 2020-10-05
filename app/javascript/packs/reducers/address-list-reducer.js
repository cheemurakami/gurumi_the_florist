import * as c from "../actions/ActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case c.ADDED_ADDRESS:
      return Object.assign({}, state, {
        showAddedMsg: true,
      });
    case c.DELETED_ADDRESS:
      return Object.assign({}, state, {
        showDeletedMsg: true,
      });
    case c.UPDATED_ADDRESS:
      return Object.assign({}, state, {
        showUpdatedMsg: true,
      });
    default:
      return state;
  }
};