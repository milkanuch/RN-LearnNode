import { Quiz } from 'store/addQuizSlice/addQuizSlice.types';

export enum UserEndpoints {
  GetCurrentUser = '/users/',
  UpdateCurrentUser = '/users/update-user',
}

export interface GetCurrentUserResponse {
  email: string;
  nickname: string;
  quizzes?: Quiz[];
}

export interface UpdateCurrentUserRequest {
  email: string;
  nickname: string;
}
