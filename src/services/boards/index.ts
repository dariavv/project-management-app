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

interface UpdateBoardResponse {
  response: Board;
}

interface DeleteBoardResponse {
  response: string;
}

export type CreateBoardParams = Omit<Board, 'id'>;

const getAllBoards = async () => {
  const response = await axios.get<BoardsResponse>(`${API_URL}boards`, { headers: authHeader() });
  return response.data;
};

const createBoard = async ({ title, description }: CreateBoardParams) => {
  const response = await axios.post<CreateBoardResponse>(
    `${API_URL}boards`,
    { title, description },
    {
      headers: authHeader(),
    },
  );
  return response.data;
};

const updateBoard = async ({ id, title, description }: Board) => {
  const response = await axios.put<UpdateBoardResponse>(
    `${API_URL}boards/${id}`,
    { title, description },
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
