import { combineReducers } from '@reduxjs/toolkit';

import { authApi } from 'services/auth/index';
import { courseApi } from 'services/courses/index';
import { userApi } from 'services/user';

import { addQuizReducer } from './addQuizSlice/addQuizSlice';
import { userReducer } from './userSlice/userSlice';
import { userTokensReducer } from './userTokensSlice/userTokensSlice';

export const rootReducer = combineReducers({
  userTokens: userTokensReducer,
  user: userReducer,
  addQuiz: addQuizReducer,
  authApi: authApi.reducer,
  courseApi: courseApi.reducer,
  userApi: userApi.reducer,
});
