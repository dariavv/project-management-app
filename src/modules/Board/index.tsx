import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { Loader } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllColumns } from 'store/reducers/columnsSlice';
import { CreateColumnForm } from './CreateColumnForm';
import { ColumnItem } from './ColumnItem';
import * as Styled from './styled';

type ParamsType = {
  id: string;
};

const Board: FC = () => {
  const { id: boardId } = useParams() as ParamsType;
  const [isOpenForm, setIsOpenForm] = useState(false);
  const { columns, status } = useAppSelector((state) => state.columns);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (boardId) {
      dispatch(getAllColumns(boardId));
    }
  }, [dispatch, boardId]);

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <>
      <Styled.BoardContainer>
        {columns?.map(({ id, title, order }) => (
          <ColumnItem key={id} id={id} title={title} order={order} boardId={boardId} />
        ))}
        <Styled.AddButton onClick={() => setIsOpenForm(true)}>
          <PlusOutlined style={{ padding: '0 15px 0 0' }} />
          <span>Аdd column</span>
        </Styled.AddButton>
      </Styled.BoardContainer>
      <CreateColumnForm isOpen={isOpenForm} onClose={() => setIsOpenForm(false)} />
    </>
  );
};

export default Board;
