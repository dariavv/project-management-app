import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from 'axios';
import { authService } from 'services';
import { User } from 'types';
import { openNotificationError, openNotificationSuccess } from 'utils/notifications';

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
    return response;
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      const message = (error.response && error.response.data) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const signIn = createAsyncThunk('auth/signin', async (data: SignInParams, thunkAPI) => {
  try {
    const response = await authService.signIn(data);
    return response;
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      const message = (error.response && error.response.data) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const logOut = createAsyncThunk('auth/logout', () => {
  authService.logOut();
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
    [signUp.fulfilled.toString()]: (state) => {
      state.status = 'idle';
      openNotificationSuccess({ message: 'Success' });
    },
    [signUp.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
    [signIn.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [signIn.fulfilled.toString()]: (state, action) => {
      state.token = action.payload.token;
      state.status = 'idle';
    },
    [signIn.rejected.toString()]: (state, action) => {
      state.token = null;
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
    [logOut.fulfilled.toString()]: (state) => {
      state.token = null;
    },
  },
});

const { reducer, actions } = authSlice;

export const { setToken } = actions;
export const authReducer = reducer;
