import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store/store';
import ThemeItem from '../../entities/ui/ThemeItem';

function ThemePage(): JSX.Element {
  const { themes } = useSelector((state: RootState) => state.themes);
  // const dispatch = useAppDispatch();
console.log(themes);

  return (
    <div className="ThemePage">
      {themes && themes.map((theme) => <ThemeItem theme={theme} key={theme.id} />)}
    </div>
  );
}
export default ThemePage;
