import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from 'axios';
import { usersService } from 'services';
import { User } from 'types';
import { openNotificationError } from 'utils/notifications';

interface UsersState {
  users: User[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
};

export const getAllUsers = createAsyncThunk('users/getAllUsers', async (_, thunkAPI) => {
  try {
    const response = await usersService.getAllUsers();
    return response;
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      const message = (error.response && error.response.data) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [getAllUsers.fulfilled.toString()]: (state, action) => {
      state.users = action.payload;
      state.status = 'idle';
    },
    [getAllUsers.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
  },
});

const { reducer } = usersSlice;

export const usersReducer = reducer;
