import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import mainEN from './locales/en/main.json';
import mainRU from './locales/ru/main.json';

const resources = {
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
});

export default i18n;
