export enum ResultEndpoints {
  SetQuizResult = 'users/set-quiz-result',
  GetAllQuizResults = 'users/get-all-quiz-results',
}

export type QuizResult = {
  id: string;
  userScore: number;
  quizLength: number;
};

export type AllQuizResult = {
  courseName: string;
  userScore: number;
  quizLength: number;
};

export type getAllQuizResultsResponse = AllQuizResult[];

export type SetQuizResultRequest = QuizResult;
