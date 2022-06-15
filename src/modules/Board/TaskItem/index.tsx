import { FC, useCallback, useMemo, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Typography } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useTranslations } from 'hooks/useTranslations';
import { useModal } from 'hooks/useModal';
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
  const { isOpen, onOpen, onClose } = useModal();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const { t } = useTranslations('board');
  const dispatch = useAppDispatch();

  const assignee = useMemo(() => users.find((user) => user.id === userId), [userId, users]);

  const handleSubmit = useCallback(() => {
    dispatch(deleteTask({ boardId, columnId, taskId: id }));
    onClose();
  }, [dispatch, boardId, columnId, id, onClose]);

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
                <DeleteOutlined onClick={onOpen} />
              </IconContainer>
            </Styled.Title>
            <Styled.Description>{description}</Styled.Description>
            <Styled.Assignee>
              {t('assignee')}
              <span>{assignee?.login}</span>
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
      <ConfirmationModal isOpen={isOpen} onClose={onClose} handleSubmit={handleSubmit} />
    </>
  );
};
