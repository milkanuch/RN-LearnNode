import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

import {
  AuthResponse,
  LoginRequestParams,
  RegisterRequestParams,
  UserEndpoints,
} from './user.types';

const reducerPath = 'userApi';

export const userApi = createApi({
  reducerPath,
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  endpoints: builder => ({
    signIn: builder.mutation<AuthResponse, LoginRequestParams>({
      query: body => ({
        url: UserEndpoints.Login,
        method: 'POST',
        body,
      }),
    }),
    signUp: builder.mutation<AuthResponse, RegisterRequestParams>({
      query: body => ({
        url: UserEndpoints.Register,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = userApi;
