import { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import i18n from 'locales/i18n';
import { Col, Row, Switch } from 'antd';
import { Button } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useTranslations } from 'hooks/useTranslations';
import { setLanguage } from 'store/reducers/exampleSlice';
import { logOut } from 'store/reducers/authSlice';
import { EN, RU } from 'constants/languages';
import appLogo from 'assets/images/logo_app.png';
import * as Styled from './styled';

// TODO: save language to local storage, remove local state
export const Header: FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { language } = useAppSelector((state) => state.example);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { t } = useTranslations('main');
  const navigate = useNavigate();

  const handleChange = useCallback(() => {
    setIsChecked(!isChecked);
    if (isChecked) {
      dispatch(setLanguage(EN));
      i18n.changeLanguage(EN);
    } else {
      dispatch(setLanguage(RU));
      i18n.changeLanguage(RU);
    }
  }, [dispatch, isChecked]);

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <Styled.Header>
      <Row>
        <Styled.Logo>
          <Col span={12}>
            <img src={appLogo} alt="RSS" width={35} />
          </Col>
          <Col span={12}>LOGO</Col>
        </Styled.Logo>
      </Row>
      <div>
        <Button type="primary" m="0 10px 0 0">
          {t('create_new_board')}
        </Button>
        <Switch
          id="language"
          checked={isChecked}
          checkedChildren={language}
          unCheckedChildren={language}
          onChange={handleChange}
        />
      </div>
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
        <Button type="primary" onClick={handleLogOut}>
          {t('log_out')}
        </Button>
      )}
    </Styled.Header>
  );
};
