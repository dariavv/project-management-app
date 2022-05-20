import { FC, useCallback, useState } from 'react';
import { Form, Input, Select } from 'antd';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Modal } from 'components';
// import { useAppDispatch } from 'hooks';
import { openNotificationError } from 'utils/notifications';
// import { useParams } from 'react-router-dom';

type CreateTaskFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

// type ParamsType = {
//   id: string;
// };

export const CreateTaskForm: FC<CreateTaskFormProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslations('main');
  // const { id: boardId } = useParams() as ParamsType;
  const [formValues, setFormValues] = useState('');
  // const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormValues(value);
  };

  const handleSubmitForm = useCallback(() => {
    if (formValues) {
      onClose();
    }
  }, [formValues, onClose]);

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
        <Form.Item label="Assignee">
          <Select>
            <Select.Option value="user">Map users here</Select.Option>
          </Select>
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
