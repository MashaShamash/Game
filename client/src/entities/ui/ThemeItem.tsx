import React from 'react';
import type { Theme } from '../theme/types/themeTypes';
// import { useAppDispatch } from '../../app/store/store';

type ThemeItemProps = {
  theme: Theme;
};
function ThemeItem({ theme }: ThemeItemProps): JSX.Element {
  // const dispatch =  useAppDispatch()

  return (
    <div className="ThemeItem">
      <h3>{theme.title}</h3>
    </div>
  );
}
export default ThemeItem;
