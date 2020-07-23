import * as c from '../actions/ActionType';

export default (state = {}, action) => {
  switch(action.type){
    case c.ADDED_FLOWER:
      return Object.assign({}, state, {
        showMsg:  true        
      })
    case c.UPDATED_FLOWER:
      return Object.assign({}, state, {
        showMsg:  true        
      })
    default:
      return state;
  }
}