import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

import { RootState } from 'store/index';

import {
  ResultEndpoints,
  SetQuizResultRequest,
  getAllQuizResultsResponse,
} from './result.types';

const reducerPath = 'resultApi';

export const resultApi = createApi({
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
    setQuizResult: builder.mutation<void, SetQuizResultRequest>({
      query: body => ({
        url: ResultEndpoints.SetQuizResult,
        method: 'PUT',
        body,
      }),
    }),
    getAllQuizResults: builder.query<getAllQuizResultsResponse, void>({
      query: () => ({
        url: ResultEndpoints.GetAllQuizResults,
        method: 'GET',
      }),
    }),
  }),
});

export const { useSetQuizResultMutation, useGetAllQuizResultsQuery } =
  resultApi;
