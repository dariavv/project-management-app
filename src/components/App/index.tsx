import { FC } from 'react';
import { AppStore } from 'store';
import { AppRouter } from 'router/AppRouter';
import { Layout } from 'modules/Layout';

export const App: FC = () => {
  return (
    <AppStore>
      <Layout>
        <AppRouter />
      </Layout>
    </AppStore>
  );
};
