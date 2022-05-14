import { FC, useState } from 'react';
import { Card } from 'antd';
import { ConfirmationModal } from 'components';
import { useAppDispatch } from 'hooks';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import * as Styled from './styled';
import { deleteBoard } from 'store/reducers/boardsSlice';

type BoardItem = {
  id: string;
  title: string;
};

export const BoardItem: FC<BoardItem> = ({ id, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const showModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = () => {
    setIsOpen(false);
    dispatch(deleteBoard(id));
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Styled.Container>
        <Card size="small">
          <h3>{title}</h3>
          <Styled.IconContainer>
            <EditOutlined style={{ padding: '0 5px 0 0' }} /> <DeleteOutlined onClick={showModal} />
          </Styled.IconContainer>
        </Card>
      </Styled.Container>
      <ConfirmationModal isOpen={isOpen} onClose={handleClose} handleSubmit={handleSubmit} />
    </>
  );
};
