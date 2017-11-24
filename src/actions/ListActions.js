import {
  NEW_ITEM,
  NEW_ITEM_FAIL,
  NEW_ITEM_SUCCESS,
  LIST_FETCH_SUCCESS,
} from './types';


export const newItem = (item) => {
  return (dispatch) => {
    fetch('https://backendbabs.herokuapp.com/order/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: item.textDescription,
        price: item.textPrice,
        place_name: item.textAddress,
        place_address: item.textAddress,
        time: item.textTime,
        phone: item.textContact,
        token: item.token,
      })
    })
    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson.ok) {
        console.log("Success");
        newItemSuccess(dispatch);
      }
      else {
        console.log("Fail");
        newItemFail(dispatch);
      }
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      throw error;
    });
  }
};

const newItemFail = (dispatch) => {
  dispatch({ type: NEW_ITEM_FAIL });
};

const newItemSuccess = (dispatch) => {
  dispatch({ type: NEW_ITEM_SUCCESS });
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
