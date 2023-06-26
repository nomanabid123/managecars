import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button, message } from "antd";
import { createCar, updateCar, getCategories } from "../../../services/api";

const EditCar = ({ handleOk, selectedCar, setSelectedCar }) => {
  console.log(selectedCar);
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
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

  const getCategoriesFromDb = async () => {
    try {
      const res = await getCategories();
      const data = res.data;
      setCategories(data?.data);
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
      form.resetFields();
      handleOk();
      return;
    }
    createNewCar(values);
    form.resetFields();
    handleOk();
  };

  const onFinishFailed = (errorInfo) => {
    form.resetFields();
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    getCategoriesFromDb();
    if (selectedCar) {
      form.setFieldsValue(selectedCar); // Set initial values
    }
  }, [selectedCar, form]);

  return (
    <Form
      form={form}
      name="Manage Car"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Color" name="color">
        <Input />
      </Form.Item>
      <Form.Item label="Model" name="model">
        <Input />
      </Form.Item>
      <Form.Item label="Make" name="make">
        <Input />
      </Form.Item>
      <Form.Item label="Category" name="category">
        <Select>
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
