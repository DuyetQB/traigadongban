import axios from "axios";
import queryString from "query-string";

import webStorage from "utils/webStorage";

const baseApiConfig = {
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
  headers: {
    "content-type": "application/json",
  },
  timeout: 60000, // 60s
  paramsSerializer: (params) => queryString.stringify(params),
};

const SESSION_EXPIRED_STATUS_CODE = 401;

const baseApiClient = axios.create(baseApiConfig);

const request = ({ isAuth = false, ...options }) => {
  if (isAuth) {
    const accessToken = webStorage.getToken();
    baseApiClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  const onSuccess = (response) => response;
  const onError = (error) => {
    if (error.response.status === SESSION_EXPIRED_STATUS_CODE) {
      localStorage.removeItem("access_token");
    }

    return Promise.reject(error.response);
  };

  return baseApiClient(options).then(onSuccess).catch(onError);
};

export default request;
