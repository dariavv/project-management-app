import { FC } from 'react';
import { AppStore } from 'store';
import { AppRouter } from 'router/AppRouter';

export const App: FC = () => {
  return (
    <AppStore>
      <AppRouter />
    </AppStore>
  );
};
