import { FC, useEffect, useState } from 'react';
import { Col, Row, Modal } from 'antd';
import { BorderItem } from 'components/BoardItem';
import * as Styled from './styled';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAllBoards } from 'store/reducers/boardsSlice';
import { Loader } from 'components';

const Main: FC = () => {
  const { boards, status } = useAppSelector((state) => state.boards);
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleSubmit = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <>
      <Styled.Main>
        <Row justify="center">
          <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 1 }} className="gutter-row">
            {boards?.map((board) => {
              const { id, title } = board;
              console.log('board', board);
              return (
                <BorderItem
                  key={id}
                  title={title}
                  description={'Description'}
                  showModal={showModal}
                />
              );
            })}
          </Col>
        </Row>
      </Styled.Main>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to DELETE?</p>
      </Modal>
    </>
  );
};

export default Main;
