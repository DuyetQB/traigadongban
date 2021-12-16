import { configureStore } from '@reduxjs/toolkit';
import demoReducer from './reducers/demoReducer';
import authReducer from './authSlide';
import userReducer from './userSlide';
import categoryReducer from './categorySlide';
import countryReducer from './countrySlide';

export const store = configureStore({
  reducer: {
    demoReducer,
    authReducer,
    userReducer,
    categoryReducer,
    countryReducer,
  },
});
