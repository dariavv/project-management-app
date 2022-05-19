import { Card } from 'antd';
import { FC } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import * as Styled from './styled';

type BoardItem = {
  title: string;
  description: string;
  showModal: () => void;
};

export const BorderItem: FC<BoardItem> = ({ title, description, showModal }) => {
  return (
    <Styled.ContainerCard>
      <Card title={title} size="small" color="#yellow">
        <p>{description}</p>
        <Styled.ContainerIcon>
          <EditOutlined style={{ padding: '0 5px 0 0' }} /> <DeleteOutlined onClick={showModal} />
        </Styled.ContainerIcon>
      </Card>
    </Styled.ContainerCard>
  );
};
