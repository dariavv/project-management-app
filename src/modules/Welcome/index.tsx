import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Footer, Logo } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { logOut } from 'store/reducers/authSlice';
import * as Styled from './styled';

const Welcome: FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { t } = useTranslations('main');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <>
      <Styled.Header>
        <Logo />
        {token && (
          <Styled.ButtonsContainer>
            <Button type="primary" onClick={() => navigate('/')}>
              {t('go_to_boards')}
            </Button>
            <Button type="primary" onClick={handleLogOut}>
              {t('log_out')}
            </Button>
          </Styled.ButtonsContainer>
        )}
        {!token && (
          <Styled.ButtonsContainer>
            <Button type="primary" onClick={() => navigate('/signin')}>
              {t('sign_in')}
            </Button>
            <Button type="primary" onClick={() => navigate('/signup')}>
              {t('sign_up')}
            </Button>
          </Styled.ButtonsContainer>
        )}
      </Styled.Header>
      <Styled.Container>
        <Styled.Info>
          <Styled.Title>Welcome!</Styled.Title>
          <Styled.Description>
            Привет! Мы Дарья, Глеб и Ольга - команда фронтенд разработчиков. В рамках курса
            «Разработка на React» от Rolling Scopes School представляем вам инструмент Liosta для
            управления проектами. Наша цель помочь достичь поставленных задач, как отдельному
            человеку в команде, так и группе разработчиков. С помощью приложения можно
            организовывать рабочие процессы и визуально отслеживать прогресс. Управляйте задачами
            легко и просто :)
          </Styled.Description>
        </Styled.Info>
      </Styled.Container>
      <Footer />
    </>
  );
};

export default Welcome;
