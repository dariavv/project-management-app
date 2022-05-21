import { FC, useCallback, useState } from 'react';
import { Typography } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Task } from 'types';
import { IconContainer } from 'theme';
import { useAppDispatch } from 'hooks';
import { ConfirmationModal } from 'components';
import { deleteTask } from 'store/reducers/tasksSlice';
import * as Styled from './styled';

type TaskItemProps = Omit<Task, 'userId'>;

// TODO: remove order displaying after dnd implementation
export const TaskItem: FC<TaskItemProps> = (props) => {
  const { id, title, description, order, columnId, boardId } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(() => {
    setIsOpen(false);
    dispatch(deleteTask({ boardId, columnId, taskId: id }));
  }, [dispatch, boardId, columnId, id]);

  return (
    <>
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
            <DeleteOutlined onClick={() => setIsOpen(true)} />
          </IconContainer>
        </Styled.HeaderTask>
        <Styled.TaskContainer>{description}</Styled.TaskContainer>
      </Styled.ContainerTask>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
