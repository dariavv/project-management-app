import { FC } from 'react';
import { Modal } from 'antd';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleSubmit: () => void;
};

export const ConfirmationModal: FC<ModalProps> = ({ isOpen, onClose, handleSubmit }) => {
  return (
    <Modal
      title="Confirmation Modal"
      visible={isOpen}
      onOk={handleSubmit}
      onCancel={onClose}
      destroyOnClose
    >
      <p>Are you sure you want to DELETE?</p>
    </Modal>
  );
};
