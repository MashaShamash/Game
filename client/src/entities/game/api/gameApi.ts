import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import type { Game } from '../types/gamesTypes';
import type { GameLine } from '../../gameLine/types/gameLineTypes';

class GameApi {
  static getAllGames = async (): Promise<Game[]> => {
    try {
      const response: AxiosResponse<{ message: 'success'; games: Game[] }> =
        await axiosInstance.get('/games/');
      return response.data.games;
    } catch (error) {
      if (error) {
        throw new Error('no success');
      } else {
        throw new Error('no success');
      }
    }
  };

  static createStartGame = async (): Promise<{ message: 'success'; game: Game; gameLines: GameLine[]}> => {
    try {
      const response: AxiosResponse<{ message: 'success'; game: Game; gameLines: GameLine[] }> =
        await axiosInstance.post('/gameStart/');
      return response.data;
    } catch (error) {
      if (error) {
        throw new Error('no success');
      } else {
        throw new Error('no success');
      }
    }
  };
}


export default GameApi;
