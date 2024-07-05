import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import type { GameLine } from '../types/gameLineTypes';

class GameLineApi {
  static getAllGameLine = async (): Promise<GameLine[]> => {
    const response: AxiosResponse<{ message: string; gameLine: GameLine[] }> =
      await axiosInstance.get('/gameLine');
      console.log(response);
      
    return response.data.gameLine;
  };

  static updateGameLine = async (obj) => {
    const response = await axiosInstance.put(`/gameLine/${obj.id}`, obj.body);
    return response.data.gameLine;
  };
}

export default GameLineApi;
