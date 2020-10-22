import flowerListReducer from './flower-list-reducer'
import loginStatusReducer from './login-status-reducer'
import favFlowerListReducer from './fav-flower-list-reducer'
import flowersInCartListReducer from './flowers-in-cart-list-reducer'
import addressListReducer from './address-list-reducer'
import checkingOutReducer from './checking-out-reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers(
  {
    flowerListReducer,
    loginStatusReducer,
    favFlowerListReducer,
    flowersInCartListReducer,
    addressListReducer,
    checkingOutReducer,
  }
);

export default rootReducer;