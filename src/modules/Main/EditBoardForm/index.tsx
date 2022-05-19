import { FC, useCallback, useState } from 'react';
import { Form, Input } from 'antd';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Modal } from 'components';
import { useAppDispatch } from 'hooks';
import { openNotificationError } from 'utils/notifications';
import { updateBoard } from 'store/reducers/boardsSlice';

type EditBoardFormProps = {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export const EditBoardForm: FC<EditBoardFormProps> = ({ id, title, isOpen, onClose }) => {
  const { t } = useTranslations('main');
  const [newTitle, setNewTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewTitle(value);
  };

  const handleSubmitForm = useCallback(() => {
    if (newTitle) {
      dispatch(updateBoard({ id, title: newTitle }));
      onClose();
    }
  }, [id, newTitle, dispatch, onClose]);

  const handleSubmitFailed = (errorInfo: unknown) => {
    openNotificationError({
      message: 'Error',
      description: `${errorInfo}`,
    });
  };

  return (
    <Modal title={t('edit_board')} isOpen={isOpen} onClose={onClose}>
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        initialValues={{
          remember: true,
          title: title,
        }}
        onFinish={handleSubmitForm}
        onFinishFailed={handleSubmitFailed}
        autoComplete="off"
      >
        <Form.Item label={t('title')} name="title" rules={[{}]}>
          <Input onChange={handleChange} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button key="back" onClick={onClose}>
            {t('cancel')}
          </Button>
          <Button key="submit" type="primary" onClick={handleSubmitForm}>
            {t('submit')}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
