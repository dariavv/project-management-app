import { FC } from 'react';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import * as Styled from './styled';
import { ContainerIcon } from 'components/BoardItem/styled';

const { Meta } = Card;

const Board: FC = () => (
  <Styled.Board>
    <Styled.BoardColumns>
      <Styled.HeaderBoard>
        <div> TO DO </div>
        <div>
          <Styled.IconContainer>
            <PlusOutlined style={{ padding: '0 15px 0 0' }} />
            <DeleteOutlined />
          </Styled.IconContainer>
        </div>
      </Styled.HeaderBoard>
      <Styled.Column>
        <Card title="Card title" bordered={false} style={{ width: 250 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <ContainerIcon>
            <EditOutlined style={{ padding: '0 5px 0 0' }} /> <DeleteOutlined />
          </ContainerIcon>
        </Card>

        {/* <Card
          style={{ width: 250 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card> */}
      </Styled.Column>
    </Styled.BoardColumns>

    <Styled.BoardColumns>
      <Styled.HeaderBoard>
        <div> IN PROGRESS </div>
        <div>
          <Styled.IconContainer>
            <PlusOutlined style={{ padding: '0 15px 0 0' }} />
            <DeleteOutlined />
          </Styled.IconContainer>
        </div>
      </Styled.HeaderBoard>
      <Styled.Column>
        <Card title="Card title" bordered={false} style={{ width: 250 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <ContainerIcon>
            <EditOutlined style={{ padding: '0 5px 0 0' }} /> <DeleteOutlined />
          </ContainerIcon>
        </Card>
      </Styled.Column>
    </Styled.BoardColumns>

    <Styled.BoardColumns>
      <Styled.HeaderBoard>
        <div> DONE </div>
        <div>
          <Styled.IconContainer>
            <PlusOutlined style={{ padding: '0 15px 0 0' }} />
            <DeleteOutlined />
          </Styled.IconContainer>
        </div>
      </Styled.HeaderBoard>
      <Styled.Column>
        <Card title="Card title" bordered={false} style={{ width: 250 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <ContainerIcon>
            <EditOutlined style={{ padding: '0 5px 0 0' }} /> <DeleteOutlined />
          </ContainerIcon>
        </Card>
      </Styled.Column>
    </Styled.BoardColumns>
    <Button block>
      <PlusOutlined style={{ padding: '0 15px 0 0' }} /> ADD
    </Button>
  </Styled.Board>
);

export default Board;

{
  /* <Styled.Board>
<Styled.BoardColumns>
  <Styled.Column>
    <header>Title</header>
    <ul>
      <li>tack1</li>
      <li>tack1</li>
      <li>tack1</li>
    </ul>
    <footer>Add another tack</footer>
  </Styled.Column>
</Styled.BoardColumns>
<Styled.BoardColumns>
  <Styled.Column>
    <header>Title</header>
    <ul>
      <li>tack1</li>
      <li>tack1</li>
      <li>tack1</li>
    </ul>
    <footer>Add another tack</footer>
  </Styled.Column>
</Styled.BoardColumns>
</Styled.Board> */
}
