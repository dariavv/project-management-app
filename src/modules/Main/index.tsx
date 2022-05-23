import { FC, useEffect } from 'react';
import { Col, Row } from 'antd';
import { Loader } from 'components';
import { BoardItem } from './BoardItem';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllBoards } from 'store/reducers/boardsSlice';
import * as Styled from './styled';
import { ThemeMedia } from 'theme';

const Main: FC = () => {
  const { boards, status } = useAppSelector((state) => state.boards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <Styled.Main theme={ThemeMedia}>
      <Row justify="center">
        {!boards.length && <div>Add your first board</div>}
        <Col xs={{ span: 24 }} md={{ span: 16 }} xl={{ span: 12 }}>
          {boards?.map(({ id, title, description }) => (
            <BoardItem key={id} id={id} title={title} description={description} />
          ))}
        </Col>
      </Row>
    </Styled.Main>
  );
};

export default Main;
