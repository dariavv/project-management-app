import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from 'axios';
import { UpdateUserParams, usersService } from 'services/users';
import { User } from 'types';
import { openNotificationError, openNotificationSuccess } from 'utils/notifications';

interface UsersState {
  user: User | null;
  users: User[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UsersState = {
  user: null,
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

export const getUser = createAsyncThunk('users/getUser', async (userId: User['id'], thunkAPI) => {
  try {
    const response = await usersService.getUser(userId);
    return response;
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      const message = (error.response && error.response.data) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, name, login, password }: UpdateUserParams, thunkAPI) => {
    try {
      const response = await usersService.updateUser({ id, name, login, password });
      return response;
    } catch (error) {
      if (request.isAxiosError(error) && error.response) {
        const message =
          (error.response && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  },
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId: User['id'], thunkAPI) => {
    try {
      const response = await usersService.deleteUser(userId);
      return response;
    } catch (error) {
      if (request.isAxiosError(error) && error.response) {
        const message =
          (error.response && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [getUser.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [getUser.fulfilled.toString()]: (state, action) => {
      state.user = action.payload;
      state.status = 'idle';
    },
    [getUser.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
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
    [updateUser.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [updateUser.fulfilled.toString()]: (state, action) => {
      state.user = action.payload;
      const id = action.payload.id;
      state.users = state.users.map((user) => {
        if (user.id === id) return action.payload;
        return user;
      });
      openNotificationSuccess({ message: 'Success', description: 'User successfully updated' });
      state.status = 'idle';
    },
    [updateUser.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
    [deleteUser.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [deleteUser.fulfilled.toString()]: (state, action) => {
      state.user = action.payload;
      const id = action.payload.id;
      state.users = state.users.filter((user) => user.id !== id);
      openNotificationSuccess({ message: 'Success', description: 'User successfully deleted' });
      state.status = 'idle';
    },
    [deleteUser.rejected.toString()]: (state, action) => {
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
