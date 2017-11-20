import {
  TITLE_CHANGED,
  ADDRESS_CHANGED,
  PRICE_CHANGED,
  TIME_CHANGED,
  PHONE_CHANGED,
  LIST_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  title: "",
  address: "",
  price: "",
  time: "",
  phone: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TITLE_CHANGED:
      return { ...state, title: action.payload };
    case ADDRESS_CHANGED:
      return { ...state, address: action.payload };
    case PRICE_CHANGED:
      return { ...state, price: action.payload };
    case TIME_CHANGED:
      return { ...state, time: action.payload };
    case PHONE_CHANGED:
      return { ...state, phone: action.payload };

    case LIST_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
