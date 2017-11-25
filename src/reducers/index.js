import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ListReducer from './ListReducer';
import OthersActiveOrdersReducer from './OthersActiveOrdersReducer';


export default combineReducers({
  auth: AuthReducer,
  list: ListReducer,
  othersActiveOrders: OthersActiveOrdersReducer
});
