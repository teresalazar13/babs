import {
  USERNAME_SET,
} from '../actions/types';

const INITIAL_STATE = {
  username: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_SET:
      return { ...state, values: action.payload };
    default:
      return state;
  }
};
