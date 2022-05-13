import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { useAppSelector } from 'hooks';
import { Form } from 'antd';
import {
  StyledButtonCont,
  StyledForm,
  StyledFormItem,
  StyledHeadingWord,
  StyledInput,
  StyledLink,
  StyledPassInput,
} from '../styled';
import { Button, Footer, Header } from 'components';

export type ISignUp = {
  name: string;
  login: string;
  password: string;
};

const SignUp: FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { t } = useTranslations('main');
  const handleLogOut = () => {};
  if (token) {
    return <Navigate to="/" replace />;
  }
  const onFinish = (values: ISignUp) => {
    console.log('Success:', values);
  };
  return (
    <>
      <Header handleLogOut={handleLogOut} />
      <StyledForm>
        <StyledHeadingWord>{t('sign_up')}</StyledHeadingWord>
        <Form
          onFinish={onFinish}
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
          autoComplete="off"
        >
          <StyledFormItem
            name="login"
            label="Login"
            rules={[{ required: true, message: 'Please input your Login!' }]}
          >
            <StyledInput />
          </StyledFormItem>
          <StyledFormItem
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <StyledInput />
          </StyledFormItem>
          <StyledFormItem
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <StyledPassInput />
          </StyledFormItem>
          <StyledButtonCont
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              {t('sign_up')}
            </Button>
          </StyledButtonCont>
          <StyledLink to="/signin">{t('sign_up_account')}</StyledLink>
        </Form>
      </StyledForm>
      <Footer />
    </>
  );
};

export default SignUp;
