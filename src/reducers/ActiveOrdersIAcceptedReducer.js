import {
  LIST_ACTIVE_ORDERS_I_ACCEPTED_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_ACTIVE_ORDERS_I_ACCEPTED_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
