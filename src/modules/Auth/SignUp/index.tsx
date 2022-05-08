import { FC } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { useAppSelector } from 'hooks';

const SignUp: FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { t } = useTranslations('main');

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h2>{t('sign_up')}</h2>
      <Link to="/signin">{t('sign_up_account')}</Link>
    </div>
  );
};

export default SignUp;
