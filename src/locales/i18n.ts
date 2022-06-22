import { EN } from 'constants/languages';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getFromStorage } from 'utils/localStorage';
import mainEN from './en/main.json';
import mainRU from './ru/main.json';
import mainPL from './pl/main.json';
import authEN from './en/auth.json';
import authRU from './ru/auth.json';
import authPL from './pl/auth.json';
import boardEN from './en/board.json';
import boardRU from './ru/board.json';
import boardPL from './pl/board.json';
import confirmationModalEN from './en/confirmation-modal.json';
import confirmationModalRU from './ru/confirmation-modal.json';
import confirmationModalPL from './pl/confirmation-modal.json';
import notFoundEN from './en/not-found.json';
import notFoundRU from './ru/not-found.json';
import notFoundPL from './pl/not-found.json';
import validationsEN from './en/validations.json';
import validationsRU from './ru/validations.json';
import validationsPL from './pl/validations.json';
import welcomeEN from './en/welcome.json';
import welcomeRU from './ru/welcome.json';
import welcomePL from './pl/welcome.json';
import errorBoundaryEN from './en/error-boundary.json';
import errorBoundaryRU from './ru/error-boundary.json';
import errorBoundaryPL from './ru/error-boundary.json';

export const resources = {
  en: {
    main: mainEN,
    auth: authEN,
    board: boardEN,
    validations: validationsEN,
    welcome: welcomeEN,
    'confirmation-modal': confirmationModalEN,
    'not-found': notFoundEN,
    'error-boundary': errorBoundaryEN,
  },
  ru: {
    main: mainRU,
    auth: authRU,
    board: boardRU,
    validations: validationsRU,
    welcome: welcomeRU,
    'confirmation-modal': confirmationModalRU,
    'not-found': notFoundRU,
    'error-boundary': errorBoundaryRU,
  },
  pl: {
    main: mainPL,
    auth: authPL,
    board: boardPL,
    validations: validationsPL,
    welcome: welcomePL,
    'confirmation-modal': confirmationModalPL,
    'not-found': notFoundPL,
    'error-boundary': errorBoundaryPL,
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
