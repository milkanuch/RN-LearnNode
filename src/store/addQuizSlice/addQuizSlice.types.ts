export interface Quiz {
  question: string;
  answers: string[];
  correctAnswer: string;
}

export interface AddQuizState {
  quizzes: Quiz[];
}
