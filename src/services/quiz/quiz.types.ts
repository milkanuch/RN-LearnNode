import { Quiz } from 'store/addQuizSlice/addQuizSlice.types';

export enum QuizEndpoints {
  GetQuizById = '/courses/get-quiz',
  CreateQuiz = '/courses/create-quiz',
}

export type GetQuizByIdResponse = Quiz[];

export type CreateQuizRequest = {
  id: string;
  quizzes: Quiz[];
};

export interface CreateQuizResponse {
  message: string;
}
