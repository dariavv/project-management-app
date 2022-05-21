import axios from 'axios';
import { API_URL } from 'constants/index';
import { Board, Column } from 'types';
import { authHeader } from 'services/auth/authHeader';

interface ColumnsResponse {
  response: Column[];
}

interface ColumnResponse {
  response: Column;
}

interface DeleteColumnResponse {
  response: string;
}

export type ColumnParams = {
  boardId: Board['id'];
  columnId: Column['id'];
};

export type CreateColumnParams = {
  boardId: Board['id'];
  title: Column['title'];
};

const getAllColumns = async (boardId: Board['id']) => {
  const response = await axios.get<ColumnsResponse>(`${API_URL}boards/${boardId}/columns`, {
    headers: authHeader(),
  });
  return response.data;
};

const getColumn = async ({ boardId, columnId }: ColumnParams) => {
  const response = await axios.get<ColumnResponse>(
    `${API_URL}boards/${boardId}/columns/${columnId}`,
    {
      headers: authHeader(),
    },
  );
  return response.data;
};

const createColumn = async ({ boardId, title }: CreateColumnParams) => {
  const response = await axios.post<ColumnResponse>(
    `${API_URL}boards/${boardId}/columns`,
    { title },
    {
      headers: authHeader(),
    },
  );

  return response.data;
};

const deleteColumn = async ({ boardId, columnId }: ColumnParams) => {
  const response = await axios.delete<DeleteColumnResponse>(
    `${API_URL}boards/${boardId}/columns/${columnId}`,
    {
      headers: authHeader(),
    },
  );
  return { data: response.data, columnId };
};

export const columnsService = {
  getAllColumns,
  getColumn,
  createColumn,
  deleteColumn,
};
