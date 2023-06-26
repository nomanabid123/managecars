import React from 'react';
import { Form, Button, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../services/api';
const SignUp = () => {
  const navigate = useNavigate();

  //handle signup api call
  const handleSignUp = async (name, email) => {
    try {
      const res = await authApi.post('/user/signup', {
        name,
        email,
      });

      if (res.status === 201) {
        message.success('User created successfully');
        navigate('/');
      }
    } catch (err) {
      message.error(err?.response?.data?.message || 'Something went wrong');
      console.log(err);
    }
  };

  //handle form submit
  const onFinish = (values) => {
    handleSignUp(values.name, values.email);
  };

  //handle form submit failure
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="form-box">
      <h1 className="form-header">Sign Up</h1>
      <Form
        className="login-form"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* Username field */}
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Email field */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input your email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          {/* Submit button */}
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
          <Button
            type="link"
            htmlType="button"
            onClick={() => {
              navigate('/');
            }}
          >
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
