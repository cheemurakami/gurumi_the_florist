import flowerListReducer from './flower-list-reducer'
import loginStatusReducer from './login-status-reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers(
  {
    flowerListReducer,
    loginStatusReducer
  }
);

export default rootReducer;