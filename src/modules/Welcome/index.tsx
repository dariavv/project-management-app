import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Footer, Logo } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { logOut } from 'store/reducers/authSlice';
import { GithubOutlined } from '@ant-design/icons';
import avaDaria from 'assets/images/4husky.png';
import avaGleb from 'assets/images/2panda.png';
import avaOlga from 'assets/images/1cat.png';
import welcomeImg from 'assets/images/welcome.svg';
import { ThemeMedia } from 'theme';
import * as Styled from './styled';

const Welcome: FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { t } = useTranslations('welcome');
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
            {/* <Button type="primary" onClick={() => navigate('/')}>
              {t('go_to_main')}
            </Button> */}
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
      <Styled.Container theme={ThemeMedia}>
        <Styled.Info theme={ThemeMedia}>
          <Styled.ContainerDescription>
            <Styled.Title>{t('about_title')}</Styled.Title>
            <Styled.Description theme={ThemeMedia}>{t('welcome_description')}</Styled.Description>
            <Button type="primary" onClick={() => navigate('/')}>
              {t('go_to_main')}
            </Button>
          </Styled.ContainerDescription>
          <Styled.ImgMain src={welcomeImg} theme={ThemeMedia}></Styled.ImgMain>
        </Styled.Info>
        <Styled.Teams>
          <Styled.Title>{t('our_team')}</Styled.Title>
          <Styled.TeamContainer>
            <Styled.AvatarContainer theme={ThemeMedia}>
              <Styled.ImgAv src={avaDaria} theme={ThemeMedia}></Styled.ImgAv>
              <Styled.NameItem>{t('name_one')}</Styled.NameItem>
              <Styled.LinkItem href="https://github.com/dariavv" target="_blank" rel="noreferrer">
                <Styled.ItemIcon>
                  <GithubOutlined />
                </Styled.ItemIcon>
                {t('team_role_1')}
              </Styled.LinkItem>
            </Styled.AvatarContainer>
            <Styled.AvatarContainer theme={ThemeMedia}>
              <Styled.ImgAv src={avaGleb} theme={ThemeMedia}></Styled.ImgAv>
              <Styled.NameItem>{t('name_two')}</Styled.NameItem>
              <Styled.LinkItem href="https://github.com/GBaykov" target="_blank" rel="noreferrer">
                <Styled.ItemIcon>
                  <GithubOutlined />
                </Styled.ItemIcon>
                {t('team_role_2')}
              </Styled.LinkItem>
            </Styled.AvatarContainer>
            <Styled.AvatarContainer theme={ThemeMedia}>
              <Styled.ImgAv src={avaOlga} theme={ThemeMedia}></Styled.ImgAv>
              <Styled.NameItem>{t('name_three')}</Styled.NameItem>
              <Styled.LinkItem href="https://github.com/Olga-plus" target="_blank" rel="noreferrer">
                <Styled.ItemIcon>
                  <GithubOutlined />
                </Styled.ItemIcon>
                {t('team_role_2')}
              </Styled.LinkItem>
            </Styled.AvatarContainer>
          </Styled.TeamContainer>
        </Styled.Teams>
      </Styled.Container>
      <Footer />
    </>
  );
};

export default Welcome;
