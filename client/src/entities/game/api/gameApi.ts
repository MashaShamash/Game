import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import type { Game } from '../types/gamesTypes';

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
}

export default GameApi;