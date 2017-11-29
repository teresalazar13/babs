import {
  NEW_ITEM,
  NEW_ITEM_FAIL,
  NEW_ITEM_SUCCESS,
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
        price: Number(item.textPrice),
        place_name: item.textAddress,
        place_address: item.textAddress,
        time: item.textTime,
        phone: item.textContact,
        token: item.token,
      })
    })
    .then((responseJson) => {
      if (responseJson.ok) {
        newItemSuccess(dispatch);
      }
      else {
        newItemFail(dispatch);
      }
    })
    .catch(function(error) {
      throw error;
    });
  }
};

export const newItemFail = (dispatch) => {
  dispatch({ type: NEW_ITEM_FAIL });
};

export const newItemSuccess = (dispatch) => {
  dispatch({ type: NEW_ITEM_SUCCESS });
};
