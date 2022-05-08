import { useAppSelector } from 'hooks';
import { Navigate, Outlet } from 'react-router-dom';

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
