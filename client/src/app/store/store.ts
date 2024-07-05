import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import authSlice from '../../entities/users/authSlice';
import themeSlice from '../../entities/theme/themeSlice';
import questionsSlice from '../../entities/question/questionSlice';
import gamesSlice from '../../entities/game/gameSlice';
import gameLineSlice from '../../entities/gameLine/gameLineSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    questions: questionsSlice.reducer,
    themes: themeSlice.reducer,
    currentGame: gamesSlice.reducer,
    gameLine: gameLineSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export type StoreType = typeof store;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
