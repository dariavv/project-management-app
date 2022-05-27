import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { Loader } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllColumns } from 'store/reducers/columnsSlice';
import { CreateColumnForm } from './CreateColumnForm';
import { ColumnItem } from './ColumnItem';
import { getAllUsers } from 'store/reducers/usersSlice';
import { useTranslations } from 'hooks/useTranslations';
import * as Styled from './styled';
import { ThemeMedia } from 'theme';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { setUpdatedTasks, updateTask } from 'store/reducers/tasksSlice';

type ParamsType = {
  id: string;
};

const Board: FC = () => {
  const { id: boardId } = useParams() as ParamsType;
  const [isOpenForm, setIsOpenForm] = useState(false);
  const { columns, status } = useAppSelector((state) => state.columns);
  const { tasks } = useAppSelector((state) => state.tasks);
  const { t } = useTranslations('main');
  const dispatch = useAppDispatch();

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const startColumnTasks = tasks
      .filter((task) => task.boardId === boardId && task.columnId === source.droppableId)
      .sort((currentTask, nextTask) => currentTask.order - nextTask.order);

    const finishColumnTasks = tasks
      .filter((task) => task.boardId === boardId && task.columnId === destination.droppableId)
      .sort((currentTask, nextTask) => currentTask.order - nextTask.order);

    const startColumnId = source.droppableId;
    const finishColumnId = destination.droppableId;

    if (startColumnId === finishColumnId) {
      const newTasks = [...startColumnTasks];
      const [removedTask] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, removedTask);

      const tasksWithUpdatedOrders = newTasks.map((task, idx) => {
        return { ...task, order: idx + 1 };
      });

      const movedTask = tasksWithUpdatedOrders.find((task) => task.id === draggableId);
      if (!movedTask) return;

      const updatedTask = {
        ...movedTask,
        taskId: movedTask.id,
        isDnd: true,
      };

      dispatch(setUpdatedTasks(tasksWithUpdatedOrders));
      dispatch(updateTask(updatedTask));
    }

    if (startColumnId !== finishColumnId) {
      const startTasks = [...startColumnTasks];
      const [removedTask] = startTasks.splice(source.index, 1);

      const startTasksWithUpdatedOrders = startTasks.map((task, idx) => {
        return { ...task, order: idx + 1, columnId: startColumnId };
      });

      const finishTasks = [...finishColumnTasks];
      finishTasks.splice(destination.index, 0, removedTask);

      const finishTasksWithUpdatedOrders = finishTasks.map((task, idx) => {
        return { ...task, order: idx + 1, columnId: finishColumnId };
      });

      const updatedTasks = [...startTasksWithUpdatedOrders, ...finishTasksWithUpdatedOrders];
      const updatedTaskResult = updatedTasks.find((task) => task.id === removedTask.id);
      if (!updatedTaskResult) return;

      const updatedTask = {
        ...updatedTaskResult,
        taskId: updatedTaskResult.id,
        columnId: startColumnId,
        updatedColumnId: updatedTaskResult.columnId,
        isDnd: true,
      };

      dispatch(setUpdatedTasks(updatedTasks));
      dispatch(updateTask(updatedTask));
    }
  };

  useEffect(() => {
    if (boardId) {
      dispatch(getAllColumns(boardId));
    }
    dispatch(getAllUsers());
  }, [dispatch, boardId]);

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <>
      <Styled.BoardContainer theme={ThemeMedia}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          {columns?.map((column) => (
            <ColumnItem key={column.id} boardId={boardId} column={column} />
          ))}
        </DragDropContext>
        <Styled.AddButton theme={ThemeMedia} onClick={() => setIsOpenForm(true)}>
          <PlusOutlined style={{ padding: '0 15px 0 0' }} />
          <span>{t('add_column')}</span>
        </Styled.AddButton>
      </Styled.BoardContainer>
      <CreateColumnForm isOpen={isOpenForm} onClose={() => setIsOpenForm(false)} />
    </>
  );
};

export default Board;
