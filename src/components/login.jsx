import React from 'react';
import { Form, Button, Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../services/api';
import { login } from '../feature/authSlice';
const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //handle login api call
  const handleLogIn = async (email, password) => {
    try {
      const response = await authApi.post('/user/login', {
        email,
        password,
      });
      //if login is successful
      if (response?.status === 201) {
        message.success('User logged in successfully');
        dispatch(login(response.data));
        navigate('/dashboard');
      }
    } catch (error) {
      message.error(error?.response?.data?.message || 'Something went wrong');
      console.log(error);
    }
  };

  //handle form submit
  const onFinish = (values) => {
    handleLogIn(values.email, values.password);
  };

  //handle form submit failure
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="form-box">
      <h1 className="form-header">Log In</h1>
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
        {/* Email input field*/}
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

        {/* Password input field*/}
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* Submit button*/}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
          <Button
            type="link"
            htmlType="button"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LogIn;
