import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Footer } from 'components';
import { useAppSelector } from 'hooks';
import * as Styled from './styled';

const Welcome: FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { t } = useTranslations('main');
  const navigate = useNavigate();

  return (
    <>
      <Styled.Container>
        <Styled.ButtonsContainer>
          <Button type="primary" m="0 20px 0 0" onClick={() => navigate('/signin')}>
            {t('sign_in')}
          </Button>
          <Button type="primary" onClick={() => navigate('/signup')}>
            {t('sign_up')}
          </Button>
        </Styled.ButtonsContainer>
        <Styled.Info>
          <Styled.Title>Welcome!</Styled.Title>
          <Styled.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </Styled.Description>
          {token && <Link to="/">{t('go_to_main')}</Link>}
        </Styled.Info>
      </Styled.Container>
      <Footer />
    </>
  );
};

export default Welcome;
