import { FC, useCallback } from 'react';
import { Form, Input } from 'antd';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Modal } from 'components';
import { useAppDispatch } from 'hooks';
import { openNotificationError } from 'utils/notifications';
import { createColumn } from 'store/reducers/columnsSlice';
import { useParams } from 'react-router-dom';
import { Column } from 'types';

type CreateColumnFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

type ParamsType = {
  id: string;
};

type FormValues = Pick<Column, 'title'>;

export const CreateColumnForm: FC<CreateColumnFormProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslations('main');
  const { id: boardId } = useParams() as ParamsType;
  const dispatch = useAppDispatch();

  const handleSubmitForm = useCallback(
    (values: FormValues) => {
      const formValues = {
        title: values.title,
        boardId,
      };
      dispatch(createColumn(formValues));
      onClose();
    },
    [boardId, dispatch, onClose],
  );

  const handleSubmitFailed = (errorInfo: unknown) => {
    openNotificationError({
      message: 'Error',
      description: `${errorInfo}`,
    });
  };

  return (
    <Modal title={t('create_new_column')} isOpen={isOpen} onClose={onClose}>
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
        <Form.Item
          label={t('title')}
          name="title"
          rules={[{ required: true, min: 3, message: `${t('min_input_len')}` }]}
        >
          <Input />
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
          <Button key="submit" type="primary" htmlType="submit">
            {t('submit')}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
