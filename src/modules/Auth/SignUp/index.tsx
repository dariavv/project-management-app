import { useCallback } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Form, Input } from 'antd';
import { Button } from 'components';
import { signUp } from 'store/reducers/authSlice';
import { openNotificationError } from 'utils/notifications';

type FormValues = {
  name: string;
  login: string;
  password: string;
};

const SignUp = () => {
  const { t } = useTranslations('main');
  const { token, status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: FormValues) => {
      const formValues = {
        name: values.name,
        login: values.login,
        password: values.password,
      };
      dispatch(signUp(formValues));
    },
    [dispatch],
  );

  const handleSubmitFailed = (errorInfo: unknown) => {
    openNotificationError({
      message: 'Error',
      description: `${errorInfo}`,
    });
  };

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h2>{t('sign_up')}</h2>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        onFinishFailed={handleSubmitFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Login"
          name="login"
          rules={[
            {
              required: true,
              message: 'Please input your login!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Link to="/signin">{t('sign_up_account')}</Link>
          <Button type="primary" htmlType="submit" loading={status === 'loading'}>
            {t('sign_up')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
