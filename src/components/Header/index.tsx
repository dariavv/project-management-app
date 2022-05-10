import { FC, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import i18n from 'locales/i18n';
import { setLanguage } from 'store/reducers/exampleSlice';
import { useTranslations } from 'hooks/useTranslations';
import { EN, RU } from 'constants/languages';
import { Col, Row, Switch } from 'antd';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { ButtonsContainer } from './styled';
import appLogo from 'assets/images/logo_app.png';
import * as Styled from './styled';

type HeaderProps = {
  handleLogOut: () => void;
};

// TODO: save language to local storage, remove local state
export const Header: FC<HeaderProps> = ({ handleLogOut }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { language } = useAppSelector((state) => state.example);
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

  return (
    <Styled.Header>
      {' '}
      <Row>
        <Styled.Logo>
          <Col span={12}>
            {' '}
            <img src={appLogo} alt="RSS" width={35} />
          </Col>
          <Col span={12}>LOGO</Col>
        </Styled.Logo>
      </Row>
      <div>
        <Button type="primary" m="0 10px 0 0">
          {t('create')}
        </Button>
        <Switch
          id="language"
          checked={isChecked}
          checkedChildren={language}
          unCheckedChildren={language}
          onChange={handleChange}
        />
      </div>
      <ButtonsContainer>
        <div>
          <Button type="primary" m="0 10px 0 0" onClick={() => navigate('/signin')}>
            {t('sign_in')}
          </Button>
          <Button type="primary" m="0 20px 0 0" onClick={() => navigate('/signup')}>
            {t('sign_up')}
          </Button>
        </div>
        <div>
          <Button type="primary" onClick={handleLogOut}>
            {t('log_out')}
          </Button>
        </div>
      </ButtonsContainer>
    </Styled.Header>
  );
};
