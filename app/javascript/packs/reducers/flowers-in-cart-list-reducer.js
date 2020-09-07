const { ReactReduxContext } = require("react-redux");

import * as c from '../actions/ActionType';

export default (state = {}, action) => {
  switch(action.type){
    case c.LOADED_FLOWERS_IN_CART:
      return Object.assign({}, state, {
        flowers: action.flowers
      })
    
      default:
        return state;
  }
}