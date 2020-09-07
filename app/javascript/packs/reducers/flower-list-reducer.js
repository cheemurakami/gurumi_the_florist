import * as c from '../actions/ActionType';

export default (state = {}, action) => {
  switch (action.type) {
    case c.ADDED_FLOWER:
      return Object.assign({}, state, {
        showMsg: true,
      });
    case c.UPDATED_FLOWER:
      return Object.assign({}, state, {
        showMsg: true,
      });
    case c.LOADED_FORM:
      return Object.assign({}, state, {
        showMsg: false,
      });
    case c.DELETED_FLOWER:
      return Object.assign({}, state, {
        showMsg: true,
      });
    case c.LOADED_FLOWERS:
      return Object.assign({}, state, {
        flowers: action.flowers,
      });
    default:
      return state;
  }
}