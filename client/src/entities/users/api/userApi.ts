import type { AxiosResponse } from 'axios';
import type { User, UserWithoutId, UserWithoutName } from '../types/userTypes';
import axiosInstance from '../../../services/axiosInstance';

class AuthApi {
  static registartion = async (
    body: UserWithoutId,
  ): Promise<{ message: 'success'; accessToken: string; user: User }> => {
    try {
      const response: AxiosResponse<{ message: 'success'; accessToken: string; user: User }> =
        await axiosInstance.post('/auth/registration', body);
      return response.data;
    } catch (error) {
      throw new Error('error error');
    }
  };

  static authrozation = async (
    body: UserWithoutName,
  ): Promise<{ message: 'success'; accessToken: string; user: User }> => {
    try {
      const response: AxiosResponse<{ message: 'success'; accessToken: string; user: User }> =
        await axiosInstance.post('/auth/authorization', body);
      return response.data;
    } catch (error) {
      throw new Error('pa pa pa');
    }
  };

  static logout = async (): Promise<{ message: 'success' }> => {
    try {
      const response: AxiosResponse<{ message: 'success' }> = await axiosInstance.get('/auth/logout');
      return response.data;
    } catch (error) {
      throw new Error('lalala');
    }
  };
}

export default AuthApi;
