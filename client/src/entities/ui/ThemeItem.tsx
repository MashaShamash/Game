import React from 'react';
import type { Theme } from '../theme/types/themeTypes';
import { useAppDispatch, useAppSelector } from '../../app/store/store';
import GameLinePage from '../../page/GameLinePage/GameLinePage';
// import { useAppDispatch } from '../../app/store/store';
import './styles/ThemeItems.css'

type ThemeItemProps = {
  theme: Theme;
};
function ThemeItem({ theme }: ThemeItemProps): JSX.Element {
  const { gameLine } = useAppSelector((state) => state.gameLine);
  console.log(gameLine);
  
  return (
    <div className="ThemeItem">
      <h2>{theme.title}</h2>
      <div className='ThemeItem-wrapper'>
        {gameLine &&
          gameLine
            .filter((gameLineTheme) => gameLineTheme.Question.themeId === theme.id)
            .map((gameline) => <GameLinePage gameline={gameline} key={theme.id} />)}
      </div>
    </div>
  );
}
export default ThemeItem;
