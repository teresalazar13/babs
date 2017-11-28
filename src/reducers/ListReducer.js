import {
  NEW_ITEM,
  NEW_ITEM_FAIL,
  NEW_ITEM_SUCCESS,
  LIST_OTHERS_ACTIVE_ORDERS_SUCCESS,
  ACCEPT_ORDER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  errorR: '',
  navigateHome: false,
  orders: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_ITEM:
      return action.payload;
    case NEW_ITEM_FAIL:
      return { ...state, errorR: 'Invalid Fields' };
    case NEW_ITEM_SUCCESS:
      return { ...state, ...INITIAL_STATE, navigateHome: true };
    case LIST_OTHERS_ACTIVE_ORDERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
