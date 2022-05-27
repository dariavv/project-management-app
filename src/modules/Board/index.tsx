import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { Loader } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllColumns } from 'store/reducers/columnsSlice';
import { CreateColumnForm } from './CreateColumnForm';
import { ColumnItem } from './ColumnItem';
import { getAllUsers } from 'store/reducers/usersSlice';
import { useTranslations } from 'hooks/useTranslations';
import * as Styled from './styled';
import { ThemeMedia } from 'theme';

type ParamsType = {
  id: string;
};

const Board: FC = () => {
  const { id: boardId } = useParams() as ParamsType;
  const [isOpenForm, setIsOpenForm] = useState(false);
  const { columns, status } = useAppSelector((state) => state.columns);
  const { t } = useTranslations('main');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (boardId) {
      dispatch(getAllColumns(boardId));
    }
    dispatch(getAllUsers());
  }, [dispatch, boardId]);

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <>
      <Styled.BoardContainer theme={ThemeMedia}>
        {columns?.map(({ id, title, order }) => (
          <ColumnItem key={id} id={id} title={title} boardId={boardId} order={order} />
        ))}
        <Styled.AddButton theme={ThemeMedia} onClick={() => setIsOpenForm(true)}>
          <PlusOutlined style={{ padding: '0 15px 0 0' }} />
          <span>{t('add_column')}</span>
        </Styled.AddButton>
      </Styled.BoardContainer>
      <CreateColumnForm isOpen={isOpenForm} onClose={() => setIsOpenForm(false)} />
    </>
  );
};

export default Board;
