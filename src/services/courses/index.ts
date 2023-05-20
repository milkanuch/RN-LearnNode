import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

import {
  AddCourseRequest,
  AddCourseResponse,
  CourseEndpoints,
  CourseResponse,
  GetCourseByIdRequest,
  GetCourseByIdResponse,
} from './course.types';

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
    addCourse: builder.mutation<AddCourseResponse, AddCourseRequest>({
      query: body => ({
        url: CourseEndpoints.AddCourse,
        method: 'POST',
        body,
      }),
    }),
    getCourseById: builder.query<GetCourseByIdResponse, GetCourseByIdRequest>({
      query: id => ({
        url: `${CourseEndpoints.GetCourseById}/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useAddCourseMutation,
  useGetCourseByIdQuery,
} = courseApi;
