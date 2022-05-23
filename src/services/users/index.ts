import axios from 'axios';
import { API_URL } from 'constants/index';
import { User } from 'types';
import { authHeader } from 'services/auth/authHeader';

export interface UserResponse {
  response: User;
}

export interface UsersResponse {
  response: User[];
}
export interface UpdateUserParams {
  id: string;
  name: string;
  login: string;
  password: string;
}
export interface DeleteUserResponse {
  response: string;
}

const getAllUsers = async () => {
  const response = await axios.get<UsersResponse>(`${API_URL}users`, {
    headers: authHeader(),
  });
  return response.data;
};

const getUser = async (userId: User['id']) => {
  const response = await axios.get<UserResponse>(`${API_URL}users/${userId}`, {
    headers: authHeader(),
  });
  return response.data;
};

const updateUser = async ({ id, name, login, password }: UpdateUserParams) => {
  const response = await axios.put<UpdateUserParams>(
    `${API_URL}users/${id}`,
    { name, login, password },
    {
      headers: authHeader(),
    },
  );
  return response.data;
};

const deleteUser = async (userId: User['id']) => {
  const response = await axios.delete<DeleteUserResponse>(`${API_URL}users/${userId}`, {
    headers: authHeader(),
  });
  return { data: response.data, userId };
};

export const usersService = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
