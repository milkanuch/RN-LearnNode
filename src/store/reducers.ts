import { combineReducers } from '@reduxjs/toolkit';

import { courseApi } from 'services/courses/index';
import { userApi } from 'services/user/index';

import { userReducer } from './userSlice/userSlice';
import { userTokensReducer } from './userTokensSlice/userTokensSlice';

export const rootReducer = combineReducers({
  userTokens: userTokensReducer,
  user: userReducer,
  userApi: userApi.reducer,
  courseApi: courseApi.reducer,
});
