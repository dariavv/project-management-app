import { FC } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';

const Welcome: FC = () => {
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
    </div>
  );
};

export default Welcome;
