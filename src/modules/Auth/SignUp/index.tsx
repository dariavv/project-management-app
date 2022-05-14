import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { useAppSelector } from 'hooks';
import { Form, Input } from 'antd';
import {
  StyledButtonCont,
  StyledForm,
  StyledFormItem,
  StyledHeadingWord,
  StyledLink,
  StyledButton,
} from '../styled';
import { Footer } from 'components';

export type ISignUp = {
  name: string;
  login: string;
  password: string;
};

const SignUp: FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { t } = useTranslations('main');
  if (token) {
    return <Navigate to="/" replace />;
  }
  const onFinish = (values: ISignUp) => {
    console.log('Success:', values);
  };
  return (
    <>
      <StyledForm>
        <StyledHeadingWord>{t('sign_up')}</StyledHeadingWord>
        <Form
          onFinish={onFinish}
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
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
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
            <StyledButton type="primary" htmlType="submit">
              {t('sign_up')}
            </StyledButton>
          </StyledButtonCont>
          <StyledLink to="/signin">{t('sign_up_account')}</StyledLink>
        </Form>
      </StyledForm>
      <Footer />
    </>
  );
};

export default SignUp;
