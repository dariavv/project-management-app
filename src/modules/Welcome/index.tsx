import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Footer } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import * as Styled from './styled';
import { logOut } from 'store/reducers/authSlice';

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
      <Styled.Container>
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
            <Button type="primary" m="0 20px 0 0" onClick={() => navigate('/signin')}>
              {t('sign_in')}
            </Button>
            <Button type="primary" onClick={() => navigate('/signup')}>
              {t('sign_up')}
            </Button>
          </Styled.ButtonsContainer>
        )}
        <Styled.Info>
          <Styled.Title>Welcome!</Styled.Title>
          <Styled.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </Styled.Description>
        </Styled.Info>
      </Styled.Container>
      <Footer />
    </>
  );
};

export default Welcome;
