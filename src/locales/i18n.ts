import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import mainEN from './en/main.json';
import mainRU from './ru/main.json';

export const resources = {
  en: {
    main: mainEN,
  },
  ru: {
    main: mainRU,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  debug: false,
});

export default i18n;
