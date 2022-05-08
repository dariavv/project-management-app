import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { Button } from 'components';
import { useAppSelector } from 'hooks';

const Welcome: FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { t } = useTranslations('main');
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome Page</h2>
      <Button type="primary" onClick={() => navigate('/signin')}>
        {t('sign_in')}
      </Button>
      <Button type="primary" onClick={() => navigate('/signup')}>
        {t('sign_up')}
      </Button>
      {token && <Link to="/">{t('go_to_main')}</Link>}
    </div>
  );
};

export default Welcome;
