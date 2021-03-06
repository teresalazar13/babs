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
      if (responseJson.ok) {
        dispatch({ type: LIST_MY_ACTIVE_ORDERS_SUCCESS, payload: JSON.parse(responseJson._bodyText).data });
      }
    })
    .catch(function(error) {
      throw error;
    });
  }
}
