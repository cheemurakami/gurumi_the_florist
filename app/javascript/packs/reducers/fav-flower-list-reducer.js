import * as c from '../actions/ActionType';

export default (state = {}, action) => {
  switch (action.type) {

  case c.LOADED_FAV_FLOWERS:
    return Object.assign({}, state, {
      flowers: action.flowers
    })

  default:
    return state;
  }
}
