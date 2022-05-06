import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from 'modules/NotFound';
import { Spin } from 'antd';

const Main = React.lazy(() => import('modules/Main'));
const Welcome = React.lazy(() => import('modules/Welcome'));
const Board = React.lazy(() => import('modules/Board'));
const SignIn = React.lazy(() => import('modules/Auth/SignIn'));
const SignUp = React.lazy(() => import('modules/Auth/SignUp'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/welcome"
        element={
          <Suspense fallback={<Spin size="large" />}>
            <Welcome />
          </Suspense>
        }
      />
      <Route
        path="/signin"
        element={
          <Suspense fallback={<Spin size="large" />}>
            <SignIn />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<Spin size="large" />}>
            <SignUp />
          </Suspense>
        }
      />
      <Route
        path="/"
        element={
          <Suspense fallback={<Spin size="large" />}>
            <Main />
          </Suspense>
        }
      />
      <Route
        path="/board/:id"
        element={
          <Suspense fallback={<Spin size="large" />}>
            <Board />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
