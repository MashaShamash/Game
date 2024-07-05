import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store, { useAppDispatch, useAppSelector, type RootState } from '../../app/store/store';
// import { useAppDispatch } from '../../app/store/store';
import ThemeItem from '../../entities/ui/ThemeItem';
import { getGameLineThunk } from '../../entities/gameLine/gameLineSlice';

function ThemePage(): JSX.Element {
  const { themes } = useSelector((state: RootState) => state.themes);
const { gameLine } = useAppSelector((state: RootState) => state.gameLine);
const dispatch = useAppDispatch();
console.log(store.getState());
  return (
    <div className="ThemePage">
      {themes && themes.map((theme) => <ThemeItem theme={theme} key={theme.id} />)}
    </div>
  );
}
export default ThemePage;
