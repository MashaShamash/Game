import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GameLine } from './types/gameLineTypes';
import GameLineApi from './api/gameLineApi';

type StateGameLine = {
  gameLine: GameLine[];
//   error: string | undefined;
//   looding: boolean;
};
const initialState: StateGameLine = {
  gameLine: [],
};
export const getAllGameLineThunk = createAsyncThunk('load/themes', () =>
  GameLineApi.getAllGameLine(),
);

const gameLineSlice = createSlice({
  name: 'gameLineSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGameLineThunk.fulfilled, (state, action) => {
      state.gameLine = action.payload;
    });
  },
});
export default gameLineSlice;
