const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
import { getCountriesApi } from 'services/apis/country';

export const getCountries = createAsyncThunk('country/GET_COUNTRIES', async () => {
  try {
    const response = await getCountriesApi();
    return response.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
});

const countrySlide = createSlice({
  name: 'country',
  initialState: {
    countries: [],
    loading: false,
    error: {},
  },
  reducers: {},

  extraReducers: {
    [getCountries.pending]: (state) => {
      state.loading = true;
    },
    [getCountries.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getCountries.fulfilled]: (state, action) => {
      state.countries = action.payload.data;
      state.loading = true;
      state.error = {};
    },
  },
});

const { reducer: countryReducer } = countrySlide;
export default countryReducer;
