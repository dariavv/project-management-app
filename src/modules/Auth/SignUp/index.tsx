import { useCallback } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Form, Input } from 'antd';
import { Button } from 'components';
import { signUp } from 'store/reducers/authSlice';

type FormValues = {
  name: string;
  login: string;
  password: string;
};

const SignUp = () => {
  const { t } = useTranslations('main');
  const { token } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
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
    console.log('Failed:', errorInfo);
  };

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h2>{t('sign_up')}</h2>
      <Link to="/signin">{t('sign_up_account')}</Link>
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
              message: 'Please input your username!',
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
              message: 'Please input your password!',
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
          <Button type="primary" htmlType="button" onClick={() => navigate('/welcome')}>
            {t('cancel')}
          </Button>
          <Button type="primary" htmlType="submit">
            {t('sign_up')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
