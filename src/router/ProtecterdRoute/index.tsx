import { useAppSelector } from 'hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { store } from 'store';
import axios from 'axios';
import { logOut } from 'store/reducers/authSlice';

export interface ProtectedRouteProps {
  redirectPath?: string;
  children: JSX.Element;
}

export const ProtectedRoute = ({ redirectPath = '/welcome', children }: ProtectedRouteProps) => {
  const { token } = useAppSelector((state) => state.auth);

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response.status === 401 ||
      (error.response.status === 404 &&
        !error.response.data.message.toLowerCase().includes('board'))
    ) {
      store.dispatch(logOut());
    }
    return Promise.reject(error);
  },
);
