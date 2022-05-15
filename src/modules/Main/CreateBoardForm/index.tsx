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

export const CreateBoardForm: FC<CreateBoardFormProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslations('main');
  const [boardTitle, setBoardTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBoardTitle(value);
  };

  const handleSubmitForm = useCallback(() => {
    if (boardTitle) {
      dispatch(createBoard(boardTitle));
      onClose();
    }
  }, [boardTitle, dispatch, onClose]);

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
