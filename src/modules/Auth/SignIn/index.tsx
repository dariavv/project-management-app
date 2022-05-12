import { FC, useCallback } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Button } from 'components';
import { Form, Input } from 'antd';
import { signIn } from 'store/reducers/authSlice';

type FormValues = {
  login: string;
  password: string;
};

const SignIn: FC = () => {
  const { token, status } = useAppSelector((state) => state.auth);
  const { t } = useTranslations('main');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: FormValues) => {
      const formValues = {
        login: values.login,
        password: values.password,
      };
      dispatch(signIn(formValues));
    },
    [dispatch],
  );

  const handleSubmitFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  // remove and wrap sign in to HOC
  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h2>{t('sign_in')}</h2>
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
          <Link to="/signup">{t('sign_in_account')}</Link>
          <Button type="primary" htmlType="button" onClick={() => navigate('/welcome')}>
            {t('cancel')}
          </Button>
          <Button type="primary" htmlType="submit" loading={status === 'loading'}>
            {t('sign_in')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
