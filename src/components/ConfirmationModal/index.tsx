import { FC, memo } from 'react';
import { Modal } from 'antd';
import { useTranslations } from 'hooks/useTranslations';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleSubmit: () => void;
};

export const ConfirmationModal: FC<ModalProps> = memo(({ isOpen, onClose, handleSubmit }) => {
  const { t } = useTranslations('confirmation-modal');
  return (
    <Modal
      title={t('confirmation_modal')}
      visible={isOpen}
      onOk={handleSubmit}
      onCancel={onClose}
      destroyOnClose
    >
      <p>{t('confirmation_message')}</p>
    </Modal>
  );
});
