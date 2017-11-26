import {
  LIST_MY_ACTIVE_ORDERS_SUCCESS
} from './types';

export const listMyActiveOrders = (token) => {
  return (dispatch) => {
    fetch('https://backendbabs.herokuapp.com/order/listActiveOrders', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token
      })
    })
    .then((responseJson) => {
      console.log(JSON.parse(responseJson._bodyText));
      if (responseJson.ok) {
        console.log("Success");
        dispatch({ type: LIST_MY_ACTIVE_ORDERS_SUCCESS, payload: JSON.parse(responseJson._bodyText).data });
      }
      else {
        console.log("Fail");
      }
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      throw error;
    });
  }
}
