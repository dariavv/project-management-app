import { FC } from 'react';
import { Modal as AntModal } from 'antd';
import { Button } from 'components/Button';
import { useTranslations } from 'hooks/useTranslations';

type ModalProps = {
  title: string;
  isOpen: boolean;
  content: React.ReactNode;
  onClose: () => void;
  handleSubmit: () => void;
};

export const Modal: FC<ModalProps> = ({ title, content, isOpen, onClose, handleSubmit }) => {
  const { t } = useTranslations('main');
  return (
    <AntModal
      title={title}
      visible={isOpen}
      onOk={handleSubmit}
      onCancel={onClose}
      destroyOnClose
      footer={[
        <Button key="back" onClick={onClose}>
          {t('cancel')}
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          {t('submit')}
        </Button>,
      ]}
    >
      {content}
    </AntModal>
  );
};
