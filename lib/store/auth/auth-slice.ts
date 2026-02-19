import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import { AUTH_NAMESPACE } from '../constants';
import { type AuthInitialState } from '@/lib/types';

const initialState:AuthInitialState = {
  accessToken: '',
  refreshToken: '',
  user: {
    _id: '',
    avatar: {
      _id: '',
      url: ''
    },
    email: '',
    isEmailVerified: false,
    // role: ADMIN, TBD
    username: ''
  }
};

const authSlice = createSlice({
  name: AUTH_NAMESPACE,
  initialState,
  reducers: {
    saveAuthState: (_state, actionPayload: PayloadAction<AuthInitialState>)=>{
      return actionPayload.payload;
    },
    resetAuthState: ()=>{
      return initialState;
    }
  }
});

export const authReducers = authSlice.reducer;
export const {saveAuthState, resetAuthState} = authSlice.actions;
