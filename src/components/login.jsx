import React from "react";
import { Form, Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../feature/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogIn = (email,password)=>{

    try{
      axios
        .post("http://localhost:3000/user/login", {
          email,
          password,
        })
        .then((response) => {
          dispatch(login(response.data))
          navigate("/dashboard")
        })
        .catch((error) => {
          console.log(error);
        });



    }catch(error){
      console.log(error)
    }



  }

  const onFinish = (values) => {
    handleLogIn(values.email,values.password)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password />
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
          <Button type="link" htmlType="button" onClick={
            ()=>{
              navigate("/signup")
            }
          }>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LogIn;
