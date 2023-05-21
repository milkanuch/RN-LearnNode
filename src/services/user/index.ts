import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

import type { RootState } from 'store/index';

import {
  GetCurrentUserResponse,
  UpdateCurrentUserRequest,
  UserEndpoints,
} from './user.types';

const reducerPath = 'userApi';

export const userApi = createApi({
  reducerPath,
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.userTokens.accessToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
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
    updateCurrentUser: builder.mutation<void, UpdateCurrentUserRequest>({
      query: body => ({
        url: UserEndpoints.UpdateCurrentUser,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useLazyGetCurrentUserQuery,
  useGetCurrentUserQuery,
  useUpdateCurrentUserMutation,
} = userApi;
