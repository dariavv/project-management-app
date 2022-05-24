import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App, ErrorBoundary } from 'components';
import { AppStore } from 'store';
import 'theme/normalize.css';
import 'theme/common.css';
import 'locales/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ErrorBoundary>
    <React.StrictMode>
      <BrowserRouter>
        <AppStore>
          <App />
        </AppStore>
      </BrowserRouter>
    </React.StrictMode>
  </ErrorBoundary>,
);
