import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { Button, Footer, Header } from 'components';

import { Form } from 'antd';
import { useAppSelector } from 'hooks';
import {
  StyledButtonCont,
  StyledForm,
  StyledFormItem,
  StyledHeadingWord,
  StyledInput,
  StyledLink,
  StyledPassInput,
} from '../styled';

type SignInProps = {
  handleSignIn: () => void;
};
export type ISignIn = {
  login: string;
  password: string;
};

const SignIn: FC<SignInProps> = ({ handleSignIn }) => {
  const { token } = useAppSelector((state) => state.auth);

  const { t } = useTranslations('main');

  const onFinish = (values: ISignIn) => {
    console.log('Success:', values);
    handleSignIn();
  };
  const handleLogOut = () => {};

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header handleLogOut={handleLogOut} />
      <StyledForm>
        <StyledHeadingWord>{t('sign_in')}</StyledHeadingWord>
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
              {t('sign_in')}
            </Button>
          </StyledButtonCont>
          <StyledLink to="/signup">{t('sign_in_account')}</StyledLink>
        </Form>
      </StyledForm>
      <Footer />
    </>
  );
};

export default SignIn;
