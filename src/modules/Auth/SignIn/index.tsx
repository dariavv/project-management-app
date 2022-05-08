import { FC } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { Button } from 'components';
import { useAppSelector } from 'hooks';

type SignInProps = {
  handleSignIn: () => void;
};

const SignIn: FC<SignInProps> = ({ handleSignIn }) => {
  const { token } = useAppSelector((state) => state.auth);
  const { t } = useTranslations('main');

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h2>{t('sign_in')}</h2>
      <Link to="/signup">{t('sign_in_account')}</Link>
      <Button type="primary" onClick={handleSignIn}>
        {t('sign_in')}
      </Button>
    </div>
  );
};

export default SignIn;
