import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

import { CourseEndpoints, CourseResponse } from './course.types';

const reducerPath = 'courseApi';

export const courseApi = createApi({
  reducerPath,
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  endpoints: builder => ({
    getCourses: builder.query<CourseResponse, void>({
      query: () => ({
        url: CourseEndpoints.GetCourses,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCoursesQuery } = courseApi;
