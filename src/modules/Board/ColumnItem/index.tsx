import { FC, useCallback, useState, useEffect, useMemo } from 'react';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { ConfirmationModal, Loader } from 'components';
import { deleteColumn } from 'store/reducers/columnsSlice';
import { getAllTasksByColumnId } from 'store/reducers/tasksSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { CreateTaskForm } from '../CreateTaskForm';
import { TaskItem } from '../TaskItem';
import { Column } from 'types';
import { IconContainer } from 'theme';
import * as Styled from './styled';

interface ColumnItemProps extends Omit<Column, 'order'> {
  boardId: string;
}

export const ColumnItem: FC<ColumnItemProps> = ({ id: columnId, title, boardId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const { tasks, status } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.boardId === boardId && task.columnId === columnId),
    [boardId, columnId, tasks],
  );

  const handleSubmit = useCallback(() => {
    setIsOpen(false);
    dispatch(deleteColumn({ boardId, columnId }));
  }, [boardId, dispatch, columnId]);

  useEffect(() => {
    dispatch(getAllTasksByColumnId({ boardId, columnId }));
  }, [columnId, boardId, dispatch]);

  if (status === 'loading') return <Loader />;

  return (
    <>
      <Styled.ColumnItem>
        <Styled.ColumnTitle>
          <div>{title}</div>
          <IconContainer>
            <PlusOutlined onClick={() => setIsOpenForm(true)} />
            <DeleteOutlined onClick={() => setIsOpen(true)} />
          </IconContainer>
        </Styled.ColumnTitle>
        {filteredTasks?.map(({ id, title, description, order, columnId, boardId, userId }) => (
          <TaskItem
            key={id}
            id={id}
            userId={userId}
            boardId={boardId}
            columnId={columnId}
            title={title}
            description={description}
            order={order}
          />
        ))}
      </Styled.ColumnItem>
      <CreateTaskForm
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
