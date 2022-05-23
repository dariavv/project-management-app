import { Footer } from 'components';

import { FC, useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Form, Input } from 'antd';
import { updateUser } from 'store/reducers/usersSlice';
import { openNotificationError } from 'utils/notifications';
import {
  StyledButtonCont,
  ConteinerForm,
  StyledFormItem,
  Title,
  StyledLink,
  StyledButton,
  ConteinerWrapper,
} from './styled';

type FormValues = {
  name: string;
  login: string;
  password: string;
};

const Profile: FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { status, user } = useAppSelector((state) => state.users);
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
    [dispatch],
  );

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
              label="Name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input placeholder={`${user?.name}`} />
            </StyledFormItem>
            <StyledFormItem
              name="login"
              label="Login"
              rules={[{ required: true, message: 'Please input your Login!' }]}
            >
              <Input placeholder={`${user?.login}`} />
            </StyledFormItem>
            <StyledFormItem
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password />
            </StyledFormItem>
            <StyledButtonCont>
              <StyledButton type="primary" htmlType="submit" loading={status === 'loading'}>
                {t('sign_up')}
              </StyledButton>
            </StyledButtonCont>
          </Form>
          <StyledLink to="/">{t('back_to_main')}</StyledLink>
        </ConteinerForm>
      </ConteinerWrapper>
      <Footer />
    </>
  );
};

export default Profile;
