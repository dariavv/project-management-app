import { FC, useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Select } from 'antd';
import { Button, Modal } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useTranslations } from 'hooks/useTranslations';
import { updateTask } from 'store/reducers/tasksSlice';
import { openNotificationError } from 'utils/notifications';
import { Task } from 'types';
import { UpdateTaskParams } from 'services/tasks';

interface EditTaskFormProps extends Omit<Task, 'id' | 'boardId'> {
  taskId: Task['id'];
  isOpen: boolean;
  onClose: () => void;
}

type ParamsType = {
  id: string;
};

export const EditTaskForm: FC<EditTaskFormProps> = ({
  taskId,
  title,
  description,
  order,
  userId,
  columnId,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslations('main');
  const { id: boardId } = useParams() as ParamsType;
  const [assigneeId, setAssigneeId] = useState('');
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const currentUser = useMemo(() => users.find((user) => user.id === userId), [userId, users]);

  const handleSelect = useCallback(
    (value: string) => {
      const user = users.find((user) => user.login === value);
      if (user) {
        setAssigneeId(user.id);
      }
    },
    [users],
  );

  const handleSubmitForm = useCallback(
    (values: UpdateTaskParams) => {
      const formValues = {
        taskId,
        title: values.title || title,
        description: values.description || description,
        userId: assigneeId || userId,
        boardId,
        columnId,
        order: order,
      };
      dispatch(updateTask(formValues));
      onClose();
    },
    [taskId, title, description, assigneeId, userId, boardId, columnId, order, dispatch, onClose],
  );

  const handleSubmitFailed = (errorInfo: unknown) => {
    openNotificationError({
      message: 'Error',
      description: `${errorInfo}`,
    });
  };

  return (
    <Modal title={t('edit_task')} isOpen={isOpen} onClose={onClose}>
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
          assignee: currentUser?.login,
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
          label={t('description')}
          name="description"
          rules={[{ required: true, min: 3, max: 100, message: `${t('textares_len')}` }]}
        >
          <Input.TextArea rows={4} showCount placeholder="Max length is 100 " maxLength={100} />
        </Form.Item>
        <Form.Item
          label="Assignee"
          name="assignee"
          rules={[{ required: true, message: `${t('required')}` }]}
        >
          <Select onSelect={handleSelect}>
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
          <Button key="submit" type="primary" htmlType="submit">
            {t('submit')}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
