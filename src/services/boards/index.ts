import axios from 'axios';
import { API_URL } from 'constants/index';
import { Board } from 'types';
import { authHeader } from 'services/auth/authHeader';

interface BoardsResponse {
  response: Board[];
}

interface CreateBoardResponse {
  response: Board;
}
interface DeleteBoardResponse {
  response: string;
}

export type UpdateBoardParams = Pick<Board, 'id' | 'title'>;

const getAllBoards = async () => {
  const response = await axios.get<BoardsResponse>(`${API_URL}boards`, { headers: authHeader() });
  return response.data;
};

const createBoard = async (title: Board['title']) => {
  const response = await axios.post<CreateBoardResponse>(
    `${API_URL}boards`,
    { title },
    {
      headers: authHeader(),
    },
  );
  return response.data;
};

const updateBoard = async ({ id, title }: UpdateBoardParams) => {
  const response = await axios.put<BoardsResponse>(
    `${API_URL}boards/${id}`,
    { title },
    {
      headers: authHeader(),
    },
  );
  return response.data;
};

const deleteBoard = async (id: Board['id']) => {
  const response = await axios.delete<DeleteBoardResponse>(`${API_URL}boards/${id}`, {
    headers: authHeader(),
  });
  return { data: response.data, id };
};

export const boardsService = {
  getAllBoards,
  createBoard,
  updateBoard,
  deleteBoard,
};
