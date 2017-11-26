import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ListReducer from './ListReducer';
import OthersActiveOrdersReducer from './OthersActiveOrdersReducer';
import MyActiveOrdersReducer from './MyActiveOrdersReducer';


export default combineReducers({
  auth: AuthReducer,
  list: ListReducer,
  othersActiveOrders: OthersActiveOrdersReducer,
  myActiveOrders: MyActiveOrdersReducer
});
