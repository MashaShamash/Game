import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import QuestionApi from './api/questionApi';
import type { Question } from './types/questionsTypes';

type StateQuestions = {
  questions: Question[] | undefined;
};

const initialState: StateQuestions = {
  questions: undefined,
};
export const getQuestionsThunk = createAsyncThunk('load/questions', () =>
  QuestionApi.getAllQuestions(),
);
const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuestionsThunk.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});

export default questionsSlice;
