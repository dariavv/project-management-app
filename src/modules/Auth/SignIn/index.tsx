import { FC } from 'react';
import { useTranslations } from 'hooks/useTranslations';

const SignIn: FC = () => {
  const { t } = useTranslations('main');
  return (
    <div>
      <h2>{t('sign_in')}</h2>
    </div>
  );
};

export default SignIn;
