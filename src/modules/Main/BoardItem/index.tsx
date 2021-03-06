import { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ConfirmationModal } from 'components';
import { useAppDispatch } from 'hooks';
import { Board } from 'types';
import { deleteBoard } from 'store/reducers/boardsSlice';
import { CreateEditBoardForm } from '../CreateEditBoardForm';
import { IconContainer } from 'theme';
import * as Styled from './styled';
import { Typography } from 'antd';

type BoardItem = Omit<Board, 'order'>;

type EventType = {
  stopPropagation: () => void;
};

export const BoardItem: FC<BoardItem> = ({ id, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const showConfirmationModal = (e: EventType) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const updateBoardInfo = (e: EventType) => {
    e.stopPropagation();
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
        <Styled.CardItem
          title={
            <Typography.Text
              ellipsis={{
                tooltip: title,
              }}
            >
              {title}
            </Typography.Text>
          }
          extra={
            <IconContainer>
              <EditOutlined onClick={updateBoardInfo} />
              <DeleteOutlined onClick={showConfirmationModal} />
            </IconContainer>
          }
          onClick={() => goToItem(id)}
          hoverable
        >
          <Typography.Text
            ellipsis={{
              tooltip: description,
            }}
          >
            {description}
          </Typography.Text>
        </Styled.CardItem>
      </Styled.Container>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleSubmit={handleSubmit}
      />
      <CreateEditBoardForm
        isEditForm
        id={id}
        title={title}
        description={description}
        isOpen={isOpenForm}
        onClose={() => setIsOpenForm(false)}
      />
    </>
  );
};
