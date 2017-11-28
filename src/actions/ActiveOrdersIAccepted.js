import {
  LIST_ACTIVE_ORDERS_I_ACCEPTED_SUCCESS
} from './types';

export const listActiveOrdersIAccepted = (token) => {
  return (dispatch) => {
    fetch('https://backendbabs.herokuapp.com/order/listAcceptedOrders', {
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
        dispatch({ type: LIST_ACTIVE_ORDERS_I_ACCEPTED_SUCCESS, payload: JSON.parse(responseJson._bodyText).data });
      }
    })
    .catch(function(error) {
      throw error;
    });
  }
}
