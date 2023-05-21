import { Quiz } from 'store/addQuizSlice/addQuizSlice.types';

export const getUserQuizScore = (answers: string[], quizzes: Quiz[]) =>
  answers.reduce((acc, answer, index) => {
    if (answer === quizzes[index].correctAnswer) {
      return acc + 1;
    }
    return acc;
  }, 0);
