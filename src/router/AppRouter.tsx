import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from 'modules/NotFound';

const Main = React.lazy(() => import('modules/Main'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={'Loader...'}>
            <Main />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};