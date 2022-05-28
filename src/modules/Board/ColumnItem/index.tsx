import { FC, useCallback, useState, useEffect, useMemo, useRef } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { PlusOutlined, DeleteOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { ConfirmationModal } from 'components';
import { deleteColumn, updateColumn } from 'store/reducers/columnsSlice';
import { getAllTasksByColumnId, setUpdatedTasks, updateTask } from 'store/reducers/tasksSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { CreateTaskForm } from '../CreateTaskForm';
import { TaskItem } from '../TaskItem';
import { Column } from 'types';
import { IconContainer, ThemeMedia } from 'theme';
import * as Styled from './styled';

interface ColumnItemProps extends Column {
  boardId: string;
}

export const ColumnItem: FC<ColumnItemProps> = ({ id: columnId, title, boardId, order }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [valueInput, setValueInput] = useState(title);
  const [isVisibleButton, setIsVisibleButton] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { tasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const filteredTasks = useMemo(
    () =>
      tasks
        .filter((task) => task.boardId === boardId && task.columnId === columnId)
        .sort((currentTask, nextTask) => currentTask.order - nextTask.order),
    [boardId, columnId, tasks],
  );

  const focusEvent = (event: React.ChangeEvent<{ value: string }> | MouseEvent | null) => {
    if (inputRef.current === document.activeElement) {
      setIsVisibleButton(true);
      setValueInput((event?.target as HTMLInputElement).value);
    } else {
      setIsVisibleButton(false);
      setValueInput(title);
    }
  };

  const updateTitle = () => {
    const formValues = {
      title: valueInput,
      columnId,
      boardId,
      order,
    };

    dispatch(updateColumn(formValues));
  };

  const cancelUpdateTitle = () => {
    setValueInput(title);
  };

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

  useEffect(() => {
    document.addEventListener('click', focusEvent);
    return () => {
      document.addEventListener('click', focusEvent);
    };
  });

  return (
    <>
      <Styled.ColumnItem theme={ThemeMedia}>
        <Styled.ColumnTitle>
          <Styled.Input
            ref={inputRef}
            type="text"
            id={columnId}
            value={valueInput}
            onChange={focusEvent}
            autoComplete="off"
          />
          <Styled.ToggleInputBtn isVisibleButton={isVisibleButton}>
            <Styled.IconItemContainer>
              <CheckOutlined onClick={updateTitle} />
            </Styled.IconItemContainer>
            <Styled.IconItemContainer>
              <CloseOutlined onClick={cancelUpdateTitle} />
            </Styled.IconItemContainer>
          </Styled.ToggleInputBtn>
          <Styled.ToggleColumnBtn isVisibleButton={isVisibleButton}>
            <IconContainer>
              <PlusOutlined onClick={() => setIsOpenForm(true)} />
              <DeleteOutlined onClick={() => setIsOpen(true)} />
            </IconContainer>
          </Styled.ToggleColumnBtn>
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
