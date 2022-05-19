import axios from 'axios';
import { API_URL } from 'constants/index';
import { User } from 'types';
import { authHeader } from 'services/auth/authHeader';

interface UsersResponse {
  response: User[];
}

const getAllUsers = async () => {
  const response = await axios.get<UsersResponse>(`${API_URL}/users`, { headers: authHeader() });
  return response.data;
};

export const usersService = {
  getAllUsers,
};
