import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from 'axios';
import {
  ColumnParams,
  columnsService,
  CreateColumnParams,
  UpdateColumnParams,
} from 'services/columns';
import { Board, Column } from 'types';
import { openNotificationError, openNotificationSuccess } from 'utils/notifications';

interface ColumnsState {
  columns: Column[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ColumnsState = {
  columns: [],
  status: 'idle',
};

export const getAllColumns = createAsyncThunk(
  'columns/getAllColumns',
  async (boardId: Board['id'], thunkAPI) => {
    try {
      const response = await columnsService.getAllColumns(boardId);
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

export const getColumn = createAsyncThunk(
  'columns/getColumn',
  async ({ boardId, columnId }: ColumnParams, thunkAPI) => {
    try {
      const response = await columnsService.getColumn({ boardId, columnId });
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

export const createColumn = createAsyncThunk(
  'columns/createColumn',
  async ({ boardId, title }: CreateColumnParams, thunkAPI) => {
    try {
      const response = await columnsService.createColumn({ boardId, title });
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

export const updateColumn = createAsyncThunk(
  'columns/updateColumn',
  async ({ boardId, title, columnId, order, isDnd }: UpdateColumnParams, thunkAPI) => {
    try {
      const response = await columnsService.updateColumn({ boardId, title, columnId, order });
      return { response, isDnd };
    } catch (error) {
      if (request.isAxiosError(error) && error.response) {
        const message =
          (error.response && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  },
);

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async ({ boardId, columnId }: ColumnParams, thunkAPI) => {
    try {
      const response = await columnsService.deleteColumn({ boardId, columnId });
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

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    setUpdatedColumns: (state, action) => {
      state.columns = action.payload;
    },
  },
  extraReducers: {
    [getAllColumns.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [getAllColumns.fulfilled.toString()]: (state, action) => {
      state.columns = action.payload.sort((a: Column, b: Column) => a.order - b.order);
      state.status = 'idle';
    },
    [getAllColumns.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
    [getColumn.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [getColumn.fulfilled.toString()]: (state) => {
      state.status = 'idle';
    },
    [getColumn.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
    [createColumn.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [createColumn.fulfilled.toString()]: (state, action) => {
      state.columns = [...state.columns, action.payload];
      openNotificationSuccess({ message: 'Success', description: 'Column successfully created' });
      state.status = 'idle';
    },
    [createColumn.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
    [updateColumn.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [updateColumn.fulfilled.toString()]: (state, action) => {
      const id = action.payload.id;
      state.columns = state.columns.map((column) => {
        if (column.id === id) return action.payload;
        return column;
      });
      if (!action.payload.isDnd) {
        openNotificationSuccess({ message: 'Success', description: 'Column successfully updated' });
      }
      state.status = 'idle';
    },
    [updateColumn.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
    [deleteColumn.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [deleteColumn.fulfilled.toString()]: (state, action) => {
      const columnId = action.payload.columnId;
      state.columns = state.columns.filter((column) => column.id !== columnId);
      openNotificationSuccess({ message: 'Success', description: 'Column successfully deleted' });
      state.status = 'idle';
    },
    [deleteColumn.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
  },
});

const { reducer, actions } = columnsSlice;

export const { setUpdatedColumns } = actions;

export const columnsReducer = reducer;
