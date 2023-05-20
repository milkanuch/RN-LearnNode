import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

import {
  AuthResponse,
  LoginRequestParams,
  RegisterRequestParams,
  AuthEndpoints,
} from './auth.types';

const reducerPath = 'authApi';

export const authApi = createApi({
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
        url: AuthEndpoints.Login,
        method: 'POST',
        body,
      }),
    }),
    signUp: builder.mutation<AuthResponse, RegisterRequestParams>({
      query: body => ({
        url: AuthEndpoints.Register,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
