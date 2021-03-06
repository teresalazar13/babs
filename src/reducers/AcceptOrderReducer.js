import {
  ACCEPT_ORDER_SUCCESS,
  SET_NAVIGATE_HOME_FALSE
} from '../actions/types';

const INITIAL_STATE = {
  navigateHome: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCEPT_ORDER_SUCCESS:
      return { ...state, ...INITIAL_STATE, navigateHome: true };
    case SET_NAVIGATE_HOME_FALSE:
      return { ...state, ...INITIAL_STATE, navigateHome: false };
    default:
      return state;
  }
};
