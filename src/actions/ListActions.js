import {
  TITLE_CHANGED,
  ADDRESS_CHANGED,
  PRICE_CHANGED,
  TIME_CHANGED,
  PHONE_CHANGED,
  NEW_ITEM,
  LIST_FETCH_SUCCESS,
} from './types';

export const titleChanged = (text) => {
  return {
    type: TITLE_CHANGED,
    payload: text
  };
};

export const addressChanged = (text) => {
  return {
    type: ADDRESS_CHANGED,
    payload: text
  };
};

export const priceChanged = (text) => {
  return {
    type: PRICE_CHANGED,
    payload: text
  };
};

export const timeChanged = (text) => {
  return {
    type: TIME_CHANGED,
    payload: text
  };
};

export const phoneChanged = (text) => {
  return {
    type: PHONE_CHANGED,
    payload: text
  };
};

export const newItem = (user) => {
  return (dispatch) => {

    fetch('https://backendbabs.herokuapp.com/orders/createOrder', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: "oi",
        price: "oi",
        place_name: "oi",
        place_address: "oi",
        time: 3,
        phone: wefefw,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson.success) {
        console.log("Success");
        loginUserSuccess(dispatch, responseJson.data);
      }
    })
  }
};


export const listFetch = (user) => {
  return (dispatch) => {

    fetch('https://backendbabs.herokuapp.com/orders/listOthersActiveOrders', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson.success) {
        console.log("Success");
        loginUserSuccess(dispatch, responseJson.data);
      }
    })
  }
};
