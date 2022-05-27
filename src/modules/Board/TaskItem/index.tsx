import { FC, useCallback, useMemo, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Typography } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Task } from 'types';
import { IconContainer } from 'theme';
import { useAppDispatch, useAppSelector } from 'hooks';
import { ConfirmationModal } from 'components';
import { deleteTask } from 'store/reducers/tasksSlice';
import { EditTaskForm } from '../EditTaskForm';
import * as Styled from './styled';

interface TaskItemProps extends Task {
  index: number;
}

export const TaskItem: FC<TaskItemProps> = (props) => {
  const { id, title, description, order, columnId, boardId, userId, index } = props;
  const { users } = useAppSelector((state) => state.users);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const dispatch = useAppDispatch();

  const assignee = useMemo(() => users.find((user) => user.id === userId), [userId, users]);

  const handleSubmit = useCallback(() => {
    setIsOpen(false);
    dispatch(deleteTask({ boardId, columnId, taskId: id }));
  }, [dispatch, boardId, columnId, id]);

  return (
    <>
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <Styled.Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Styled.Title>
              <Typography.Text
                ellipsis={{
                  tooltip: title,
                }}
              >
                {title}
              </Typography.Text>
              <IconContainer>
                <EditOutlined onClick={() => setIsOpenForm(true)} />
                <DeleteOutlined onClick={() => setIsOpen(true)} />
              </IconContainer>
            </Styled.Title>
            <Styled.Description>{description}</Styled.Description>
            <Styled.Assignee>
              Assignee: <span>{assignee?.login}</span>
            </Styled.Assignee>
          </Styled.Container>
        )}
      </Draggable>
      <EditTaskForm
        taskId={id}
        title={title}
        description={description}
        order={order}
        userId={userId}
        columnId={columnId}
        isOpen={isOpenForm}
        onClose={() => setIsOpenForm(false)}
      />
      <ConfirmationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
