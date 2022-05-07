import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from 'modules/NotFound';
import { Loader } from 'components';

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
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Main />
          </Suspense>
        }
      />
      <Route
        path="/board/:id"
        element={
          <Suspense fallback={<Loader />}>
            <Board />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
