import React, { Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NotFound } from 'modules/NotFound';
import { Loader } from 'components';
import { useAppDispatch } from 'hooks';
import { setToken } from 'store/reducers/authSlice';
import { ProtectedRoute } from './ProtecterdRoute';
import { removeFromStorage, setToStorage } from 'utils/localStorage';
import { Layout } from 'modules/Layout';

const Main = React.lazy(() => import('modules/Main'));
const Welcome = React.lazy(() => import('modules/Welcome'));
const Board = React.lazy(() => import('modules/Board'));
const SignIn = React.lazy(() => import('modules/Auth/SignIn'));
const SignUp = React.lazy(() => import('modules/Auth/SignUp'));

// TODO: remove fakeAuth after implementation of authentication
const fakeAuth = (): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1666d131rf12'), 1000);
  });

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const token = await fakeAuth();
    setToStorage('token', token);
    dispatch(setToken(token));
    if (token) navigate('/');
  };

  const handleLogOut = () => {
    removeFromStorage('token');
    dispatch(setToken(null));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <Layout handleLogOut={handleLogOut}>
                <Main />
              </Layout>
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/welcome"
        element={
          <Suspense fallback={<Loader />}>
            <Welcome />
          </Suspense>
        }
      />
      <Route
        path="/signin"
        element={
          <Suspense fallback={<Loader />}>
            <SignIn handleSignIn={handleSignIn} />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<Loader />}>
            <SignUp />
          </Suspense>
        }
      />
      <Route
        path="/board/:id"
        element={
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <Layout handleLogOut={handleLogOut}>
                <Board />
              </Layout>
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
