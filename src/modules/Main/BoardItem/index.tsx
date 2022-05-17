import { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ConfirmationModal } from 'components';
import { useAppDispatch } from 'hooks';
import { Board } from 'types';
import { deleteBoard } from 'store/reducers/boardsSlice';
import { EditBoardForm } from '../EditBoardForm';
import * as Styled from './styled';

type BoardItem = {
  id: string;
  title: string;
};

export const BoardItem: FC<BoardItem> = ({ id, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const showModal = () => {
    setIsOpen(true);
  };

  const updateBoardInfo = () => {
    setIsOpenForm(true);
  };

  const handleSubmit = useCallback(() => {
    setIsOpen(false);
    dispatch(deleteBoard(id));
  }, [dispatch, id]);

  const goToItem = useCallback(
    (id: Board['id']) => {
      navigate(`/board/${id}`);
    },
    [navigate],
  );

  return (
    <>
      <Styled.Container>
        <Styled.CardItem size="small">
          <Styled.Title onClick={() => goToItem(id)}>{title}</Styled.Title>
          <Styled.IconContainer>
            <EditOutlined style={{ padding: '0 5px 0 0' }} onClick={updateBoardInfo} />
            <DeleteOutlined onClick={showModal} />
          </Styled.IconContainer>
        </Styled.CardItem>
      </Styled.Container>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleSubmit={handleSubmit}
      />
      <EditBoardForm
        id={id}
        title={title}
        isOpen={isOpenForm}
        onClose={() => setIsOpenForm(false)}
      />
    </>
  );
};
