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

export const newItemFail = (dispatch) => {
  dispatch({ type: NEW_ITEM_FAIL });
};

export const newItemSuccess = (dispatch) => {
  dispatch({ type: NEW_ITEM_SUCCESS });
};
