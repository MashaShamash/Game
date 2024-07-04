import React, { useState } from 'react';
import './GamePage.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import { useAppDispatch } from '../../app/store/store';

type GamePageProps={
}
function GamePage(): JSX.Element{
    const {game} =  useSelector((state:RootState)=>state.game)
    const dispatch = useAppDispatch()
    const [active, setActive] = useState(false)

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const { } = e.target as HTMLFormElement;
        const data = {
     
        };
    
        void dispatch(createMovieThunk(data));
        setActive((prev) => !prev);
        e.target.reset();
return (
<div className=' GamePage'>
    <h1>start game</h1>
    
 </div>
 );

}
export default GamePage
