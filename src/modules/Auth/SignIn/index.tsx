import { Footer } from 'components';
import {
  StyledButtonCont,
  StyledForm,
  StyledFormItem,
  StyledHeadingWord,
  StyledLink,
  StyledButton,
} from '../styled';
import { FC, useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { useAppDispatch, useAppSelector } from 'hooks';

import { Form, Input } from 'antd';
import { signIn } from 'store/reducers/authSlice';

type FormValues = {
  login: string;
  password: string;
};
export type ISignIn = {
  login: string;
  password: string;
};

const SignIn: FC = () => {
  const { token, status } = useAppSelector((state) => state.auth);
  const { t } = useTranslations('main');
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
    // TODO: handle form using react-hook-form
    console.log('Failed:', errorInfo);
  };

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <StyledForm>
        <StyledHeadingWord>{t('sign_in')}</StyledHeadingWord>
        <Form
          onFinish={handleSubmit}
          onFinishFailed={handleSubmitFailed}
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <StyledFormItem
            name="login"
            label="Login"
            rules={[{ required: true, message: 'Please input your Login!' }]}
          >
            <Input />
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
              {t('sign_in')}
            </StyledButton>
          </StyledButtonCont>
          <StyledLink to="/signup">{t('sign_in_account')}</StyledLink>
        </Form>
      </StyledForm>
      <Footer />
    </>
  );
};

export default SignIn;
