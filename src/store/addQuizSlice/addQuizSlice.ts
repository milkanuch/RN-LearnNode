import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AddQuizState, Quiz } from './addQuizSlice.types';

const initialState: AddQuizState = {
  quizzes: [],
};

export const addQuizSlice = createSlice({
  name: 'addQuiz',
  initialState,
  reducers: {
    addQuiz: (state: AddQuizState, action: PayloadAction<Quiz>) => {
      state.quizzes.push(action.payload);
    },
    addQuestion: (state: AddQuizState, action: PayloadAction<string>) => {
      state.quizzes.push({ question: action.payload, answers: [] });
    },
    addAnswer: (state: AddQuizState, action: PayloadAction<string>) => {
      state.quizzes[state.quizzes.length - 1].answers.push(action.payload);
    },
  },
});

export const { addQuiz, addQuestion, addAnswer } = addQuizSlice.actions;

export const selectQuizzes = (state: { addQuiz: AddQuizState }) =>
  state.addQuiz.quizzes;

export const addQuizReducer = addQuizSlice.reducer;
