import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from 'modules/NotFound';
import { Loader } from 'components';
import { ProtectedRoute } from './ProtecterdRoute';
import { Layout } from 'modules/Layout';
import Profile from 'modules/Profile';

const Main = React.lazy(() => import('modules/Main'));
const Welcome = React.lazy(() => import('modules/Welcome'));
const Board = React.lazy(() => import('modules/Board'));
const SignIn = React.lazy(() => import('modules/Auth/SignIn'));
const SignUp = React.lazy(() => import('modules/Auth/SignUp'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <Layout>
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
            <SignIn />
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
        path="/profile"
        element={
          <Suspense fallback={<Loader />}>
            <Profile />
          </Suspense>
        }
      />
      <Route
        path="/board/:id"
        element={
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <Layout>
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
