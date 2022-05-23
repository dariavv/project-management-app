import { Col, Space } from 'antd';
import { FC } from 'react';
import { ContainerFooter, RSLogo, TextLink, TextSize } from './styled';
import rssLogo from 'assets/images/logo_rs.png';
import { GithubOutlined } from '@ant-design/icons';
import { ThemeMedia } from 'theme';

export const Footer: FC = () => (
  <>
    <ContainerFooter>
      <Col span={6}>
        <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
          <RSLogo src={rssLogo} theme={ThemeMedia} />
        </a>
      </Col>

      <Col span={10}>
        <Space align="center">
          <TextSize theme={ThemeMedia}> © 2022 Team 57</TextSize>
        </Space>
      </Col>
      <Space align="end">
        <Col span={10}>
          <a
            href="https://github.com/dariavv/project-management-app"
            target="_blank"
            rel="noreferrer"
          >
            <TextLink>
              <GithubOutlined style={{ fontSize: '2.1rem' }} />
            </TextLink>
          </a>
        </Col>
      </Space>
    </ContainerFooter>
  </>
);
