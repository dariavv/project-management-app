import { FC, useCallback } from 'react';
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
import { openNotificationError } from 'utils/notifications';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

type FormValues = {
  name: string;
  login: string;
  password: string;
};

const SignUp: FC = () => {
  const { t } = useTranslations('main');
  const { token, status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

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
  const errorMessageParser = (errorInfo: ValidateErrorEntity) => {
    return errorInfo.errorFields.map((field) => field.errors[0]);
  };

  const handleSubmitFailed = (errorInfo: ValidateErrorEntity) => {
    console.log(errorMessageParser(errorInfo));
    openNotificationError({
      message: 'Error',
      description: `${errorInfo}`,
    });
  };

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ConteinerWrapper>
        <ConteinerForm>
          <Title>{t('sign_up')}</Title>
          <Form
            form={form}
            onFinish={handleSubmit}
            onFinishFailed={handleSubmitFailed}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <StyledFormItem
              name="name"
              label={t('name')}
              rules={[
                {
                  message: `${t('only_eng')}`,
                  pattern: /^[a-zA-Z]+$/,
                },
                { required: true, min: 3, message: `${t('min_input_len')}` },
              ]}
            >
              <Input />
            </StyledFormItem>
            <StyledFormItem
              name="login"
              label={t('login')}
              rules={[
                {
                  message: `${t('only_eng')}`,
                  pattern: /^[a-zA-Z]+$/,
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
              <StyledLink to="/signin">{t('sign_up_account')}</StyledLink>
              <StyledButton type="primary" htmlType="submit" loading={status === 'loading'}>
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
