import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from 'store/index';

import { UserState } from './userSlice.types';

const initialState: UserState = {
  email: '',
  nickname: '',
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsUserLogged: (state: UserState, payload: PayloadAction<boolean>) => {
      state.isLogged = payload.payload;
    },
  },
});

export const { setIsUserLogged } = userSlice.actions;

export const selectUserEmail = (state: RootState) => state.user.email;
export const selectUserNickname = (state: RootState) => state.user.nickname;
export const selectIsUserLogged = (state: RootState) => state.user.isLogged;

export const userReducer = userSlice.reducer;
