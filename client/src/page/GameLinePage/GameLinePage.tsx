import React, { useState } from 'react';
// import './GameLinePage.scss';
import type { GameLine } from '../../entities/gameLine/types/gameLineTypes';
import { useAppDispatch } from '../../app/store/store';
import ModalWindow from '../../shared/ui/Modal/Modal';

type GameLinePageProps = {
  gameline: GameLine;
};
function GameLinePage({ gameline }: GameLinePageProps): JSX.Element {
  const [active, setActive] = useState<boolean>(false);
  const [newAnswer, setNewAswer] = useState<string>('');
  const [checkAnswer, setCheckAnswer] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onHandleSubmit = (e): void => {
    e.preventDafault();
    setCheckAnswer((prev) => !prev);
    if (newAnswer.trim().toLowerCase() === gameline.Question.answer.trim().toLowerCase()) {
      dispatch(updateGameLIneThunk({ id: gameline.id, body: gameline.gameLineStatus }));
    }
  };
  return (
    <div className=" GameLinePage">
      <ModalWindow active={active} setActive={setActive}>
        <h3>{gameline.Question.question}</h3>
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="ответ"
            value={newAnswer}
            onChange={(e) => setCheckAnswer(e.target.value)}
          />
          <button type="submit">Отвечаю</button>
        </form>
        {checkAnswer && (
          <>
            {newAnswer === gameline.Question.answer ? (
              <h5>Супер ответ!</h5>
            ) : (
              <h5>Ноуууууб праввильный ответ {gameline.Question.answer}</h5>
            )}
          </>
        )}
      </ModalWindow>
    </div>
  );
}
export default GameLinePage;
