import { FC, useState } from 'react';
import { Col, Row, Modal } from 'antd';
import { BorderItem } from 'components/BoardItem';
import * as Styled from './styled';

// TODO: move Log out button to Header
const Main: FC = () => {
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

  return (
    <>
      <Styled.Main>
        <Row justify="center">
          {new Array(40).fill(null).map((_, index) => (
            <Col
              xs={{ span: 12, offset: 1 }}
              lg={{ span: 6, offset: 1 }}
              className="gutter-row"
              key={index}
            >
              <BorderItem title={'Title'} description={'Description'} showModal={showModal} />
              index{index}
            </Col>
          ))}
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
