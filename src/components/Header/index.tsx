import { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import i18n from 'locales/i18n';
import { Col, Row, Select } from 'antd';
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

  const handleChange = (value: string) => {
    setToStorage('language', value);
    i18n.changeLanguage(value);
  };

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <>
      <Styled.Header>
        <Row>
          <Styled.Logo>
            <Col span={12}>
              <img src={appLogo} alt="RSS" width={35} />
            </Col>
            <Col span={12}>LOGO</Col>
          </Styled.Logo>
        </Row>
        <Select defaultValue={language} style={{ width: 70 }} onChange={handleChange}>
          <Select.Option value={EN}>{EN.toUpperCase()}</Select.Option>
          <Select.Option value={RU}>{RU.toUpperCase()}</Select.Option>
        </Select>
        {!token && (
          <Styled.ButtonsContainer>
            <Button type="primary" m="0 10px 0 0" onClick={() => navigate('/signin')}>
              {t('sign_in')}
            </Button>
            <Button type="primary" m="0 20px 0 0" onClick={() => navigate('/signup')}>
              {t('sign_up')}
            </Button>
          </Styled.ButtonsContainer>
        )}
        {token && (
          <Styled.ButtonsContainer>
            <Button type="primary" m="10px" bgc="red" onClick={() => setIsOpen(true)}>
              {t('create_new_board')}
            </Button>
            <Button type="primary" onClick={handleLogOut}>
              {t('log_out')}
            </Button>
          </Styled.ButtonsContainer>
        )}
      </Styled.Header>
      <CreateBoardForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
