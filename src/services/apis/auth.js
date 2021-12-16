import request from 'services/request';
import { LOGIN_URL, GET_ME_URL, LOGOUT_URL, SIGN_UP_URL } from 'constants/endpoints';

export const loginApi = async (data) => {
  return request({
    url: LOGIN_URL,
    method: 'POST',
    data,
  });
};

export const getMeApi = async () => {
  return request({ url: GET_ME_URL, method: 'get', isAuth: true });
};

export const logoutApi = async () => {
  return request({ url: LOGOUT_URL, method: 'get', isAuth: true });
};

export const signUpApi = async (data) => {
  return request({ url: SIGN_UP_URL, method: 'post', data });
};
