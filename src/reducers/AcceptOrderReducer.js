import {
  ACCEPT_ORDER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  navigateHome: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCEPT_ORDER_SUCCESS:
      return { ...state, ...INITIAL_STATE, navigateHome: true };
    default:
      return state;
  }
};
