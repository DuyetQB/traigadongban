const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
import { getList15CategoryApi, pickCategoryFavoriteApi, getCategoriesOver15Api } from 'services/apis/category';

export const getList15Category = createAsyncThunk('category/GET_LIST_15_CATEGORY', async () => {
  try {
    const response = await getList15CategoryApi();
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
});

export const getCategoriesOver15 = createAsyncThunk('category/GET_LIST_CATEGORY_OVER15', async () => {
  try {
    const response = await getCategoriesOver15Api();
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
});

export const pickCategoryFavorite = createAsyncThunk('category/PICK_CATEGORY_FAVORITE', async (data) => {
  try {
    const response = await pickCategoryFavoriteApi(data);
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
});

const categorySlide = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    categoriesOver15: [],
    loading: false,
    error: {},
  },
  reducers: {},
  extraReducers: {
    [getList15Category.pending]: (state) => {
      state.loading = true;
    },
    [getList15Category.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getList15Category.fulfilled]: (state, action) => {
      state.categories = action.payload.data;
      state.loading = true;
      state.error = {};
    },

    [getCategoriesOver15.pending]: (state) => {
      state.loading = true;
    },
    [getCategoriesOver15.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getCategoriesOver15.fulfilled]: (state, action) => {
      state.categoriesOver15 = action.payload.data;
      state.loading = true;
      state.error = {};
    },

    [pickCategoryFavorite.pending]: (state) => {
      state.loading = true;
    },
    [pickCategoryFavorite.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [pickCategoryFavorite.fulfilled]: (state) => {
      state.loading = true;
      state.error = {};
    },
  },
});

const { reducer: categoryReducer } = categorySlide;
export default categoryReducer;
