import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Loader } from 'components/Loader/styled';
import { AppRouter } from 'router/AppRouter';
import { setToken } from 'store/reducers/authSlice';
import { getFromStorage } from 'utils/localStorage';
import { getUser } from 'store/reducers/usersSlice';
import { DecodedToken } from 'types';
import jwt from 'jwt-decode';

// TODO: refactoring auth with HOC approach
export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token) {
      const tokenFromStorage = getFromStorage('token');
      if (tokenFromStorage) {
        dispatch(setToken(tokenFromStorage));
        const decodedToken = jwt(tokenFromStorage) as DecodedToken;
        const { userId } = decodedToken;
        dispatch(getUser(userId));
      }
    } else {
      const decodedToken = jwt(token) as DecodedToken;
      const { userId } = decodedToken;
      dispatch(getUser(userId));
    }
    setIsLoading(false);
  }, [dispatch, token]);

  if (isLoading) return <Loader />;

  return <AppRouter />;
};
