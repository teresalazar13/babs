import {
  USERNAME_SET,
} from './types';

export const usernameSet = (username) => {
  return ({
    type: USERNAME_SET,
    payload: username
  });
};
