import { FC, useCallback, useState, useEffect, useMemo, useRef } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { PlusOutlined, DeleteOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { ConfirmationModal } from 'components';
import { deleteColumn, updateColumn } from 'store/reducers/columnsSlice';
import { getAllTasksByColumnId } from 'store/reducers/tasksSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { CreateTaskForm } from '../CreateTaskForm';
import { TaskItem } from '../TaskItem';
import { Column } from 'types';
import { IconContainer, ThemeMedia } from 'theme';
import * as Styled from './styled';

interface ColumnItemProps {
  boardId: string;
  column: Column;
  index: number;
}

export const ColumnItem: FC<ColumnItemProps> = ({ column, boardId, index }) => {
  const { id: columnId, title, order } = column;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);
  const { tasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const filteredTasks = useMemo(
    () =>
      tasks
        .filter((task) => task.boardId === boardId && task.columnId === columnId)
        .sort((currentTask, nextTask) => currentTask.order - nextTask.order),
    [boardId, columnId, tasks],
  );

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(event.target.value);
  }, []);

  const updateTitle = () => {
    if (titleValue) {
      const formValues = {
        title: titleValue,
        columnId,
        boardId,
        order,
      };

      dispatch(updateColumn(formValues));
      setIsEditing(false);
    }
  };

  const cancelUpdateTitle = () => {
    setIsEditing(false);
    setTitleValue(title);
  };

  const handleSubmit = useCallback(() => {
    setIsOpen(false);
    dispatch(deleteColumn({ boardId, columnId }));
  }, [boardId, dispatch, columnId]);

  useEffect(() => {
    dispatch(getAllTasksByColumnId({ boardId, columnId }));
  }, [columnId, boardId, dispatch]);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <>
      <Draggable draggableId={columnId} index={index}>
        {(provided) => (
          <Styled.ColumnItem
            theme={ThemeMedia}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Styled.ColumnTitle>
              {isEditing ? (
                <Styled.Input
                  maxLength={20}
                  ref={inputRef}
                  type="text"
                  id={columnId}
                  value={titleValue}
                  onChange={handleChange}
                  onBlur={cancelUpdateTitle}
                  autoComplete="off"
                />
              ) : (
                <span onClick={() => setIsEditing(true)}>{titleValue}</span>
              )}
              <Styled.ToggleInputBtn isVisibleButton={isEditing}>
                <Styled.IconItemContainer>
                  <CheckOutlined onClick={updateTitle} />
                </Styled.IconItemContainer>
                <Styled.IconItemContainer>
                  <CloseOutlined onClick={cancelUpdateTitle} />
                </Styled.IconItemContainer>
              </Styled.ToggleInputBtn>
              <Styled.ToggleColumnBtn isVisibleButton={isEditing}>
                <IconContainer>
                  <PlusOutlined onClick={() => setIsOpenForm(true)} />
                  <DeleteOutlined onClick={() => setIsOpen(true)} />
                </IconContainer>
              </Styled.ToggleColumnBtn>
            </Styled.ColumnTitle>
            <Droppable droppableId={columnId} type="tasks">
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
          </Styled.ColumnItem>
        )}
      </Draggable>
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
