import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import type { GameLine } from '../types/gameLineTypes';

class GameLineApi {
  static getAllGameLine = async (): Promise<GameLine[]> => {
    const response: AxiosResponse<{ message: string; gameLine: GameLine[] }> =
      await axiosInstance.get('/gameLines');
    return response.data.gameLine;
  };
}

export default GameLineApi;
