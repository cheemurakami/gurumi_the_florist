import * as c from '../actions/ActionType';

export default (state = {}, action) => {
  switch(action.type){
    case c.ADD_FLOWER:
      return Object.assign({}, state, {
        showMsg:  true        
      })
    default:
      return state;
  }
}