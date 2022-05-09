import { Col, Row } from 'antd';
import { FC } from 'react';
import { TextLink, ContainerFooter } from './styled';
import rssLogo from 'assets/images/logo_rs.png';

export const Footer: FC = () => (
  <>
    <ContainerFooter>
      <Row justify="space-around" align="middle">
        <Col span={12}>
          <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
            <img src={rssLogo} alt="RSS" width={150} />
          </a>
          <p>© 2022</p>
        </Col>
        <Col span={12}>
          <p>Development:</p>
          <Row gutter={12}>
            <Col className="gutter-row" span={6}>
              <a href="https://github.com/dariavv" target="_blank" rel="noreferrer">
                <TextLink>Daria</TextLink>
              </a>
            </Col>
            <Col className="gutter-row" span={6}>
              <a href="https://github.com/GBaykov" target="_blank" rel="noreferrer">
                <TextLink>Gleb</TextLink>
              </a>
            </Col>
            <Col className="gutter-row" span={6}>
              <a href="https://github.com/Olga-plus" target="_blank" rel="noreferrer">
                <TextLink>Olga</TextLink>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </ContainerFooter>
  </>
);
