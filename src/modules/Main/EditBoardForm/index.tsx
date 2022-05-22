import { FC, useCallback, useState } from 'react';
import { Form, Input } from 'antd';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Modal } from 'components';
import { useAppDispatch } from 'hooks';
import { openNotificationError } from 'utils/notifications';
import { updateBoard } from 'store/reducers/boardsSlice';
import { Board } from 'types';

interface EditBoardFormProps extends Omit<Board, 'order'> {
  isOpen: boolean;
  onClose: () => void;
}

type ChangeValueType = {
  [key: string]: string;
};

export const EditBoardForm: FC<EditBoardFormProps> = ({
  id,
  title,
  description,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslations('main');
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (value: ChangeValueType) => {
    if (value.title) setNewTitle(value.title);
    if (value.description) setNewDescription(value.description);
  };

  const handleSubmitForm = useCallback(() => {
    if (newTitle || newDescription) {
      dispatch(
        updateBoard({ id, title: newTitle || title, description: newDescription || description }),
      );
      onClose();
    }
  }, [newTitle, newDescription, dispatch, id, title, description, onClose]);

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
          description: description,
        }}
        onFinish={handleSubmitForm}
        onFinishFailed={handleSubmitFailed}
        onValuesChange={handleChange}
        autoComplete="off"
      >
        <Form.Item label={t('title')} name="title" rules={[{}]}>
          <Input />
        </Form.Item>
        <Form.Item label={t('description')} name="description" rules={[{}]}>
          <Input.TextArea rows={4} showCount placeholder="Max length is 100 " maxLength={100} />
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
