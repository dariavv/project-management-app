import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from 'axios';
import { boardsService } from 'services/boards';
import { Board } from 'types';
import { openNotificationError, openNotificationSuccess } from 'utils/notifications';

interface BoardsState {
  boards: Board[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BoardsState = {
  boards: [],
  status: 'idle',
};

export const getAllBoards = createAsyncThunk('boards/getAllBoards', async (_, thunkAPI) => {
  try {
    const response = await boardsService.getAllBoards();
    return response;
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      const message = (error.response && error.response.data) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (id: Board['id'], thunkAPI) => {
    try {
      const response = await boardsService.deleteBoard(id);
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

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllBoards.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [getAllBoards.fulfilled.toString()]: (state, action) => {
      state.boards = action.payload;
      state.status = 'idle';
    },
    [getAllBoards.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
    [deleteBoard.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [deleteBoard.fulfilled.toString()]: (state, action) => {
      const id = action.payload.id;
      state.boards = state.boards.filter((board) => board.id !== id);
      openNotificationSuccess({ message: 'Success', description: 'Board successfully deleted' });
      state.status = 'idle';
    },
    [deleteBoard.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
  },
});

const { reducer } = boardsSlice;

export const boardsReducer = reducer;
