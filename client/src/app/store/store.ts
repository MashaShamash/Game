import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import authSlice from '../../entities/users/authSlice';
import themeSlice from '../../entities/theme/themeSlice';
// import gameSlice from '../../entities/game/gameSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    themes: themeSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export type StoreType = typeof store;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
