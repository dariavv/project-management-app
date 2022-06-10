import { useTranslation } from 'react-i18next';
import { resources } from 'locales/i18n';

type Translations = keyof typeof resources['en'];

export const useTranslations = (translation: Translations) => {
  const { t } = useTranslation(translation);
  return { t };
};
