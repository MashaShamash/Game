import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Game } from './types/gamesTypes';
import GameApi from './api/gameApi';

type StateGames = {
  currentGame: Game[] | undefined;
  error: string | undefined;
  loading: boolean;
};

const initialState: StateGames = {
  currentGame: undefined,
  error: undefined,
  loading: false,
};

// export const gamesAllThunk = createAsyncThunk('load/games', () => GameApi.getAllGames());
export const gameStartThunk = createAsyncThunk('load/gameStart', () => GameApi.createStartGame());
const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(gamesAllThunk.fulfilled, (state, action) => {
      //   state.games = action.payload;
      // })
      .addCase(gameStartThunk.fulfilled, (state, action) => {
        state.currentGame = action.payload.game;
      });
  },
});

export default gamesSlice;
