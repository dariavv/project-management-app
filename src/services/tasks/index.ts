import axios from 'axios';
import { API_URL } from 'constants/index';
import { Board, Column, Task } from 'types';
import { authHeader } from 'services/auth/authHeader';

interface TasksResponse {
  response: Task[];
}

interface TaskResponse {
  response: Task;
}

interface DeleteTaskResponse {
  response: string;
}

export interface TasksParams {
  boardId: Board['id'];
  columnId: Column['id'];
}

export interface TaskParams extends TasksParams {
  taskId: Task['id'];
}

export type CreateTaskParams = Omit<Task, 'id' | 'order'>;

export interface UpdateTaskParams extends Omit<Task, 'id'> {
  taskId: Task['id'];
  isDnd?: boolean;
  updatedColumnId?: Column['id'];
}

const getAllTasksByColumnId = async ({ boardId, columnId }: TasksParams) => {
  const response = await axios.get<TasksResponse>(
    `${API_URL}boards/${boardId}/columns/${columnId}/tasks`,
    {
      headers: authHeader(),
    },
  );
  return response.data;
};

const getTask = async ({ boardId, columnId, taskId }: TaskParams) => {
  const response = await axios.get<TaskResponse>(
    `${API_URL}boards/${boardId}/columns/${columnId}/tasks${taskId}`,
    {
      headers: authHeader(),
    },
  );
  return response.data;
};

const createTask = async ({ title, description, userId, boardId, columnId }: CreateTaskParams) => {
  const response = await axios.post<Task>(
    `${API_URL}boards/${boardId}/columns/${columnId}/tasks`,
    { title, description, userId },
    {
      headers: authHeader(),
    },
  );
  return response.data;
};

const updateTask = async ({
  title,
  order,
  description,
  userId,
  boardId,
  columnId,
  taskId,
  updatedColumnId,
}: UpdateTaskParams) => {
  if (updatedColumnId) {
    const response = await axios.put<Task>(
      `${API_URL}boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      { title, order, description, userId, boardId, columnId: updatedColumnId },
      {
        headers: authHeader(),
      },
    );
    return response.data;
  }
  if (!updatedColumnId) {
    const response = await axios.put<Task>(
      `${API_URL}boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      { title, order, description, userId, boardId, columnId },
      {
        headers: authHeader(),
      },
    );
    return response.data;
  }
};

const deleteTask = async ({ boardId, columnId, taskId }: TaskParams) => {
  const response = await axios.delete<DeleteTaskResponse>(
    `${API_URL}boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
    {
      headers: authHeader(),
    },
  );
  return { data: response.data, taskId };
};

export const tasksService = {
  getAllTasksByColumnId,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
