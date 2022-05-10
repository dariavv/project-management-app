import { FC, useState } from 'react';
import { Col, Row, Space, Modal } from 'antd';
import * as Styled from './styled';
import { BorderItem } from 'components/BoardItem';

// TODO: move Log out button to Header
const Main: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Styled.Main>
        <Row gutter={[16, 16]}>
          {new Array(40).fill(null).map((_, index) => (
            <Col className="gutter-row" span={8} key={index}>
              <BorderItem title={'Title'} description={'Description'} showModal={showModal} />
            </Col>
          ))}
        </Row>
      </Styled.Main>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to DELETE?</p>
      </Modal>
    </>
  );
};

export default Main;
