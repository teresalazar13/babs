import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS
} from './types';
import ReduxThunk from 'redux-thunk';
import { NavigationActions } from 'react-navigation'

export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ username, password }) => {
  return (dispatch) => {

    fetch('https://backendbabs.herokuapp.com/auth/login', {
      method: 'POST',
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
      else {
        if (responseJson.message == "Wrong password") {
          console.log("Fail");
          loginUserFail(dispatch);
        }
        fetch('https://backendbabs.herokuapp.com/auth/register', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
            password2: password,
          })
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.success) {
            console.log("Success");
            loginUserSuccess(dispatch, responseJson.data);
          }
          else {
            console.log("Fail");
            loginUserFail(dispatch);
          }
        })
      }
    })
  }
}

const delay = (ms) => new Promise(resolve =>
  setTimeout(resolve, ms)
);

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
};
