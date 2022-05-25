import { ConfirmationModal } from 'components';
import { FC, useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Form, Input } from 'antd';
import { deleteUser, updateUser } from 'store/reducers/usersSlice';
import { logOut } from 'store/reducers/authSlice';
import { openNotificationError } from 'utils/notifications';
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

  const handleSubmitFailed = (errorInfo: unknown) => {
    openNotificationError({
      message: 'Error',
      description: `${errorInfo}`,
    });
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
            onFinishFailed={handleSubmitFailed}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <StyledFormItem
              name="name"
              label={t('name')}
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input placeholder={`${user?.name}`} />
            </StyledFormItem>
            <StyledFormItem
              name="login"
              label={t('login')}
              rules={[{ required: true, message: 'Please input your Login!' }]}
            >
              <Input placeholder={`${user?.login}`} />
            </StyledFormItem>
            <StyledFormItem
              name="password"
              label={t('password')}
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password />
            </StyledFormItem>
            <StyledButtonCont>
              <StyledButton type="primary" htmlType="submit" loading={status === 'loading'}>
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
