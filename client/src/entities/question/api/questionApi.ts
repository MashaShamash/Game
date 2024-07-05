import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import type { Question } from '../types/questionsTypes';

class QuestionApi {
  static getAllQuestions = async (): Promise<{ message: string; questions: Question[] }> => {
    const response: AxiosResponse<{ message: string; questions: Question[] }> =
      await axiosInstance.get('/questions');
    return response.data.questions;
  };
}

export default QuestionApi;
