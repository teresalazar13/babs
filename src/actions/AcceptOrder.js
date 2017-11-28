import {
  ACCEPT_ORDER_SUCCESS
} from './types';


export const acceptOrder = (item) => {
  const { token, _id } = item;

  return (dispatch) => {
    fetch('https://backendbabs.herokuapp.com/order/accept', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_id: _id,
        token
      })
    })
    .then((responseJson) => {
      if (responseJson.ok) {
        dispatch({ type: ACCEPT_ORDER_SUCCESS, payload: JSON.parse(responseJson._bodyText).data });
      }
    })
    .catch(function(error) {
      throw error;
    });
  }
}
