import axios from 'axios';
import { SignUpParams, SignInParams } from 'store/reducers/authSlice';
import { removeFromStorage, setToStorage } from 'utils/localStorage';
import { API_URL } from 'constants/index';

interface SignUpResponse {
  response: string;
}

interface SignInResponse {
  response: string;
  token?: string;
}

const signUp = async (data: SignUpParams) => {
  const response = await axios.post<SignUpResponse>(`${API_URL}signup`, data);
  return response.data; // user data
};

const signIn = async (data: SignInParams) => {
  const response = await axios.post<SignInResponse>(`${API_URL}signin`, data);
  if (response.data.token) {
    setToStorage('token', JSON.stringify(response.data.token));
  }
  return response.data; // token
};

const logOut = () => {
  removeFromStorage('token');
};

export const authService = {
  signUp,
  signIn,
  logOut,
};
