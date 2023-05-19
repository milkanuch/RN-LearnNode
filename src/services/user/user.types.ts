export enum UserEndpoints {
  Login = '/auth/login',
  Register = '/auth/register',
}

export interface LoginRequestParams {
  email: string;
  password: string;
}

export interface RegisterRequestParams {
  nickname: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
}
