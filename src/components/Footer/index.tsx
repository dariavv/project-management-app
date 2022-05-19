import { Col, Space } from 'antd';
import { FC } from 'react';
import rssLogo from 'assets/images/logo_rs.png';
import { GithubOutlined } from '@ant-design/icons';
import * as Styled from './styled';

export const Footer: FC = () => {
  return (
    <>
      <Styled.ContainerFooter>
        <Col span={6}>
          <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
            <img src={rssLogo} alt="RSS" width={150} />
          </a>
        </Col>
        <Col span={8}>
          <Space align="start">© 2022 Team 57</Space>
        </Col>
        <Space align="end">
          <Col span={10}>
            <a
              href="https://github.com/dariavv/project-management-app"
              target="_blank"
              rel="noreferrer"
            >
              <Styled.TextLink>
                <GithubOutlined style={{ fontSize: '3rem' }} />
              </Styled.TextLink>
            </a>
          </Col>
        </Space>
      </Styled.ContainerFooter>
    </>
  );
};
