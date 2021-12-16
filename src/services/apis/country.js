import request from 'services/request';
import { GET_COUNTRIES_URL } from 'constants/endpoints';

export const getCountriesApi = async () => {
  return request({ url: GET_COUNTRIES_URL, method: 'post' });
};
