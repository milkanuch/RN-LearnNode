import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

import {
  GetQuizByIdResponse,
  QuizEndpoints,
  CreateQuizResponse,
  CreateQuizRequest,
} from './quiz.types';

const reducerPath = 'quizApi';

export const quizApi = createApi({
  reducerPath,
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
  }),
  endpoints: builder => ({
    getQuizById: builder.query<GetQuizByIdResponse, string>({
      query: id => ({
        url: `${QuizEndpoints.GetQuizById}/${id}`,
        method: 'GET',
      }),
    }),
    createQuiz: builder.mutation<CreateQuizResponse, CreateQuizRequest>({
      query: body => ({
        url: QuizEndpoints.CreateQuiz,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetQuizByIdQuery, useCreateQuizMutation } = quizApi;
