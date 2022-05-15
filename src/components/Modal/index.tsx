import { FC } from 'react';
import { Modal as AntModal } from 'antd';

type ModalProps = {
  title: string;
  isOpen: boolean;
  children: JSX.Element;
  onClose: () => void;
};

export const Modal: FC<ModalProps> = ({ title, children, isOpen, onClose }) => {
  return (
    <AntModal title={title} visible={isOpen} onCancel={onClose} destroyOnClose footer={null}>
      {children}
    </AntModal>
  );
};
