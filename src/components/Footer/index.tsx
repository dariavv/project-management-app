import { FC } from 'react';
import rssLogo from 'assets/images/logo_rs.png';
import { ThemeMedia } from 'theme';
import { GithubOutlined } from '@ant-design/icons';
import * as Styled from './styled';

export const Footer: FC = () => (
  <Styled.ContainerFooter>
    <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
      <Styled.RSLogo src={rssLogo} theme={ThemeMedia} />
    </a>
    <Styled.Copyright theme={ThemeMedia}>© 2022 Team 57</Styled.Copyright>
    <a href="https://github.com/dariavv/project-management-app" target="_blank" rel="noreferrer">
      <Styled.IconContainer>
        <GithubOutlined />
      </Styled.IconContainer>
    </a>
  </Styled.ContainerFooter>
);
