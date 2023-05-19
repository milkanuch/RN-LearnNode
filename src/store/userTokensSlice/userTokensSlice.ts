import { createSlice } from '@reduxjs/toolkit';

import { userApi } from 'services/user';
import { RootState } from 'store/index';

import { UserTokensState } from './userTokensSlice.types';

const initialState: UserTokensState = {
  accessToken: '',
};

const userTokensSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
      },
    );
    builder.addMatcher(
      userApi.endpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
      },
    );
  },
});

export const selectAccessToken = (state: RootState) =>
  state.userTokens.accessToken;

export const userTokensReducer = userTokensSlice.reducer;
