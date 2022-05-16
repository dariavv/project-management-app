import { FC, useCallback, useState } from 'react';
import { Form, Input } from 'antd';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Modal } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { openNotificationError } from 'utils/notifications';
import { createColumn } from 'store/reducers/columnsSlice';
import { useParams } from 'react-router-dom';

type CreateColumnFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

type ParamsType = {
  id: string;
};

export const CreateColumnForm: FC<CreateColumnFormProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslations('main');
  const { id: boardId } = useParams() as ParamsType;
  const [columnTitle, setColumnTitle] = useState('');
  const { columns } = useAppSelector((state) => state.columns);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setColumnTitle(value);
  };

  const handleSubmitForm = useCallback(() => {
    if (columnTitle) {
      dispatch(createColumn({ boardId, title: columnTitle, order: columns.length + 1 }));
      onClose();
    }
  }, [boardId, columnTitle, columns.length, dispatch, onClose]);

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
