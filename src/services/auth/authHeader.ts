import { getFromStorage } from 'utils/localStorage';

export const authHeader = () => {
  const tokenFromStorage = getFromStorage('token');
  const token = tokenFromStorage && JSON.parse(tokenFromStorage);

  if (token) {
    return { Authorization: 'Bearer ' + token };
  }
};
