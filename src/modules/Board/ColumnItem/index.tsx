import { FC, useCallback, useState, useEffect, useMemo, useRef } from 'react';
import { PlusOutlined, DeleteOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { ConfirmationModal, Loader } from 'components';
import { deleteColumn } from 'store/reducers/columnsSlice';
import { getAllTasksByColumnId } from 'store/reducers/tasksSlice';
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
  const { tasks, status } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [valueInput, setValueInput] = useState(title);

  const [isVisibleButton, setIsVisibleButton] = useState(false);

  const focusEvent = (event: React.ChangeEvent<{ value: string }> | MouseEvent | null) => {
    if (inputRef.current === document.activeElement) {
      setIsVisibleButton(true);
      setValueInput((event?.target as HTMLInputElement).value);
    } else {
      setIsVisibleButton(false);
    }
  };

  const updateTitle = () => {};
  const cancelUpdateTitle = () => {
    setValueInput(title);
  };

  useEffect(() => {
    document.addEventListener('click', focusEvent);
    return () => {
      document.addEventListener('click', focusEvent);
    };
  }, []);

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
      <Styled.ColumnItem theme={ThemeMedia}>
        <Styled.ColumnTitle>
          <Styled.Input
            ref={inputRef}
            type="text"
            id={columnId}
            value={valueInput}
            onChange={focusEvent}
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
