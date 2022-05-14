import { FC, useEffect } from 'react';
import { Col, Row } from 'antd';
import { Loader } from 'components';
import { BoardItem } from './BoardItem';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllBoards } from 'store/reducers/boardsSlice';
import * as Styled from './styled';

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
    <Styled.Main>
      <Row justify="center">
        <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 1 }} className="gutter-row">
          {boards?.map(({ id, title }) => (
            <BoardItem key={id} id={id} title={title} />
          ))}
        </Col>
      </Row>
    </Styled.Main>
  );
};

export default Main;
