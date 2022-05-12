import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from 'axios';
import { authService } from 'services/auth';
import { User } from 'types';

interface AuthState {
  token: string | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AuthState = {
  token: null,
  status: 'idle',
};
export interface SignUpParams extends Pick<User, 'name' | 'login'> {
  password: string;
}

export interface SignInParams extends Pick<User, 'login'> {
  password: string;
}

export const signUp = createAsyncThunk('auth/signup', async (data: SignUpParams, thunkAPI) => {
  try {
    const response = await authService.signUp(data);
    console.log('signUp response', response);
    return response;
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      console.log('Error signUp', error);
      const message = error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const signIn = createAsyncThunk('auth/signin', async (data: SignInParams, thunkAPI) => {
  try {
    const response = await authService.signIn(data);
    console.log('signIN response', response);
    return response;
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      console.log('Error signIN', error);
      const message = error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  await authService.logOut();
});

const authSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: {
    [signUp.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [signUp.fulfilled.toString()]: (state, action) => {
      // TODO: show success toast
      console.log('signUp.fulfilled', action.payload);
      state.status = 'idle';
    },
    [signUp.rejected.toString()]: (state) => {
      // TODO: show failed toast
      state.status = 'failed';
    },
    [signIn.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [signIn.fulfilled.toString()]: (state, action) => {
      if (action.payload.token) {
        // TODO: show success toast
        state.token = action.payload.token;
      }
      if (action.payload.error) {
        // TODO: show failed toast
      }
      state.status = 'idle';
    },
    [signIn.rejected.toString()]: (state) => {
      // TODO: show failed toast
      state.token = null;
      state.status = 'failed';
    },
    [logOut.fulfilled.toString()]: (state) => {
      state.token = null;
    },
  },
});

const { reducer, actions } = authSlice;

export const { setToken } = actions;
export const authReducer = reducer;
