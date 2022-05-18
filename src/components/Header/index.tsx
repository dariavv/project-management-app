import { FC, useCallback, useEffect, useState } from 'react';
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
import { motion, useTransform } from 'framer-motion';
import * as Styled from './styled';
import { TheHeader } from './styled';
import { SHADOW } from 'constants/colors';

type TheHeader = {
  offsetY: number[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollY: any;
};

export const Header: FC<TheHeader> = ({ offsetY, scrollY }) => {
  const heightSize = [75, 65];
  const height = useTransform(scrollY, offsetY, heightSize);
  const { t } = useTranslations('main');
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const language = getFromStorage('language') || EN;

  // const [headerClass, setHeader] = useState('header__main');

  // const listenScrollEvent = () => {
  //   if (window.scrollY <= 1) {
  //     setHeader('header__main');
  //   } else if (window.scrollY >= 1) {
  //     setHeader('header__slide__down');
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', listenScrollEvent);
  //   return () => {
  //     window.removeEventListener('scroll', listenScrollEvent);
  //   };
  // }, []); className={headerClass}

  const handleChange = (value: string) => {
    setToStorage('language', value);
    i18n.changeLanguage(value);
  };

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <motion.div
      style={{
        height,
        backgroundColor: 'white',
        boxShadow: `0 0px 10px ${SHADOW}`,
        zIndex: '99',
        top: '0',
        position: 'sticky',
      }}
    >
      <TheHeader>
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
      </TheHeader>
      <CreateBoardForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </motion.div>
  );
};
