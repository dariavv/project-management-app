import { FC, useCallback, useState } from 'react';
import { Form, Input } from 'antd';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Modal } from 'components';
import { useAppDispatch } from 'hooks';
import { createBoard } from 'store/reducers/boardsSlice';
import { openNotificationError } from 'utils/notifications';

type CreateBoardFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

type ChangeValueType = {
  [key: string]: string;
};

export const CreateBoardForm: FC<CreateBoardFormProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslations('main');
  const [boardTitle, setBoardTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (value: ChangeValueType) => {
    if (value.title) setBoardTitle(value.title);
    if (value.description) setDescription(value.description);
  };

  const handleSubmitForm = useCallback(() => {
    if (boardTitle && description) {
      dispatch(createBoard({ title: boardTitle, description }));
      onClose();
    }
  }, [boardTitle, description, dispatch, onClose]);

  const handleSubmitFailed = (errorInfo: unknown) => {
    openNotificationError({
      message: 'Error',
      description: `${errorInfo}`,
    });
  };

  return (
    <Modal title={t('create_new_board')} isOpen={isOpen} onClose={onClose}>
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        initialValues={{
          remember: true,
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
