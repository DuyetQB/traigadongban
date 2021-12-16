/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
import webStorage from 'utils/webStorage';
import { loginApi, getMeApi, logoutApi, signUpApi } from 'services/apis/auth';

export const login = createAsyncThunk('auth/LOGIN', async (data) => {
  try {
    const response = await loginApi(data);
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
});

export const signUp = createAsyncThunk('user/SIGN_UP', async (data, { rejectWithValue }) => {
  try {
    const response = await signUpApi(data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.data);
  }
});

export const logout = createAsyncThunk('auth/LOGOUT', async () => {
  const response = await logoutApi();
  return response.data;
});

export const getMe = createAsyncThunk('auth/GET_ME', async () => {
  const response = await getMeApi();
  return response.data;
});

const authSlide = createSlice({
  name: 'auth',
  initialState: {
    currentUser: {},
    isAuth: false,
    isFirstAccess: true,
    isSignUpSuccess: false,
    loading: false,
    error: {},
  },
  reducers: {
    updateIsFirstAccess: (state) => {
      state.isFirstAccess = false;
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
      if (!action.payload) state.currentUser = {};
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.isFirstAccess = false;
      state.error.message = action.error?.message;
    },
    [login.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.isFirstAccess = false;
      state.currentUser = action.payload.data;
      state.error = {};
      webStorage.setToken(action.payload.data.access_token);
    },

    [getMe.pending]: (state) => {
      state.loading = true;
    },
    [getMe.rejected]: (state) => {
      state.loading = false;
      state.isAuth = false;
      state.isFirstAccess = false;
    },
    [getMe.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.isFirstAccess = false;
      state.currentUser = action.payload.data;
    },

    [logout.pending]: (state) => {
      state.loading = true;
    },
    [logout.rejected]: (state) => {
      state.loading = false;
      state.isAuth = false;
      state.currentUser = {};
      state.error = {};
      webStorage.removeAll();
    },
    [logout.fulfilled]: (state) => {
      state.isAuth = false;
      state.currentUser = {};
      state.error = {};
      webStorage.removeAll();
    },

    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.rejected]: (state, action) => {
      state.loading = false;
      state.isAuth = false;
      state.isFirstAccess = false;
      state.error = action.payload?.errors;
    },
    [signUp.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.isFirstAccess = false;
      state.currentUser = action.payload.data;
      state.isSignUpSuccess = true;
      webStorage.setToken(action.payload.data.access_token);
    },
  },
});

export const { updateIsFirstAccess, setAuth } = authSlide.actions;
const { reducer: authReducer } = authSlide;
export default authReducer;
