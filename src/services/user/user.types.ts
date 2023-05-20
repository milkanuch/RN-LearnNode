export enum UserEndpoints {
  GetCurrentUser = '/user/',
}

export interface GetCurrentUserResponse {
  email: string;
  nickname: string;
}
