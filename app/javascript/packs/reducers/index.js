import flowerListReducer from './flower-list-reducer'
import loginStatusReducer from './login-status-reducer'
import favFlowerListReducer from './fav-flower-list-reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers(
  {
    flowerListReducer,
    loginStatusReducer,
    favFlowerListReducer
  }
);

export default rootReducer;