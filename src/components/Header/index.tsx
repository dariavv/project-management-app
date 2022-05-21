import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import i18n from 'locales/i18n';
import { Row, Select } from 'antd';
import { Button } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useTranslations } from 'hooks/useTranslations';
import { logOut } from 'store/reducers/authSlice';
import { EN, RU } from 'constants/languages';
import { getFromStorage, setToStorage } from 'utils/localStorage';
import { CreateBoardForm } from 'modules/Main/CreateBoardForm';
import appLogo from 'assets/images/logo_app.png';
import * as Styled from './styled';

export const Header: FC = () => {
  const { t } = useTranslations('main');
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const language = getFromStorage('language') || EN;

  const [isAnimated, setIsAnimated] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY <= 50) {
      setIsAnimated(false);
    } else if (window.scrollY >= 50) {
      setIsAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const handleChange = (value: string) => {
    setToStorage('language', value);
    i18n.changeLanguage(value);
  };

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <>
      <Styled.Header isAnimated={isAnimated}>
        <Row>
          <Styled.LogoContainer to={'/'}>
            <img src={appLogo} alt="logo" width={30} />
            <Styled.Logo>liosta</Styled.Logo>
          </Styled.LogoContainer>
        </Row>
        <Styled.ButtonsContainer>
          {!token && (
            <>
              <Button type="primary" onClick={() => navigate('/signin')}>
                {t('sign_in')}
              </Button>
              <Button type="primary" onClick={() => navigate('/signup')}>
                {t('sign_up')}
              </Button>
            </>
          )}
          {token && (
            <Button type="primary" onClick={() => setIsOpen(true)}>
              {t('create_new_board')}
            </Button>
          )}
          {token && (
            <Button type="primary" onClick={handleLogOut}>
              {t('log_out')}
            </Button>
          )}
          <Select
            defaultValue={language}
            style={{ width: 62, margin: '0 0 0 8px' }}
            onChange={handleChange}
          >
            <Select.Option value={EN}>{EN.toUpperCase()}</Select.Option>
            <Select.Option value={RU}>{RU.toUpperCase()}</Select.Option>
          </Select>
        </Styled.ButtonsContainer>
      </Styled.Header>
      <CreateBoardForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
