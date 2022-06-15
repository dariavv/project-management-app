import { FC, useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Footer } from 'components';
import {
  StyledButtonCont,
  ConteinerForm,
  StyledFormItem,
  Title,
  StyledLink,
  StyledButton,
  ConteinerWrapper,
} from '../styled';
import { Form, Input } from 'antd';
import { signIn } from 'store/reducers/authSlice';

type FormValues = {
  login: string;
  password: string;
};

const SignIn: FC = () => {
  const { token, status } = useAppSelector((state) => state.auth);
  const [isTouched, setIsTouched] = useState(false);
  const { t } = useTranslations('auth');
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: FormValues) => {
      const formValues = {
        login: values.login,
        password: values.password,
      };
      dispatch(signIn(formValues));
      setIsTouched(false);
    },
    [dispatch],
  );

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ConteinerWrapper>
        <ConteinerForm>
          <Title>{t('sign_in')}</Title>
          <Form
            onFinish={handleSubmit}
            validateTrigger="onSubmit"
            onFieldsChange={() => {
              setIsTouched(true);
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <StyledFormItem
              name="login"
              label={t('login')}
              rules={[
                {
                  message: `${t('only_num_eng')}`,
                  pattern: /^[a-zA-Z0-9]+$/,
                },
                { required: true, min: 3, message: `${t('min_input_len')}` },
              ]}
            >
              <Input />
            </StyledFormItem>
            <StyledFormItem
              name="password"
              label={t('password')}
              rules={[
                {
                  message: `${t('only_num_eng')}`,
                  pattern: /^[a-zA-Z0-9]+$/,
                },
                { required: true, min: 3, message: `${t('min_input_len')}` },
              ]}
            >
              <Input.Password />
            </StyledFormItem>
            <StyledButtonCont>
              <StyledLink to="/signup">{t('sign_in_account')}</StyledLink>
              <StyledButton
                type="primary"
                htmlType="submit"
                loading={status === 'loading'}
                disabled={!isTouched}
              >
                {t('sign_in')}
              </StyledButton>
            </StyledButtonCont>
          </Form>
        </ConteinerForm>
      </ConteinerWrapper>
      <Footer />
    </>
  );
};

export default SignIn;
