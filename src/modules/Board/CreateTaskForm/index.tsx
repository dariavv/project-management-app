import { FC, useCallback, useState } from 'react';
import { Form, Input, Select } from 'antd';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Modal } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { openNotificationError } from 'utils/notifications';
import { useParams } from 'react-router-dom';
import { createTask } from 'store/reducers/tasksSlice';
import { Column } from 'types';

type CreateTaskFormProps = {
  columnId: Column['id'];
  isOpen: boolean;
  onClose: () => void;
};

type ParamsType = {
  id: string;
};

type ChangeValueType = {
  [key: string]: string;
};

export const CreateTaskForm: FC<CreateTaskFormProps> = ({ columnId, isOpen, onClose }) => {
  const { t } = useTranslations('main');
  const { id: boardId } = useParams() as ParamsType;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assigneeId, setAssigneeId] = useState('');
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const handleChange = (value: ChangeValueType) => {
    if (value.title) setTitle(value.title);
    if (value.description) setDescription(value.description);
  };

  const handleSelect = useCallback(
    (value: string) => {
      const user = users.find((user) => user.login === value);
      if (user) {
        setAssigneeId(user.id);
      }
    },
    [users],
  );

  const handleSubmitForm = useCallback(() => {
    if (title && description && assigneeId) {
      dispatch(createTask({ title, description, userId: assigneeId, boardId, columnId }));
      onClose();
    }
  }, [title, description, assigneeId, dispatch, boardId, columnId, onClose]);

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
        <Form.Item label="Assignee" rules={[{}]}>
          <Select defaultActiveFirstOption={true} onSelect={handleSelect}>
            {users.map((user) => (
              <Select.Option key={user.id} value={user.login}>
                {user.login}
              </Select.Option>
            ))}
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
