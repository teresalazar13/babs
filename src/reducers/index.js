import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ListReducer from './ListReducer';
import OthersActiveOrdersReducer from './OthersActiveOrdersReducer';
import MyActiveOrdersReducer from './MyActiveOrdersReducer';
import ActiveOrdersIAcceptedReducer from './ActiveOrdersIAcceptedReducer';
import AcceptOrderReducer from './AcceptOrderReducer';
import TerminateOrderReducer from './TerminateOrderReducer';


export default combineReducers({
  auth: AuthReducer,
  list: ListReducer,
  othersActiveOrders: OthersActiveOrdersReducer,
  myActiveOrders: MyActiveOrdersReducer,
  activeOrdersIAccepted: ActiveOrdersIAcceptedReducer,
  acceptOrder: AcceptOrderReducer,
  terminateOrder: TerminateOrderReducer
});
