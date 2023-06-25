import React from 'react'
import {Form,Input,Select,Button,message} from 'antd'
import { createCar,updateCar } from '../../../services/api';

const EditCar = ({ categories, handleOk, selectedCar, setSelectedCar }) => {
  const createNewCar = async (values) => {
    try {
      const res = await createCar(values);
      if (res.status === 200) {
        message.success("Car created successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateExistingCar = async (values) => {
    try {
      const res = await updateCar(values);
      if (res.status === 200) {
        message.success("Car updated successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onFinish = (values) => {

    if (selectedCar) {
        values._id = selectedCar._id;
        updateExistingCar(values);
        setSelectedCar(null);
        handleOk();
        return;
    }
    createNewCar(values);
    Form.resetFields();
    handleOk();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  console.log(selectedCar);

  return (
    <Form
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
      <Form.Item  label="Name" name="name">
        <Input defaultValue={
            selectedCar?.name
        } />
      </Form.Item>

      <Form.Item label="Color" name="color">
        <Input
            defaultValue={
                selectedCar?.color
            }
        />
      </Form.Item>
      <Form.Item label="Model" name="model">
        <Input defaultValue={
            selectedCar?.model
        } />
      </Form.Item>
      <Form.Item label="Make" name="make">
        <Input
            defaultValue={
                selectedCar?.make
            }
        />
      </Form.Item>
      <Form.Item label="Category" name="category">
        <Select defaultValue={
            selectedCar?.category
        } >
          {categories.map((category) => (
            <Select.Option value={category.name}>{category.name}</Select.Option>
          ))}
        </Select>
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
  );
};
 
export default EditCar;