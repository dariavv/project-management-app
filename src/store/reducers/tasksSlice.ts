import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from 'axios';
import { Task } from 'types';
import { tasksService } from 'services';
import { CreateTaskParams, TaskParams, TasksParams, UpdateTaskParams } from 'services/tasks';
import { openNotificationError, openNotificationSuccess } from 'utils/notifications';

interface TasksState {
  tasks: Task[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TasksState = {
  tasks: [],
  status: 'idle',
};

export const getAllTasksByColumnId = createAsyncThunk(
  'tasks/getAllTasksByColumnId',
  async ({ boardId, columnId }: TasksParams, thunkAPI) => {
    try {
      const response = await tasksService.getAllTasksByColumnId({ boardId, columnId });
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

export const getTask = createAsyncThunk(
  'tasks/getTask',
  async ({ boardId, columnId, taskId }: TaskParams, thunkAPI) => {
    try {
      const response = await tasksService.getTask({ boardId, columnId, taskId });
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

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async ({ title, description, userId, boardId, columnId }: CreateTaskParams, thunkAPI) => {
    try {
      const response = await tasksService.createTask({
        title,
        description,
        userId,
        boardId,
        columnId,
      });
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

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (
    { title, order, description, userId, boardId, columnId, taskId }: UpdateTaskParams,
    thunkAPI,
  ) => {
    try {
      const response = await tasksService.updateTask({
        title,
        order,
        description,
        userId,
        boardId,
        columnId,
        taskId,
      });
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

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async ({ boardId, columnId, taskId }: TaskParams, thunkAPI) => {
    try {
      const response = await tasksService.deleteTask({ boardId, columnId, taskId });
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

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllTasksByColumnId.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [getAllTasksByColumnId.fulfilled.toString()]: (state, action) => {
      // need to filter to avoid duplication of tasks
      const filteredTasks = state.tasks.filter(
        (taskFromStore) =>
          !action.payload.find((taskFromBack: Task) => taskFromStore.id === taskFromBack.id),
      );
      state.tasks = [...filteredTasks, ...action.payload];
      state.status = 'idle';
    },
    [getAllTasksByColumnId.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
    [getTask.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [getTask.fulfilled.toString()]: (state) => {
      state.status = 'idle';
    },
    [getTask.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
    [createTask.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [createTask.fulfilled.toString()]: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
      openNotificationSuccess({ message: 'Success', description: 'Column successfully created' });
      state.status = 'idle';
    },
    [createTask.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
    [updateTask.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [updateTask.fulfilled.toString()]: (state, action) => {
      const id = action.payload.id;
      state.tasks = state.tasks.map((tasks) => {
        if (tasks.id === id) return action.payload;
        return tasks;
      });
      openNotificationSuccess({ message: 'Success', description: 'Board successfully updated' });
      state.status = 'idle';
    },
    [updateTask.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
    [deleteTask.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [deleteTask.fulfilled.toString()]: (state, action) => {
      const taskId = action.payload.taskId;
      state.tasks = state.tasks.filter((tasks) => tasks.id !== taskId);
      openNotificationSuccess({ message: 'Success', description: 'Column successfully deleted' });
      state.status = 'idle';
    },
    [deleteTask.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      openNotificationError({
        message: 'Error',
        description: action.payload.message,
      });
    },
  },
});

const { reducer } = tasksSlice;

export const tasksReducer = reducer;
