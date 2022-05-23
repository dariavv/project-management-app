import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import i18n from 'locales/i18n';
import { Row, Select } from 'antd';
import { Button, Logo } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useTranslations } from 'hooks/useTranslations';
import { logOut } from 'store/reducers/authSlice';
import { EN, RU } from 'constants/languages';
import { getFromStorage, setToStorage } from 'utils/localStorage';
import { CreateEditBoardForm } from 'modules/Main/CreateEditBoardForm';
import { LogoutOutlined, PlusCircleOutlined } from '@ant-design/icons';
import * as Styled from './styled';
import { ContentImgButton, ContentTextButton } from './styled';

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

  const ThemeLog = {
    media: {
      phone: '(max-width: 580px)',
    },
  };

  return (
    <>
      <Styled.Header isAnimated={isAnimated}>
        <Row>
          <Logo />
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
            <Button type="primary" p="3px 15px" onClick={() => setIsOpen(true)}>
              <ContentTextButton theme={ThemeLog}>{t('create_new_board')}</ContentTextButton>
              <ContentImgButton theme={ThemeLog}>
                <PlusCircleOutlined />
              </ContentImgButton>
            </Button>
          )}
          {token && (
            <Button type="primary" p="3px 15px" onClick={handleLogOut}>
              <ContentTextButton theme={ThemeLog}>{t('log_out')}</ContentTextButton>
              <ContentImgButton theme={ThemeLog}>
                <LogoutOutlined />
              </ContentImgButton>
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
      <CreateEditBoardForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
