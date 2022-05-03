import React, { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../../modules/NotFound';
import { AppStore } from '../../store';

const Main = React.lazy(() => import('../../modules/Main'));

export const App: FC = () => {
  return (
    <AppStore>
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
    </AppStore>
  );
};
