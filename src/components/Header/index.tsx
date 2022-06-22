import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import i18n from 'locales/i18n';
import { Row, Select } from 'antd';
import { Button, Logo } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useTranslations } from 'hooks/useTranslations';
import { useModal } from 'hooks/useModal';
import { logOut } from 'store/reducers/authSlice';
import { EN, RU, PL } from 'constants/languages';
import { getFromStorage, setToStorage } from 'utils/localStorage';
import { CreateEditBoardForm } from 'modules/Main/CreateEditBoardForm';
import { LogoutOutlined, PlusCircleOutlined, UserOutlined } from '@ant-design/icons';
import { ContentImgButton, ContentTextButton } from './styled';
import { ThemeMedia } from 'theme';
import * as Styled from './styled';

export const Header: FC = () => {
  const { t } = useTranslations('auth');
  const { isOpen, onOpen, onClose } = useModal();
  const [isAnimated, setIsAnimated] = useState(false);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const language = getFromStorage('language') || EN;

  const listenScrollEvent = () => {
    if (window.scrollY <= 50) {
      setIsAnimated(false);
    } else if (window.scrollY >= 50) {
      setIsAnimated(true);
    }
  };

  const handleChangeSelect = (value: string) => {
    setToStorage('language', value);
    i18n.changeLanguage(value);
  };

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  const handleCreateBoard = () => {
    navigate('/');
    onOpen();
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <>
      <Styled.Header theme={ThemeMedia} isAnimated={isAnimated}>
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
            <>
              <Button type="primary" p="3px 10px" onClick={handleCreateBoard}>
                <ContentTextButton theme={ThemeMedia}>{t('create_new_board')}</ContentTextButton>
                <ContentImgButton theme={ThemeMedia}>
                  <PlusCircleOutlined />
                </ContentImgButton>
              </Button>
              <Button type="primary" p="3px 10px" onClick={() => navigate('/profile')}>
                <ContentTextButton theme={ThemeMedia}>{t('edit_profile')}</ContentTextButton>
                <ContentImgButton theme={ThemeMedia}>
                  <UserOutlined />
                </ContentImgButton>
              </Button>
              <Button type="primary" p="3px 10px" onClick={handleLogOut}>
                <ContentTextButton theme={ThemeMedia}>{t('log_out')}</ContentTextButton>
                <ContentImgButton theme={ThemeMedia}>
                  <LogoutOutlined />
                </ContentImgButton>
              </Button>
            </>
          )}
          <Select
            defaultValue={language}
            style={{ width: 62, margin: '0 0 0 8px' }}
            onChange={handleChangeSelect}
          >
            <Select.Option value={EN}>{EN.toUpperCase()}</Select.Option>
            <Select.Option value={RU}>{RU.toUpperCase()}</Select.Option>
            <Select.Option value={PL}>{PL.toUpperCase()}</Select.Option>
          </Select>
        </Styled.ButtonsContainer>
      </Styled.Header>
      <CreateEditBoardForm isOpen={isOpen} onClose={onClose} />
    </>
  );
};
