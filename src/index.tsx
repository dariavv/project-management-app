import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components';
import { AppStore } from 'store';
import 'theme/normalize.css';
import 'theme/common.css';
import 'locales/i18n';
import SignInForm from 'components/Forms/SignInForm';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppStore>
        <SignInForm />
        <App />
      </AppStore>
    </BrowserRouter>
  </React.StrictMode>,
);
