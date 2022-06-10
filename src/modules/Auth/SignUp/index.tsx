import { FC, useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Form, Input } from 'antd';
import {
  StyledButtonCont,
  ConteinerForm,
  StyledFormItem,
  Title,
  StyledLink,
  StyledButton,
  ConteinerWrapper,
} from '../styled';
import { Footer } from 'components';
import { signUp } from 'store/reducers/authSlice';

type FormValues = {
  name: string;
  login: string;
  password: string;
};

const SignUp: FC = () => {
  const { t } = useTranslations('main');
  const { token, status } = useAppSelector((state) => state.auth);
  const [isTouched, setIsTouched] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: FormValues) => {
      const formValues = {
        name: values.name,
        login: values.login,
        password: values.password,
      };
      dispatch(signUp(formValues));
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
          <Title>{t('sign_up')}</Title>
          <Form
            onFinish={handleSubmit}
            onFieldsChange={() => {
              setIsTouched(true);
            }}
            validateTrigger="onSubmit"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <StyledFormItem
              name="name"
              label={t('name')}
              rules={[
                { required: true, min: 3, message: `${t('min_input_len')}` },
                {
                  message: `${t('only_eng')}`,
                  pattern: /^[a-zA-Z]+$/,
                },
              ]}
            >
              <Input />
            </StyledFormItem>
            <StyledFormItem
              name="login"
              label={t('login')}
              rules={[
                { required: true, min: 3, message: `${t('min_input_len')}` },
                {
                  message: `${t('only_num_eng')}`,
                  pattern: /^[a-zA-Z0-9]+$/,
                },
              ]}
            >
              <Input />
            </StyledFormItem>
            <StyledFormItem
              name="password"
              label={t('password')}
              rules={[
                { required: true, min: 3, message: `${t('min_input_len')}` },
                {
                  message: `${t('only_num_eng')}`,
                  pattern: /^[a-zA-Z0-9]+$/,
                },
              ]}
            >
              <Input.Password />
            </StyledFormItem>
            <StyledButtonCont>
              <StyledLink to="/signin">{t('sign_up_account')}</StyledLink>
              <StyledButton
                type="primary"
                htmlType="submit"
                loading={status === 'loading'}
                disabled={!isTouched}
              >
                {t('sign_up')}
              </StyledButton>
            </StyledButtonCont>
          </Form>
        </ConteinerForm>
      </ConteinerWrapper>
      <Footer />
    </>
  );
};

export default SignUp;
