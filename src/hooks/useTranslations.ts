import { useTranslation } from 'react-i18next';
import { Translations } from 'types';

export const useTranslations = (translation: Translations) => {
  const { t } = useTranslation(translation);
  return { t };
};
