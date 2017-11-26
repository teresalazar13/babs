import {
  LIST_MY_ACTIVE_ORDERS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_MY_ACTIVE_ORDERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
