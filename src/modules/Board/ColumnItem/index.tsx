import { FC, useCallback, useState } from 'react';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { ConfirmationModal } from 'components';
import { deleteColumn } from 'store/reducers/columnsSlice';
import { useAppDispatch } from 'hooks';
import { Column } from 'types';
import * as Styled from './styled';

interface ColumnItemProps extends Column {
  boardId: string;
  children?: React.ReactNode;
}

export const ColumnItem: FC<ColumnItemProps> = ({ id, title, boardId, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(() => {
    setIsOpen(false);
    dispatch(deleteColumn({ boardId, columnId: id }));
  }, [boardId, dispatch, id]);

  return (
    <>
      <Styled.ColumnItem>
        <Styled.ColumnTitle>
          <div>{title}</div>
          <Styled.IconContainer>
            <PlusOutlined style={{ padding: '0 15px 0 0' }} />
            <DeleteOutlined onClick={() => setIsOpen(true)} />
          </Styled.IconContainer>
        </Styled.ColumnTitle>
        {children}
      </Styled.ColumnItem>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
