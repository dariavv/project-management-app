import { FC } from 'react';
import { Typography } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Task } from 'types';
import { IconContainer } from 'theme';
import * as Styled from './styled';

type TaskItemProps = Pick<Task, 'id' | 'title' | 'description' | 'order'>;

// TODO: remove order displaying after dnd implementation
export const TaskItem: FC<TaskItemProps> = ({ title, description, order }) => {
  return (
    <Styled.ContainerTask>
      <Styled.HeaderTask>
        <Typography.Text
          ellipsis={{
            tooltip: title,
          }}
        >
          {order} - {title}
        </Typography.Text>
        <IconContainer>
          <EditOutlined />
          <DeleteOutlined />
        </IconContainer>
      </Styled.HeaderTask>
      <Styled.TaskContainer>{description}</Styled.TaskContainer>
    </Styled.ContainerTask>
  );
};
