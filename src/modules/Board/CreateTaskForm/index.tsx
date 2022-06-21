import { FC, useCallback, useState } from 'react';
import { Form, Input, Select } from 'antd';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Modal } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useParams } from 'react-router-dom';
import { createTask } from 'store/reducers/tasksSlice';
import { Column, Task } from 'types';

type CreateTaskFormProps = {
  columnId: Column['id'];
  isOpen: boolean;
  onClose: () => void;
};

type ParamsType = {
  id: string;
};

type FormValues = Omit<Task, 'id' | 'order'>;

export const CreateTaskForm: FC<CreateTaskFormProps> = ({ columnId, isOpen, onClose }) => {
  const { t } = useTranslations('board');
  const { id: boardId } = useParams() as ParamsType;
  const [assigneeId, setAssigneeId] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

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
    (values: FormValues) => {
      const formValues = {
        title: values.title,
        description: values.description,
        userId: assigneeId,
        boardId,
        columnId,
      };
      dispatch(createTask(formValues));
      onClose();
      setIsTouched(false);
    },
    [assigneeId, boardId, columnId, dispatch, onClose],
  );

  return (
    <Modal title={t('create_new_task')} isOpen={isOpen} onClose={onClose}>
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 15,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmitForm}
        onFieldsChange={() => {
          setIsTouched(true);
        }}
        validateTrigger="onSubmit"
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
          <Input.TextArea
            rows={4}
            showCount
            placeholder="Max length is 100 characters"
            maxLength={100}
          />
        </Form.Item>
        <Form.Item
          label={t('assignee')}
          name="assignee"
          rules={[{ required: true, message: `${t('required')}` }]}
        >
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
          <Button key="submit" type="primary" htmlType="submit" disabled={!isTouched}>
            {t('submit')}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
