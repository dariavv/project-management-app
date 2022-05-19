import { FC } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import * as Styled from './styled';
type Task = {
  id: number;
  title: string;
  description: string;
};

export const TaskItem: FC<Task> = ({ id, title, description }) => {
  return (
    <Styled.ContainerTask>
      <Styled.HeaderTask>
        <div>
          {id} - {title}
        </div>
        <div>
          <Styled.IconContainer>
            <EditOutlined style={{ padding: '0 15px 0 0' }} />
            <DeleteOutlined />
          </Styled.IconContainer>
        </div>
      </Styled.HeaderTask>
      <Styled.TaskContainer>{description}</Styled.TaskContainer>
    </Styled.ContainerTask>
  );
};
