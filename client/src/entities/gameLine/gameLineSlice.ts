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
export const getGameLineThunk = createAsyncThunk('load/gameLine', () =>
  GameLineApi.getAllGameLine(),
);

export const updateGameLineThunk = createAsyncThunk('update/gameLine', (obj) => GameLineApi.updateGameLine(obj))

const gameLineSlice = createSlice({
  name: 'gameLineSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGameLineThunk.fulfilled, (state, action) => {
      state.gameLine = action.payload;
    }).addCase(updateGameLineThunk.fulfilled, (state, asction) => {
      state.gameLine = state.gameLine.map((item) =>
        item.id === asction.payload.id? asction.payload : item,
      );
    })
  },
});
export default gameLineSlice;
