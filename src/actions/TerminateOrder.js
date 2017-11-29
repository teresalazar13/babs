import {
  TERMINATE_ORDER_SUCCESS
} from './types';


export const terminateOrder = (item) => {
  const { token, _id } = item;

  return (dispatch) => {
    fetch('https://backendbabs.herokuapp.com/order/finish', {
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
      console.log(responseJson);
      if (responseJson.ok) {
        dispatch({ type: TERMINATE_ORDER_SUCCESS, payload: JSON.parse(responseJson._bodyText).data });
      }
    })
    .catch(function(error) {
      throw error;
    });
  }
}
