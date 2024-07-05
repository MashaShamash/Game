import React, { useState } from 'react';
// import './GameLinePage.scss';
import type { GameLine } from '../../entities/gameLine/types/gameLineTypes';
import { useAppDispatch } from '../../app/store/store';
import ModalWindow from '../../shared/ui/Modal/Modal';
import { updateGameLineThunk } from '../../entities/gameLine/gameLineSlice';
import './styles/GameLinePage.css';

type GameLinePageProps = {
  gameline: GameLine;
};
function GameLinePage({ gameline }: GameLinePageProps): JSX.Element {
  console.log(gameline);
  const [ancser, setAnsver] = useState('');
  const [r, setR] = useState(false);
  const [nr, setNr] = useState(false);
  const [active, setActive] = useState<boolean>(false);
  const [newAnswer, setNewAswer] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(true);
  const dispatch = useAppDispatch();
console.log(ancser);

  // const onHandleClick = (): void => {
  //   setActive((prev) => !prev);
  // };

  // const onHandleSubmit = (e): void => {
  //   e.preventDafault();
  //   setCheckAnswer((prev) => !prev);
  //   if (newAnswer.trim().toLowerCase() === gameline.Question.answer.trim().toLowerCase()) {
  //     void dispatch(updateGameLineThunk({ id: gameline.id, body: gameline.gameLineStatus }));
  //   }
  // };

  const onHandleSubmitQuiz = (e) => {
    e.preventDefault();
    setCheckAnswer((prev) => !prev);
    if (gameline.Question.answer.trim().toLowerCase() === ancser.trim().toLowerCase()) {
      setR(true);
    } else { setNr(true)}
    void dispatch(updateGameLineThunk({ id: gameline.id, body: gameline.gameLineStatus }));
  };

  return (
    <div className=" GameLinePage">
      {r && <h2>Правильно!</h2>}
      {nr && <div><h2>Не правильно!</h2>
      <h3 className='ansverNo'>Правильный ответ: {gameline.Question.answer}</h3>
        </div>}
      <img src={gameline.Question.img} />
      {checkAnswer && (
        <form className="questionForm" onSubmit={onHandleSubmitQuiz}>
          <input type="text" placeholder="Ответ"         value={ancser}
        onChange={(e) => setAnsver(e.target.value)} />
          <button type="submit">Ответить</button>
        </form>
      )}

      {/* <ModalWindow active={active} setActive={setActive}>
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
      </ModalWindow> */}
    </div>
  );
}
export default GameLinePage;
