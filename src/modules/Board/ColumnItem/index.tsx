import { FC, useCallback, useState, useEffect, useMemo } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { ConfirmationModal } from 'components';
import { deleteColumn } from 'store/reducers/columnsSlice';
import { getAllTasksByColumnId, setUpdatedTasks, updateTask } from 'store/reducers/tasksSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { CreateTaskForm } from '../CreateTaskForm';
import { TaskItem } from '../TaskItem';
import { Column } from 'types';
import { IconContainer, ThemeMedia } from 'theme';
import * as Styled from './styled';

interface ColumnItemProps extends Omit<Column, 'order'> {
  boardId: string;
}

export const ColumnItem: FC<ColumnItemProps> = ({ id: columnId, title, boardId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const { tasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const filteredTasks = useMemo(
    () =>
      tasks
        .filter((task) => task.boardId === boardId && task.columnId === columnId)
        .sort((currentTask, nextTask) => currentTask.order - nextTask.order),
    [boardId, columnId, tasks],
  );

  const handleSubmit = useCallback(() => {
    setIsOpen(false);
    dispatch(deleteColumn({ boardId, columnId }));
  }, [boardId, dispatch, columnId]);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const newTasks = [...filteredTasks];
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
  };

  useEffect(() => {
    dispatch(getAllTasksByColumnId({ boardId, columnId }));
  }, [columnId, boardId, dispatch]);

  return (
    <>
      <Styled.ColumnItem theme={ThemeMedia}>
        <Styled.ColumnTitle>
          <div>{title}</div>
          <IconContainer>
            <PlusOutlined onClick={() => setIsOpenForm(true)} />
            <DeleteOutlined onClick={() => setIsOpen(true)} />
          </IconContainer>
        </Styled.ColumnTitle>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <Styled.TaskContainer {...provided.droppableProps} ref={provided.innerRef}>
                {filteredTasks?.map(
                  ({ id, title, description, order, columnId, boardId, userId }, index) => (
                    <TaskItem
                      index={index}
                      key={id}
                      id={id}
                      userId={userId}
                      boardId={boardId}
                      columnId={columnId}
                      title={title}
                      description={description}
                      order={order}
                    />
                  ),
                )}
                {provided.placeholder}
              </Styled.TaskContainer>
            )}
          </Droppable>
        </DragDropContext>
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
