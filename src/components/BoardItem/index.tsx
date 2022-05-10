import { Card } from 'antd';
import { FC } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ContainerCard, ContainerIcon } from './styled';

type BoardItem = {
  title: string;
  description: string;
  showModal: () => void;
};

export const BorderItem: FC<BoardItem> = ({ title, description, showModal }) => {
  return (
    <>
      <ContainerCard>
        <Card title={title} size="small">
          <p>{description}</p>
          <ContainerIcon>
            <EditOutlined style={{ padding: '0 5px 0 0' }} /> <DeleteOutlined onClick={showModal} />
          </ContainerIcon>
        </Card>
      </ContainerCard>
    </>
  );
};
