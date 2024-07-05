import React, { useState } from 'react';
// import './GameLinePage.scss';
import type { GameLine } from '../../entities/gameLine/types/gameLineTypes';
import { useAppDispatch } from '../../app/store/store';
import ModalWindow from '../../shared/ui/Modal/Modal';
import { updateGameLineThunk } from '../../entities/gameLine/gameLineSlice';

type GameLinePageProps = {
  gameline: GameLine;
};
function GameLinePage({ gameline }: GameLinePageProps): JSX.Element {
  console.log(gameline);

  const [active, setActive] = useState<boolean>(false);
  const [newAnswer, setNewAswer] = useState<string>('');
  const [checkAnswer, setCheckAnswer] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onHandleSubmit = (e): void => {
    e.preventDafault();
    setCheckAnswer((prev) => !prev);
    if (newAnswer.trim().toLowerCase() === gameline.Question.answer.trim().toLowerCase()) {
      void dispatch(updateGameLineThunk({ id: gameline.id, body: gameline.gameLineStatus }));
    }
  };
  
  return (
    <div className=" GameLinePage">
      <img src={gameline.Question.img} />
      <ModalWindow active={active} setActive={setActive}>
        <h3>{gameline.Question.question}</h3>
        <img src={gameline.Question.img} />
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
