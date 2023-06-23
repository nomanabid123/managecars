import React from 'react'
import { Form,Button,Input } from 'antd';
const SignUp = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
        };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        };



    return (
      <div className='form-box'>
        <h1 className='form-header' >Sign Up</h1>
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
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email",
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
}
 
export default SignUp;