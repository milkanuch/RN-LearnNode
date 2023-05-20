import { createSlice } from '@reduxjs/toolkit';

import { authApi } from 'services/auth';
import { RootState } from 'store/index';

import { UserTokensState } from './userTokensSlice.types';

const initialState: UserTokensState = {
  accessToken: '',
};

const userTokensSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteUserToken: (state: UserTokensState) => {
      state.accessToken = null;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
      },
    );
    builder.addMatcher(
      authApi.endpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
      },
    );
  },
});

export const { deleteUserToken } = userTokensSlice.actions;

export const selectAccessToken = (state: RootState) =>
  state.userTokens.accessToken;

export const userTokensReducer = userTokensSlice.reducer;
