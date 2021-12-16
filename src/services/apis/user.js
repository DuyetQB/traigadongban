import request from 'services/request';
import { GET_PROFILE_URL, UPDATE_PROFILE_URL, GET_CATEGORIES_PROFILE_URL, UPLOAD_IMAGE_URL } from 'constants/endpoints';

export const getProfileApi = async () => {
  return request({ url: GET_PROFILE_URL, method: 'get', isAuth: true });
};

export const updateProfileApi = async (data) => {
  return request({ url: UPDATE_PROFILE_URL, method: 'post', isAuth: true, data });
};

export const uploadAvatarApi = async (data) => {
  return request({ url: UPLOAD_IMAGE_URL, method: 'post', data });
};

export const getCategoriesProfileApi = async () => {
  return request({ url: GET_CATEGORIES_PROFILE_URL, method: 'get' });
};
