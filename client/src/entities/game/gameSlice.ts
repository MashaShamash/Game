import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Game } from './types/gamesTypes';
import GameApi from './api/gameApi';

type StateGames = {
  games: Game[] | undefined;
  error: string | undefined;
  loading: boolean;
};

const initialState: StateGames = {
  games: undefined,
  error: undefined,
  loading: false,
};

export const gamesAllThunk = createAsyncThunk('load/games', () => GameApi.getAllGames());

const gamesSlice = createSlice({
    name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     .addCase(gamesAllThunk.fulfilled, (state, action) => {
        state.games = action.payload;
      })
  }
})

export default gamesSlice;
