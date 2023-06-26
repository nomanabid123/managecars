import React from 'react'
import axios from 'axios';
import { Form,Button,Input,message } from 'antd';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();
    const handleSignUp = async (name,email) => {
      try{
        const res = await axios.post("http://localhost:3000/user/signup", {
          name,
          email,
        });
        
       if(res.status === 201){
          message.success("User created successfully")
       }

      }catch(err){
        console.log(err)
      }


    }

    const onFinish = (values) => {
        handleSignUp(values.name,values.email)
        };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
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
                type: "email",
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
            <Button
              type="link"
              htmlType="button"
              onClick={() => {
                navigate("/");
              }}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
}
 
export default SignUp;