import { ConfirmationModal } from 'components';
import { FC, useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Form, Input } from 'antd';
import { deleteUser, updateUser } from 'store/reducers/usersSlice';
import { logOut } from 'store/reducers/authSlice';
import {
  StyledButtonCont,
  ConteinerForm,
  StyledFormItem,
  Title,
  StyledLink,
  StyledButton,
  ConteinerWrapper,
  DeleteButton,
} from './styled';

type FormValues = {
  name: string;
  login: string;
  password: string;
};

const EditProfile: FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { status, user } = useAppSelector((state) => state.users);
  const [isOpen, setIsOpen] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const { t } = useTranslations('main');
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: FormValues) => {
      if (user) {
        const formValues = {
          id: user.id,
          name: values.name,
          login: values.login,
          password: values.password,
        };
        dispatch(updateUser(formValues));
        setIsTouched(false);
      }
    },
    [dispatch, user],
  );

  const onDelete = () => {
    if (user) {
      dispatch(deleteUser(user.id));
      dispatch(logOut());
    }
  };

  if (!token) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <ConteinerWrapper>
        <ConteinerForm>
          <Title>
            {t('update_user_title')}
            {user?.name}
          </Title>
          <Form
            onFinish={handleSubmit}
            onFieldsChange={() => {
              setIsTouched(true);
            }}
            initialValues={{
              remember: true,
            }}
            validateTrigger="onSubmit"
            autoComplete="off"
          >
            <StyledFormItem
              name="name"
              label={t('name')}
              rules={[
                {
                  message: `${t('only_eng')}`,
                  pattern: /^[a-zA-Z]+$/,
                },
                { required: true, min: 3, message: `${t('min_input_len')}` },
              ]}
            >
              <Input placeholder={`${user?.name}`} />
            </StyledFormItem>
            <StyledFormItem
              name="login"
              label={t('login')}
              rules={[
                {
                  message: `${t('only_num_eng')}`,
                  pattern: /^[a-zA-Z0-9]+$/,
                },
                { required: true, min: 3, message: `${t('min_input_len')}` },
              ]}
            >
              <Input placeholder={`${user?.login}`} />
            </StyledFormItem>
            <StyledFormItem
              name="password"
              label={t('password')}
              rules={[
                {
                  message: `${t('only_num_eng')}`,
                  pattern: /^[a-zA-Z0-9]+$/,
                },
                { required: true, min: 3, message: `${t('min_input_len')}` },
                {
                  whitespace: true,
                  message: `${t('no_spaces')}`,
                },
              ]}
            >
              <Input.Password />
            </StyledFormItem>
            <StyledButtonCont>
              <StyledButton
                type="primary"
                htmlType="submit"
                loading={status === 'loading'}
                disabled={!isTouched}
              >
                {t('update')}
              </StyledButton>
              <DeleteButton
                onClick={() => setIsOpen(true)}
                type="ghost"
                danger
                htmlType="button"
                loading={status === 'loading'}
              >
                {t('delete')}
              </DeleteButton>
            </StyledButtonCont>
          </Form>
          <StyledLink to="/">{t('back_to_main')}</StyledLink>
        </ConteinerForm>
      </ConteinerWrapper>
      <ConfirmationModal isOpen={isOpen} onClose={() => setIsOpen(false)} handleSubmit={onDelete} />
    </>
  );
};

export default EditProfile;
