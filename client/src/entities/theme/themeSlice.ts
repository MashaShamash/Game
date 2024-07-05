import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Theme } from './types/themeTypes';
import ThemeApi from './api/themeApi';

type StateTheme = {
  themes: Theme[];
};
const initialState: StateTheme = {
  themes: [],
};
export const getAllThemeThunk = createAsyncThunk('load/themes', () => ThemeApi.getAllTheme());

const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllThemeThunk.fulfilled, (state, action) => {
      state.themes = action.payload;
    });
  },
});

export default themeSlice;
