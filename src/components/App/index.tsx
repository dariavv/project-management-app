import { FC } from 'react';
import { AppStore } from 'store';
import { AppRouter } from 'router/AppRouter';
import { Layout } from 'modules/Layout';
import { GlobalStyle } from 'theme/global';

export const App: FC = () => {
  return (
    <AppStore>
      <GlobalStyle />
      <Layout>
        <AppRouter />
      </Layout>
    </AppStore>
  );
};
