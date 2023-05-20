import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

import type { RootState } from 'store/index';

import { GetCurrentUserResponse, UserEndpoints } from './user.types';

const reducerPath = 'userApi';

export const userApi = createApi({
  reducerPath,
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.userTokens.accessToken;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getCurrentUser: builder.query<GetCurrentUserResponse, void>({
      query: () => ({
        url: UserEndpoints.GetCurrentUser,
        method: 'GET',
      }),
    }),
  }),
});

export const { useLazyGetCurrentUserQuery } = userApi;
