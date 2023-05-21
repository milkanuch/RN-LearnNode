import { Quiz } from 'store/addQuizSlice/addQuizSlice.types';

export interface QuizResultScreenParams {
  id: string;
  answers: string[];
  quizzes: Quiz[];
}
