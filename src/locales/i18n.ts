import { EN } from 'constants/languages';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getFromStorage } from 'utils/localStorage';

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

const language = getFromStorage('language') || EN;

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  debug: false,
});

export default i18n;
