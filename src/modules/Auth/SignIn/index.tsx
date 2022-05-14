import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { Footer } from 'components';

import { Form, Input } from 'antd';
import { useAppSelector } from 'hooks';
import {
  StyledButtonCont,
  StyledForm,
  StyledFormItem,
  StyledHeadingWord,
  StyledLink,
  StyledButton,
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

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <StyledForm>
        <StyledHeadingWord>{t('sign_in')}</StyledHeadingWord>
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
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password />
          </StyledFormItem>
          <StyledButtonCont>
            <StyledButton type="primary" htmlType="submit">
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
