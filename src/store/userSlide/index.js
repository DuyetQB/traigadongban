const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
import { getProfileApi, updateProfileApi, uploadAvatarApi, getCategoriesProfileApi } from 'services/apis/user';
import { getMe } from 'store/authSlide';
import _omit from 'lodash/omit';

export const getProfile = createAsyncThunk('user/GET_PROFILE', async () => {
  try {
    const response = await getProfileApi();
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
});

export const uploadAvatar = createAsyncThunk('user/UPLOAD_AVATAR', async (data) => {
  try {
    const response = await uploadAvatarApi(data);
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
});

export const updateProfile = createAsyncThunk('user/UPDATE_PROFILE', async (data, thunkAPI) => {
  try {
    const formData = {
      ..._omit(data, ['country', 'category', 'category_follow']),
      country_id: data.country?.value,
      category_follow_ids: data.category_follow_ids?.map((item) => item.value) || null,
    };

    const response = await updateProfileApi(formData);
    thunkAPI.dispatch(getMe());
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
});

export const getCategoriesProfile = createAsyncThunk('user/GET_CATEGORIES_PROFILE', async () => {
  try {
    const response = await getCategoriesProfileApi();
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
});

const userSlide = createSlice({
  name: 'user',
  initialState: {
    profileInfo: {},
    categoriesProfile: [],
    loading: false,
    error: {},
  },
  reducers: {
    updateIsFirstAccess: (state) => {
      state.isFirstAccess = false;
    },
  },
  extraReducers: {
    [getProfile.pending]: (state) => {
      state.loading = true;
    },
    [getProfile.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.profileInfo = action.payload.data;
      state.loading = true;
      state.error = {};
    },

    [getCategoriesProfile.pending]: (state) => {
      state.loading = true;
    },
    [getCategoriesProfile.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getCategoriesProfile.fulfilled]: (state, action) => {
      state.categoriesProfile = action.payload.data;
      state.loading = true;
      state.error = {};
    },

    [updateProfile.pending]: (state) => {
      state.loading = true;
    },
    [updateProfile.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [updateProfile.fulfilled]: (state) => {
      state.loading = true;
      state.error = {};
    },

    [uploadAvatar.pending]: (state) => {
      state.loading = true;
    },
    [uploadAvatar.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [uploadAvatar.fulfilled]: (state) => {
      state.loading = true;
      state.error = {};
    },
  },
});

export const { updateIsFirstAccess, setAuth } = userSlide.actions;
const { reducer: userReducer } = userSlide;
export default userReducer;
