import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';

export const NotFound: FC = () => {
  const { t } = useTranslations('main');

  return (
    <div>
      <h2>404</h2>
      <p>{t('not_found')}</p>
      <Link to="/">{t('go_to_main')}</Link>
    </div>
  );
};
