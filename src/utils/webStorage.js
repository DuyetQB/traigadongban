import _isString from 'lodash-es/isString';
import { ACCESS_TOKEN } from 'constants/configs';

export default {
  set(key, rawValue) {
    const value = _isString(rawValue) ? rawValue : JSON.stringify(rawValue);

    window.localStorage.setItem(key, value);
  },
  get(key) {
    const value = window.localStorage.getItem(key);

    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  },

  remove(key) {
    window.localStorage.removeItem(key);
  },
  removeAll() {
    window.localStorage.clear();
  },
  setToken(value) {
    this.set(ACCESS_TOKEN, value);
  },
  getToken() {
    return this.get(ACCESS_TOKEN);
  },
};
