import { FC } from 'react';
import { useTranslations } from 'hooks/useTranslations';

const SignUp: FC = () => {
  const { t } = useTranslations('main');
  return (
    <div>
      <h2>{t('sign_up')}</h2>
    </div>
  );
};

export default SignUp;
