import { FC, useEffect, useState } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useTranslations } from 'hooks/useTranslations';
import { setUpdatedTasks, updateTask } from 'store/reducers/tasksSlice';
import { getAllColumns, setUpdatedColumns, updateColumn } from 'store/reducers/columnsSlice';
import { getAllUsers } from 'store/reducers/usersSlice';
import { CreateColumnForm } from './CreateColumnForm';
import { ColumnItem } from './ColumnItem';
import { Loader } from 'components';
import { ThemeMedia } from 'theme';
import * as Styled from './styled';

type ParamsType = {
  id: string;
};

const Board: FC = () => {
  const { id: boardId } = useParams() as ParamsType;
  const [isOpenForm, setIsOpenForm] = useState(false);
  const { columns } = useAppSelector((state) => state.columns);
  const { tasks } = useAppSelector((state) => state.tasks);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const { t } = useTranslations('board');
  const dispatch = useAppDispatch();

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

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

    if (type === 'column') {
      const newColumns = [...columns];
      const [removedColumn] = newColumns.splice(source.index, 1);
      newColumns.splice(destination.index, 0, removedColumn);

      const columnsWithUpdatedOrders = newColumns.map((column, idx) => {
        return { ...column, order: idx + 1 };
      });

      const movedColumn = columnsWithUpdatedOrders.find((column) => column.id === draggableId);
      if (!movedColumn) return;

      const updatedColumn = {
        ...movedColumn,
        columnId: movedColumn.id,
        isDnd: true,
        boardId,
      };

      dispatch(setUpdatedColumns(columnsWithUpdatedOrders));
      dispatch(updateColumn(updatedColumn));
    }

    if (startColumnId === finishColumnId && type === 'tasks') {
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

    if (startColumnId !== finishColumnId && type === 'tasks') {
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
    const getData = async () => {
      if (boardId) {
        await dispatch(getAllColumns(boardId));
      }
      await dispatch(getAllUsers());
      setIsInitialLoading(false);
    };
    getData();
  }, [dispatch, boardId]);

  if (isInitialLoading) {
    return <Loader />;
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="columns" direction="horizontal" type="column">
          {(provided) => (
            <Styled.BoardContainer
              theme={ThemeMedia}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {columns?.map((column, index) => (
                <ColumnItem key={column.id} boardId={boardId} column={column} index={index} />
              ))}
              <Styled.AddButton theme={ThemeMedia} onClick={() => setIsOpenForm(true)}>
                <PlusOutlined style={{ padding: '0 15px 0 0' }} />
                <span>{t('add_column')}</span>
              </Styled.AddButton>
              {provided.placeholder}
            </Styled.BoardContainer>
          )}
        </Droppable>
      </DragDropContext>
      <CreateColumnForm isOpen={isOpenForm} onClose={() => setIsOpenForm(false)} />
    </>
  );
};

export default Board;
