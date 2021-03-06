import { FC, useCallback, useState } from 'react';
import { Form, Input } from 'antd';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Modal } from 'components';
import { useAppDispatch } from 'hooks';
import { createBoard, updateBoard } from 'store/reducers/boardsSlice';
import { Board } from 'types';

interface CreateEditBoardFormProps extends Partial<Board> {
  isEditForm?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

type FormValues = Pick<Board, 'title' | 'description'>;

export const CreateEditBoardForm: FC<CreateEditBoardFormProps> = ({
  id,
  title,
  description,
  isOpen,
  isEditForm = false,
  onClose,
}) => {
  const { t } = useTranslations('main');
  const [isTouched, setIsTouched] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmitForm = useCallback(
    (values: FormValues) => {
      if (isEditForm) {
        const formValues = {
          title: values.title || title,
          description: values.description || description,
          id,
        };
        dispatch(updateBoard(formValues as Board));
      } else {
        const formValues = {
          title: values.title,
          description: values.description,
        };
        dispatch(createBoard(formValues));
      }
      onClose();
      setIsTouched(false);
    },
    [description, title, id, isEditForm, onClose, dispatch],
  );

  return (
    <Modal
      title={isEditForm ? t('edit_board') : t('create_new_board')}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        initialValues={
          isEditForm
            ? {
                remember: true,
                title: title,
                description: description,
              }
            : {
                remember: true,
              }
        }
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
