import { Loader } from 'components/Loader/styled';
import { useAppDispatch, useAppSelector } from 'hooks';
import { FC, useEffect, useState } from 'react';
import { AppRouter } from 'router/AppRouter';
import { setToken } from 'store/reducers/authSlice';
import { getFromStorage } from 'utils/localStorage';

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
      }
    }
    setIsLoading(false);
  }, [dispatch, token]);

  if (isLoading) return <Loader />;

  return <AppRouter />;
};
