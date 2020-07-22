import * as c from '../actions/ActionType';

export default (state = {}, action) => {
  const { title, description, price, id } = action;
  switch(action.type){
    case c.ADD_FLOWER:
      console.log('reducer!')
      return Object.assign({}, state, {
        [id]: {
          title: title,
          description: description,
          price: price,
          id: id
        }
      })
    default:
      return state;
  }
}