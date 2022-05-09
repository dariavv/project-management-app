import { FC } from 'react';
import { Button, Card, Col, Row, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import * as Styled from './styled';

// TODO: move Log out button to Header
const Main: FC = () => {
  return (
    <>
      <Styled.Main>
        <Row gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}>
          <Col className="gutter-row" flex={2} span={32}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
                <Button type="primary" icon={<CloseOutlined />} onClick={() => {}} />
              </Card>
              <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
                <Button type="primary" icon={<CloseOutlined />} onClick={() => {}} />
              </Card>
              <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Space>
          </Col>
          <Col className="gutter-row" flex={2} span={16}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card" size="small">
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Space>
          </Col>
        </Row>
      </Styled.Main>
    </>
  );
};

export default Main;
