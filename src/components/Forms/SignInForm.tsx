import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { Form, Input } from 'antd';
import { Button } from 'components/Button';

export interface ISignIn {
  login: string;
  password: string;
}

const StyledForm = styled.section`
  padding: 5%;
  width: 80%;
  margin: 2% auto;
  border: 1px solid black;
`;
const StyledErrorMessage = styled.p`
  color: red;
`;

const SignInForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ISignIn>({ mode: 'onSubmit' });

  const onSubmit: SubmitHandler<ISignIn> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <StyledForm>
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
        autoComplete="off"
        onFinish={handleSubmit(onSubmit)}
      >
        <Form.Item label="Login">
          <Controller
            control={control}
            name="login"
            render={({ field }) => (
              <Input
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                }}
              />
            )}
            rules={{ required: true }}
          />
          <StyledErrorMessage className="error-message">
            {errors.login && '*Please input your Login!'}
          </StyledErrorMessage>
        </Form.Item>
        <Form.Item label="Password">
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                }}
              />
            )}
            rules={{ required: true }}
          />
          <StyledErrorMessage className="error-message">
            {errors.password && '*Please input your password!'}
          </StyledErrorMessage>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledForm>
  );
};

export default SignInForm;
