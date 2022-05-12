import axios from 'axios';
import { SignUpParams, SignInParams } from 'store/reducers/authSlice';
import { API_URL } from 'constants/index';
import { removeFromStorage, setToStorage } from 'utils/localStorage';

interface SignUpResponse {
  response: string;
}

interface SignInResponse {
  response: string;
  token?: string;
}

// response -  user data
const signUp = (data: SignUpParams) => {
  return axios.post<SignUpResponse>(`${API_URL}signup`, data).then((response) => {
    return response.data;
  });
};

// response -  token
const signIn = (data: SignInParams) => {
  return axios.post<SignInResponse>(`${API_URL}signin`, data).then((response) => {
    if (response.data.token) {
      setToStorage('token', JSON.stringify(response.data.token));
    }
    return response.data;
  });
};

const logOut = () => {
  removeFromStorage('token');
};

export const authService = {
  signUp,
  signIn,
  logOut,
};
