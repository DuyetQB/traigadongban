import request from 'services/request';
import { LIST_15_CATEGORY_URL, GET_CATEGORIES_OVER15_URL, PICK_CATEGORY_FAVORITE_URL } from 'constants/endpoints';

export const getList15CategoryApi = async () => {
  return request({ url: LIST_15_CATEGORY_URL, method: 'get', isAuth: true });
};

export const pickCategoryFavoriteApi = async (data) => {
  return request({ url: PICK_CATEGORY_FAVORITE_URL, method: 'post', data });
};

export const getCategoriesOver15Api = async () => {
  return request({ url: GET_CATEGORIES_OVER15_URL, method: 'get' });
};
